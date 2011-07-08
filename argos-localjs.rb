require 'nokogiri'

def create_localization_js(source, destination)

	localize =	"(function() {\n"
	localize +=	"\tvar getV = Sage.Platform.Mobile.Utility.getValue,\n"
	localize +=	"\t\tscope = this,\n"
	localize +=	"\t\tlocalize = function(name, values) {\n"
	localize += "\t\t\tvar target = getV(scope, name);\n"
	localize += "\t\t\tif (target) Ext.override(target, values);\n"
	localize += "\t\t};\n\n"


	@doc = Nokogiri::XML(File.open(source))
	# get a list of nodes that have a class (should be all)
	classSet = @doc.xpath("//@class")
	# remove duplicate class names
	classes = []
	classSet.each do |cs|
		classes.push(cs.content())
	end
	classes = classes.uniq
	
	# for each class name...
	classes.each do |clss|
		hashBlackList = []
		localize += "\tlocalize('"+clss+"', {\n"
		# get all nodes that are assigned to this class
		nodes = @doc.xpath("//data[@class='"+clss+"']")
		nodes.each do |node|
			# check for hash
			nodeName = node["property"]
			if nodeName.include?("[") then
				nodeName = nodeName.split("[")[0]
				# skip if property is on hash black list
				next if hashBlackList.include?(nodeName)
				# else we gather them all up...
				hashBlackList.push(nodeName)
				thisHashes = nodes.xpath("//data[@class='"+clss+"'][starts-with(@property,'"+nodeName+"')]")
#				puts clss+"="+thisHashes.length.to_s()
				localize += "\t\t"+nodeName+" : {\n"
				thisHashes.each do |hashNode|
					localize += "\t\t\t"+(hashNode["property"].split("[")[1].chop!())+" : '"+ fixQuotes(hashNode.at_css("value").inner_text()) +"',\n"
				end
				localize.chomp!().chop!()
				localize += "\n\t\t},\n"
				next
			end
			localize += "\t\t"+node["property"] + " : '" + fixQuotes(node.at_css("value").inner_text()) + "',\n"
		end
		# remove trailing \n and ,
		localize.chomp!().chop!()
		
		localize += "\n\t});\n\n"
	end
	localize += "})();\n"
	
	# save
	open(destination, 'wt') { |f|
		f << localize
	}
	puts "Finished generating: "+destination

end

def fixQuotes(val)
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