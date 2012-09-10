require 'optparse'

module Argos
  class Options
    attr_accessor :root_dir
    attr_accessor :input_files
    attr_accessor :output_dir
    attr_accessor :command
    attr_accessor :transform
    attr_accessor :erb

    def initialize
      @input_files = []
      @command = 'export'
    end

    def parse(argv)
      create_option_parser.parse!(argv)
      validate
    end

    def create_option_parser
      optparser = OptionParser.new do |opts|
        opts.banner = "Usage: argos-localizer -e||-i [options]"

        opts.on('--import', 'Signifies that the operation is to import localized files and transform '\
        'to javascript, cannot be used with --export.') do
          @command = 'import'
        end

        opts.on('--export', 'Signifies that the operation is to export read javascript and generate '\
        'localized files, cannot be used with --import.') do
          @command = 'export'
        end

        opts.on('-c', '--config=PATH', 'Points to a config file instead of passing them through the command line') do |path|
          path = canonical(path)
          if File.exists?(path)
            config = read_json_config(path)
          else
            exit(1)
          end
          # treat paths inside JSON config relative to the location of
          # config file.  When done, switch back to current working dir.
          @working_dir = File.dirname(path)
          optparser.parse!(config).each {|fname| read_filenames(canonical(fname)) }
          @working_dir = nil
        end

        opts.on('-r', '--root=PATH', 'Directory in which the context of localization will be in, i. e. '\
        'the working directory.') do |path|
          @root_dir = path
        end

        opts.on('-t', '--transform=PATH', 'The xslt file to use for exporting/importing.') do |path|
          @transform = path
        end
        opts.on('-j', '--js-erb=PATH', 'The erb template to use for generating js files.') do |path|
          @erb = path
        end

        opts.on('-o', '--output=PATH', 'The output directory to place the created files.') do |path|
          @output_dir = path
        end

        opts.on('-i', '--input=PATH', 'The input directories/files to be processed.') do |path|
          if path.kind_of?(Array)
            path.each do |fname|
              read_filenames(fname)
            end
          else
            read_filenames(path)
          end
        end

      end

      return optparser
    end

    # Reads JSON configuration from file and returns an array of
    # config options that can be fed into optparser.
    def read_json_config(fname)
      config = []
      json = JSON.parse(File.read(fname))
      json.each_pair do |key, value|
        if value == true
          config += [key.to_s]
        else
          # An option with value or with multiple values.
          # In the latter case, add the option multiple times.
          Array(value).each do |v|
            config += [key.to_s, v.to_s]
          end
        end
      end
      config
    end

    # scans directory for .js files or simply adds file to input files list
    def read_filenames(fname)
      if File.exists?(fname)
        if File.directory?(fname)
          Dir[fname+"/**/*.{js}"].each {|f| @input_files << f }
        else
          @input_files << fname
        end
      end
    end

    # Converts relative path to full path
    #
    # Especially important for running on Windows where C:\foo\bar
    # pathnames are converted to C:/foo/bar which ruby can work on
    # more easily.
    def canonical(path)
      File.expand_path(path, @working_dir)
    end

    # Validates that the needed options are set
    def validate
      if @input_files.length == 0
        exit(1)
      end
    end

  end
end