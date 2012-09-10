module Argos
  class SourceFile
    def initialize(contents, filename="", opts={})
      @contents = contents
      @filename = filename
      @opts = opts
      @docs = parse
    end

    def parse
      docs = JsParser.new(@contents, @options).parse
      docs = Ast.new(docs, options).detect_all!
    end

  end
end