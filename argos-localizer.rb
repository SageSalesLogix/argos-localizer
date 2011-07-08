require_relative 'lib/docjs'
require 'builder'
BUILDER = Builder::XmlMarkup.new(:indent => 2)

def create_localization_worksheet(source, destination)
  inspector = DocJS::Inspectors::ExtJsInspector.new
  project = inspector.inspect_path(source)
  sdkPath = source.split('\\')[0..-4].push("argos-sdk").push("src").join("\\");
  inspector = DocJS::Inspectors::ExtJsInspector.new
  sdk = inspector.inspect_path(sdkPath)
  generate_csv(destination,project,sdk)
end


# Flow: BUILDER is a global xml doc that gets appended to
# as it loops over each property of each class within the project
# currently is whitelisted to string properties and properties that
# end with 'Text' 'Format' 'String'
def generate_csv(dest, proj, sdk)
	# add from user project
	proj.classes do |cls|
			processObject(cls)
	end
	# add from SDK
	if sdk!=nil then
		sdk.classes do |cls|
			processObject(cls)
		end
	end
	
	# write results to file
	open(dest, 'wt', encoding: 'UTF-8') { |f|
		f << "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
		f << "<localization>\n"
		f << BUILDER.target!
		f << "</localization>\n"
	}
	print "Finished generating: " + dest
end 

def endsWithText(val)
	return (val =~ /Text|String|Format$/) != nil
end 

def addNode(clss,prp,val)
	#<data class=”Mobile.SalesLogix.Account.Detail” property=”acctMgrText”>
	#   <description>Context for the value string below</description>
	#   <value>Blah Blah String will be Translated</value> 
	#</data>
	BUILDER.data("class"=>clss, "property"=>prp) { |b|
		# placeholder for internal use by localizers
		b.description("")
		b.value(val)
	}
end

def processObject(obj)
	obj.properties.each do |property|
		next if !endsWithText("#{property.name}")
		if "#{property.type}" == "string" then
			# values come in as 'val', here we strip the ''
			val = "#{property.value}".slice!(1..-1).chop!()
		elsif "#{property.type}" == "object" then
			processSubObject("#{obj.name}","#{property.name}",property.value)
			next
		else
			#TODO: handle this error better
			next
		end
		addNode("#{obj.name}","#{property.name}",val)
	end
end

def processSubObject(name,sub,obj)
	obj.each do |property, value|
		# sometimes the keys were defined with int (valid js, not valid json)
		if property.is_a?(Integer) then
			property = property.to_s()
		end
		
		if value.is_a? String then
			# values come in as 'val', here we strip the ''
			val = value.slice!(1..-1).chop!()
			
		# test if further delving is needed
		elsif value.is_a? Hash then
			processSubObject(name, sub+"["+property+"]", value)
		else
			#TODO: handle this error better
			next
		end
		addNode(name,sub+"["+property+"]",val)
	end
end

def process_localization_worksheet(source)

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