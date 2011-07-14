require 'erb'
require 'trollop'
require 'nokogiri'
require_relative 'lib/docjs'
require 'rkelly'

###
#
#	Project folder -> XML Functions
#
###
def create_localization_worksheet(projectPath, xmlPath, includeSDK)
	inspector = DocJS::Inspectors::ExtJsInspector.new
	project = inspector.inspect_path(projectPath)

	if includeSDK then
		sdkPath = projectPath.split('\\')[0..-4].push("argos-sdk").push("src").join("\\");
		inspector = DocJS::Inspectors::ExtJsInspector.new
		sdk = inspector.inspect_path(sdkPath)
	else
		sdk = nil
	end
	
	generate_xml(xmlPath,project,sdk)
	
end

def generate_xml(destination, project, sdk)

	xmlDoc = Nokogiri::XML::Builder.new(:encoding => 'UTF-8') do |xml|
		xml.localization
	end
	rootNode = xmlDoc.doc.xpath('//localization').first
	
	# add from user project
	project.classes do |className|
			process_object(className, rootNode)
	end
	
	# add from SDK
	if sdk != nil then
		sdk.classes do |className|
			process_object(className, rootNode)
		end
	end
	
	# write results to file
	open(destination, 'wt', encoding: 'UTF-8') { |outputFile|
		outputFile << xmlDoc.to_xml
	}
	
	finished_generating("generating XML worksheet file from your project src folder", destination)
end 

def process_object(object, rootNode)
	object.properties.each do |property|
		next if !is_localizable_property(property)
		
		if "#{property.type}" == "string" then
			# values come in as 'val', here we strip the ''
			cleanValue = "#{property.value}".slice!(1..-1).chop!()
			
		elsif "#{property.type}" == "object" then
			process_subobject("#{object.name}","#{property.name}",property.value, rootNode)
			next
			
		else
			#TODO: handle not string nor object
			next
			
		end
		
		add_node("#{object.name}","#{property.name}", cleanValue, rootNode)
	end
end

def process_subobject(className, subName, object, rootNode)
	object.each do |property, value|
		# sometimes the keys were defined with int (valid js, not valid json)
		if property.is_a?(Integer) then
			property = property.to_s()
		end
		
		if value.is_a? String then
			# values come in as 'val', here we strip the ''
			cleanValue = value.slice!(1..-1).chop!()
			
		# test if further delving is needed
		elsif value.is_a? Hash then
			process_subobject(className, subName+"["+property+"]", value)
			
		else
			#TODO: handle neither string or hash
			next
			
		end
		
		add_node(className,subName+"["+property+"]", cleanValue, rootNode)
	end
end

def add_node(className,property,value,rootNode)
	#<data class=”Mobile.SalesLogix.Account.Detail” property=”acctMgrText”>
	#   <description></description>
	#   <value>String to be Translated</value> 
	#</data>
	dataNode = Nokogiri::XML::Node.new("data", rootNode.document())
	dataNode["class"] = className
	dataNode["property"] = property

	descriptionNode = Nokogiri::XML::Node.new("description", rootNode.document())

	valueNode = Nokogiri::XML::Node.new("value", rootNode.document())
	valueNode.content = value
	
	dataNode.add_child(descriptionNode)
	dataNode.add_child(valueNode)
	
	rootNode.add_child(dataNode)
end

def is_localizable_property(property)
	return (property.name =~ /Text|String|Format$/) != nil
end 



###
#
#	XML -> JS Functions
#
###
def create_localization_js(source, destination)

	# start function -- including this for convience, but can be taken out
	# if you take it out please remove the ending })();
	localize =	"(function() {\n"
	localize <<	"\tvar getV = Sage.Platform.Mobile.Utility.getValue,\n"
	localize <<	"\t\tscope = this,\n"
	localize <<	"\t\tlocalize = function(name, values) {\n"
	localize << "\t\t\tvar target = getV(scope, name);\n"
	localize << "\t\t\tif (target) Ext.override(target, values);\n"
	localize << "\t\t};\n\n"

	# Template strings
	localizeFunctionTemplateText = "\tlocalize('<%= className %>',{\n"+
		"<%= attributeMap %>\n" +
		"\t});\n\n"

	# map collection is for when we have property : { property : value, property : value }
	attributeMapCollectionTemplateText = "\t\t<%= property %> : {\n"+
		"<%= attributeMapCollection %>\n" +
		"\t\t},"
		
	attributeMapItemTemplateText = "\t\t<%= property %> : '<%= value %>',"

	attributeMapCollectionItemTemplateText = "\t\t\t<%= collectionProperty %> : '<%= collectionValue %>',"

	# create the ERB templates
	localizeFunctionTemplate = ERB.new localizeFunctionTemplateText
	attributeMapCollectionTemplate = ERB.new attributeMapCollectionTemplateText
	attributeMapItemTemplate = ERB.new attributeMapItemTemplateText
	attributeMapCollectionItemTemplate = ERB.new attributeMapCollectionItemTemplateText

	@doc = Nokogiri::XML(File.open(source))
	# get a list of nodes that have a class (should be all)
	classSet = @doc.xpath("//@class")
	# remove duplicate class names
	classes = []
	classSet.each do |className|
		classes.push(className.content())
	end
	classes = classes.uniq
	
	classes.each do |className|
		attributeMap = []
		hashBlackList = []
		# get all nodes that are assigned to this class
		nodes = @doc.xpath("//data[@class='"+className+"']")
		nodes.each do |node|
			# check for hash (meaning a property that has a {} for value)
			property = node["property"]
			if property.include?("[") then
				property = property.split("[")[0]
				
				# skip if property is on hash black list
				next if hashBlackList.include?(property)
				
				# else we gather them all up...
				# add this property to the 'we did it already' list
				hashBlackList.push(property)
				
				thisHashes = nodes.xpath("//data[@class='"+className+"'][starts-with(@property,'"+property+"')]")
				
				attributeMapCollection = []
				
				thisHashes.each do |hashNode|
					collectionProperty = hashNode["property"].split("[")[1].chop!()
					collectionValue = fix_quotes(hashNode.at_css("value").inner_text())
					attributeMapCollection.push( attributeMapCollectionItemTemplate.result(binding) )
				end
				
				# chop is to remove trailing , from last map item
				attributeMapCollection = attributeMapCollection.join("\n").chop!()
				
				attributeMap.push ( attributeMapCollectionTemplate.result(binding) )
				next
				
			end
			
			value =  fix_quotes(node.at_css("value").inner_text())
			
			
			attributeMap.push ( attributeMapItemTemplate.result(binding) )
		end
		
		attributeMap = attributeMap.join("\n").chop!()
		
		localize << localizeFunctionTemplate.result(binding)
		
	end
	
	# this is the ending of the anon function from start
	localize << "})();\n"
	
	# save
	open(destination, 'wt') { |f|
		f << localize
	}
	
	finished_generating("generating local .js file from XML", destination)
end

def fix_quotes(val)
	return val.gsub("'","\"")
end



###
#
#	CLI Utiliies
#
###
def finished_generating(action,outfile)
	puts ""
	puts "----------------------------"
	puts "Success! argos-localizer has finished "
	puts action
	puts "and placed it here, as requested:"
	puts outfile
end

def is_create_worksheet(options)
	
	if options[:project_path] == nil || options[:xml_path] == nil then
		return false
	end
	
	if (options[:xml_path] =~ /\.xml$/) == nil then
		return false
	end

	return true
end

def is_create_js(options)

	if options[:xml_path] == nil || options[:js_path] == nil then
		return false
	end
	
	if (options[:xml_path] =~ /\.xml$/) == nil then
		return false
	end

	if (options[:js_path] =~ /\.js$/) == nil then
		return false
	end

	return true
end

def show_help()
	# show the options help again maybe?
	puts "try using --help to see the correct list of options"
end

def parse_cli_arguments()
	opts = Trollop::options do
	version "argos-localizer (C) 2011 Sage"
	  banner <<-EOS
	  
Localizer is a 2 step utility:
  1) Generates an XML file that contains the localization strings; and
  
  2) Generates a localization .js file from the XML file

Usage:
	   argos-localizer.rb [options]
	   
where [options] are:

EOS

		opt :project_path, "Project src folder path", :type => :string
		opt :xml_path, "Path of XML file to be generated or used", :type => :string       
		opt :js_path, "Path of javascript file to be generated", :type => :string 
		opt :include_sdk, "Toggle to include argos-sdk when generating XML", :default => true
		opt :js_template, "Relative Path to js template file", :type=> :string, default => "argos-localizer.erb"
	end 
	return opts
end

def run(options)
	if is_create_worksheet(options) then
		create_localization_worksheet(options[:project_path], options[:xml_path], options[:include_sdk] )
		
	elsif is_create_js(options) then
		create_localization_js(options[:xml_path], options[:js_path])
		
	else
		show_help()
		
	end
end

run(parse_cli_arguments())