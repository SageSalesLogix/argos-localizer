require_relative 'lib/docjs'
require 'nokogiri'

def create_localization_worksheet(source, destination)
  inspector = DocJS::Inspectors::ExtJsInspector.new
  project = inspector.inspect_path(source)
  sdkPath = source.split('\\')[0..-4].push("argos-sdk").push("src").join("\\");
  inspector = DocJS::Inspectors::ExtJsInspector.new
  sdk = inspector.inspect_path(sdkPath)
  generate_xml(destination,project,sdk)
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
	if sdk!=nil then
		sdk.classes do |className|
			process_object(className, rootNode)
		end
		
	end
	
	# write results to file
	open(destination, 'wt', encoding: 'UTF-8') { |f|
		f << xmlDoc.to_xml
	}
	
	print "Finished generating: " + destination
end 

def process_object(object, rootNode)
	object.properties.each do |property|
		next if !ends_with_text("#{property.name}")
		
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

def ends_with_text(string)
	return (string =~ /Text|String|Format$/) != nil
end 

def parse_cli_arguments(args)
  # todo: process arguments
  args
end

def run(options)
  # todo: handle other actions
  create_localization_worksheet(options[0], options[1])
end

run(parse_cli_arguments(ARGV))