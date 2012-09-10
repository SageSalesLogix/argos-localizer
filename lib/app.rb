require 'parallel'
require 'lib/exporter'

module Argos
  class App
    def initialize(opts)
      @opts = opts
    end

    def run
      case @opts.command
        when 'export' then export
        when 'import' then import
      end
    end

    def export
      exporter = Argos::Exporter.new(@opts)
    end

    def import

    end

  end
end