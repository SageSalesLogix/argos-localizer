require_relative 'lib/docjs'

def create_localization_worksheet(source, destination)
  inspector = DocJS::Inspectors::ExtJsInspector.new
  project = inspector.inspect_path(source)
  project.classes do |cls, file|
    print "#{cls.name} in #{file.path}\n"
    cls.properties.each do |property|
      print "\t#{property.name}: #{property.type}\n"
    end
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