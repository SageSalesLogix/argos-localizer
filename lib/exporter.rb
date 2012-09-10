require 'parallel'
require 'lib/aggregator'
require 'lib/source_file'

module Argos
  class Exporter
    
    def initialize(opts)
      @opts = opts
    end

    def export
      parsed_files = js_parse(@opts.input_files)
      result = aggregate(parsed_files)
    end

    def js_parse(filenames)
      Parallel.map(filenames) do |fname|
        SourceFile.new(JsDuck::IO.read(fname), fname, @opts)
      end
    end

    def aggregate(parsed_files)
      agr = Aggregator.new
      parsed_files.each do |file|
        agr.aggregate(file)
      end
      agr.classify_orphans
      agr.create_global_class
      agr.remove_non_text
      agr.result
    end
  end
end