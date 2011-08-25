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
def create_localization_worksheet(options)
	projectPath = options[:project_path]
	
	inspector = DocJS::Inspectors::ExtJsInspector.new
	project = inspector.inspect_path(projectPath)

	if options[:include_sdk]  then
		inspector = DocJS::Inspectors::ExtJsInspector.new
		sdk = inspector.inspect_path(options[:sdk_path])
	else
		sdk = nil
	end
	
	generate_xml(project, sdk, options)
	
end

def generate_xml(project, sdk, options)
	outfile = options[:xml_path]

	# read config
	xmlTemplate =  ERB.new(IO.read(options[:xml_template]), 0, "%<>")
	

	xmlDoc = Nokogiri::XML::Builder.new(:encoding => 'UTF-8') do |xml|
		xml.localization
	end

	rootNode = xmlDoc.doc.xpath("//localization").first
	
	
	options["root"] = rootNode
	options["xml_template"] = xmlTemplate
	
	# add from project
	project.modules do |moduleName|
		process_object(moduleName, options)
	end
	
	project.classes do |className|
		process_object(className, options)
	end
	
	# add from SDK
	if sdk != nil then
		sdk.modules do |moduleName|
			process_object(moduleName, options)
		end
		
		sdk.classes do |className|
			process_object(className, options)
		end
	end
	
	# write results to file
	doc = Nokogiri::XML(xmlDoc.to_xml.gsub(/__/,'-')) 
	xslt = Nokogiri::XSLT(File.read(options[:xslt_template])) 
	open(outfile, 'wt', encoding: 'UTF-8') { |output|
		output << xslt.transform(doc).to_xml 
	}
	
	finished_generating("generated XML worksheet file from your project src folder", outfile)
end 

def process_object(object, options)
	object.properties.each do |property|
		type = is_localizable_type(property, false)
		if property.type == "string" then
			cleanValue = remove_bounding_quotes(property.value)
			
		elsif property.type == "object" then
			process_subobject(object.name, property, options)
			next
			
		else
			#TODO: handle not string nor object
			next

		end
		
		# note we skip non types -after- it has process sub objects
		next if type==false # skip non-words/formats

		add_node(object.name, property.name, cleanValue, type, options)
	end
end

def process_subobject(className, object, options)
	object.value.each_with_index do |(property, value), index|
		type = is_localizable_type(property, false)
		if type == false
			type = is_localizable_type(object.name, false)
		end
		# sometimes the keys were defined with int (valid js, not valid json)
		if property.is_a?(Integer) then
			property = property.to_s()
		end
		
		if value.is_a? String then
			cleanValue = remove_bounding_quotes(value)
			
		# test if further delving is needed
		elsif property.is_a?(Hash) then
			subobject = DocJS::Meta::Property.new(object.name+"["+index.to_s()+"]",nil,"object",property) 
			process_subobject(className, subobject, options)
			next
			
		else
			#TODO: handle neither string or hash
			next
		
		end
		
		# skip non-words/formats
		next if type==false 
		
		add_node(className, object.name+"["+property+"]", cleanValue, type, options)
	end
end

def add_node(className, property, value, type, options)
	rootNode = options["root"]
	rootNode << options["xml_template"].result(binding)
end

def is_localizable_type(property, default)
	propertyName = ""
	
	if property.is_a?(String) then
		propertyName = property
	elsif property.is_a?(Integer) then
		propertyName = property.to_s()
	elsif property.is_a?(Hash) then
		# we let this fall thru because it needs to recursively call
		# process on each key in this hash
		return default
	else
		propertyName = property.name
	end
	
	case true
		when (propertyName =~ /FormatText$/i) != nil	then return "format"
		when (propertyName =~ /message|Text$/i) != nil	then return "text"
	end
	return default
end 

def remove_bounding_quotes(value)
	if value.match(/^['"]/)
		value.slice!(1..-1)
	end
	if value.match(/['"]$/)
		value.chop!()
	end
	return value
end


###
#
#	XML -> JS Functions
#
###
def create_localization_js(options)
	inputXMLFile = options[:xml_path]
	outfile = options[:js_path]
	# map collection is for when we have property : { property : value, property : value }
	# create the ERB templates
	attributeMapItemTemplate = ERB.new "        <%= property %> : '<%= value %>',"
	attributeMapCollectionTemplate = ERB.new "        <%= property %> : {\n<%= attributeMapCollection %>\n\t\t},"
	attributeMapCollectionItemTemplate = ERB.new "            <%= collectionProperty %> : '<%= collectionValue %>',"

	# container for localized objects that contain
	# "className" => "mobile.x.y.z"
	# "attributeMap" => string of all attributes
	localizations = []
	
	@doc = Nokogiri::XML(File.open(inputXMLFile))
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
				isArrayList = false
				
				thisHashes.each do |hashNode|
					splittedPropertyName = hashNode["property"].split("[")
					collectionProperty = splittedPropertyName[1].chop!()
					collectionValue = single_quotes_to_double(hashNode.at_css("value").inner_text())
					
					# test for arrays
					if splittedPropertyName.length > 2 then
						isArrayList = true;
						property = splittedPropertyName[0]+"["+splittedPropertyName[1]+"]['"+splittedPropertyName[2].chop!()+"']"
						value = collectionValue
						attributeMap.push ( attributeMapItemTemplate.result(binding) )
					else
						attributeMapCollection.push( attributeMapCollectionItemTemplate.result(binding) )
					end
					
				end
				
				# chop is to remove trailing , from last map item
				attributeMapCollection = attributeMapCollection.join("\n").chop!()
				
				if isArrayList then
					next
				else
					attributeMap.push ( attributeMapCollectionTemplate.result(binding) )
				end
				
				next
				
			end
			
			value =  single_quotes_to_double(node.at_css("value").inner_text())
			
			
			attributeMap.push ( attributeMapItemTemplate.result(binding) )
		end
		
		attributeMap = attributeMap.join("\n").chop!()
		localizations.push( {"className" => className, "attributeMap" => attributeMap  } )
		
	end
	
	jsTemplate =  ERB.new(IO.read(options[:js_template]), 0, "%<>")
	
	# save
	open(outfile, 'wt') { |file|
		file << jsTemplate.result(binding)
	}
	
	finished_generating("generated local .js file from XML", outfile)
end

def single_quotes_to_double(value)
	return value.gsub("'","\"")
end



###
#
#	CLI Utiliies
#
###
def finished_generating(action,outfile)
	puts ""
	puts "----------------------------"
	puts "Success! argos-localizer has"
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
	puts "Try using --help to see the correct list of options"
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
		opt :sdk_path, "Absolute Path to argos-sdk src folder", :type=> :string, :default => "C:\\code\\mobile\\argos-sdk\\src"
		opt :include_sdk, "true/false to include argos-sdk when generating XML", :default => true
		opt :xml_template, "Relative Path to xml template file (.erb)", :type=> :string, :default => "xml-template.erb"
		opt :js_template, "Relative Path to js template file (.erb)", :type=> :string, :default => "js-template.erb"
		opt :xslt_template, "Relative Path to xml stylesheet template (.xslt)", :type=> :string, :default => "xslt-template.xslt"
	end 
	return opts
end

def run(options)
	if is_create_worksheet(options) then
		create_localization_worksheet(options)
		
	elsif is_create_js(options) then
		create_localization_js(options)
		
	else
		show_help()
		
	end
end

run(parse_cli_arguments())