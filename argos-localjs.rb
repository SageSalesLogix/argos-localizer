require 'nokogiri'
require 'erb'

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
		"\t\t}\n"
		
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
				
				thisHashes = nodes.xpath("//data[@class='"+className+"'][starts-with(@property,'"+v+"')]")
				
				attributeMapCollection = []
				
				thisHashes.each do |hashNode|
					collectionProperty = hashNode["property"].split("[")[1].chop!()
					collectionValue = fix_quotes(hashNode.at_css("value").inner_text())
					attributeMapCollection.push( attributeMapCollectionItemTemplate.result )
				end
				
				# chop is to remove trailing , from last map item
				attributeMapCollection = attributeMapCollection.join("\n").chop!()
				
				attributeMap.push ( attributeMapCollectionTemplate.message )
				next
				
			end
			
			value =  fix_quotes(node.at_css("value").inner_text())
			
			attributeMap.push ( attributeMapItemTemplateText.message )
		end
		
		attributeMap = attribute.join("\n").chop!()
		
		localize << localizeFunctionTemplate.message
		
	end
	
	# this is the ending of the anon function from start
	localize << "})();\n"
	
	# save
	open(destination, 'wt') { |f|
		f << localize
	}
	puts "Finished generating: "+destination

end

def fix_quotes(val)
	return val.gsub("'","\"")
end

def parse_cli_arguments(args)
  # todo: process arguments
  args
end

def run(options)
  # todo: handle other actions
  create_localization_js(options[0], options[1])
end

run(parse_cli_arguments(ARGV))