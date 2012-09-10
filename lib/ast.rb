require "lib/serializer"
require "lib/evaluator"
require "lib/function_ast"

module JsDuck

  # Analyzes the AST produced by EsprimaParser.
  class Ast
    # Should be initialized with EsprimaParser#parse result.
    def initialize(docs = [], options = {})
      @serializer = Argos::Serializer.new
      @evaluator = Argos::Evaluator.new
      @dojo_declare_patterns = build_dojo_declare_patterns(["dojo"])
      @dojo_define_patterns = build_dojo_define_patterns(["dojo"])
      @docs = docs
    end

    def build_dojo_declare_patterns(namespaces)
      namespaces.map do |ns|
        ["declare"]
      end.flatten
    end

    def build_dojo_define_patterns(namespaces)
      namespaces.map do |ns|
        ["define"]
      end.flatten
    end

    # Performs the detection of code in all docsets.
    #
    # @returns the processed array of docsets. (But it does it
    # destructively by modifying the passed-in docsets.)
    #
    def detect_all!
      # First deal only with doc-comments
      doc_comments = @docs.find_all {|d| d[:type] == :doc_comment }

      # Detect code in each docset.  Sometimes a docset has already
      # been detected as part of detecting some previous docset (like
      # Class detecting all of its configs) - in such case, skip.
      doc_comments.each do |docset|
        code = docset[:code]
        docset[:code] = detect(code) unless code && code[:tagname]
      end

      # Return all doc-comments + other comments for which related
      # code was detected.
      @docs.find_all {|d| d[:type] == :doc_comment || d[:code] && d[:code][:tagname] }
    end

    # Given Esprima-produced syntax tree, detects documentation data.
    #
    # This method is exposed for testing purposes only, JSDuck itself
    # only calls the above #detect_all method.
    #
    # @param ast :code from Result of EsprimaParser
    # @returns Hash consisting of the detected :tagname, :name, and
    # other properties relative to the tag.  Like so:
    #
    #     { :tagname => :method, :name => "foo", ... }
    #
    def detect(ast)
      ast = ast || {}

      exp = expression?(ast) ? ast["expression"] : nil
      var = var?(ast) ? ast["declarations"][0] : nil

      # dojo.declare.("Class", {})
      if exp && dojo_declare?(exp)
        make_class(to_value(exp["arguments"][0]), exp)

        # define("path", [ref], function(instance) { return declare("Class", [], {});})
      elsif exp && dojo_define?(exp)
        make_class(to_value(exp["arguments"][0]), exp)

        # lang.mixin.("Class", {})
        #elsif exp && dojo_mixin?(exp)
        #  make_class(to_value(exp["arguments"][0]), exp)

        # foo = dojo.extend("Parent", {})
        #elsif exp && assignment?(exp) && dojo_extend?(exp["right"])
        # make_class(to_s(exp["left"]), exp["right"])

        # Foo = ...
      elsif exp && assignment?(exp) && class_name?(to_s(exp["left"]))
        make_class(to_s(exp["left"]), exp["right"])

        # var foo = dojo.declare("Parent", {})
      elsif var && var["init"] && dojo_declare?(var["init"])
        make_class(to_value(var["init"]["arguments"][0]), var["init"]["arguments"][2])

        # var Foo = ...
      elsif var && class_name?(to_s(var["id"]))
        make_class(to_s(var["id"]), var["right"])

        # function Foo() {}
      elsif function?(ast) && class_name?(to_s(ast["id"]))
        make_class(to_s(ast["id"]))

        # function foo() {}
      elsif function?(ast)
        make_method(to_s(ast["id"]), ast)

        # foo = function() {}
      elsif exp && assignment?(exp) && function?(exp["right"])
        make_method(to_s(exp["left"]), exp["right"])

        # var foo = function() {}
      elsif var && var["init"] && function?(var["init"])
        make_method(to_s(var["id"]), var["init"])

        # (function() {})
      elsif exp && function?(exp)
        make_method(exp["id"] ? to_s(exp["id"]) : "", exp)

        # foo: function() {}
      elsif property?(ast) && function?(ast["value"])
        make_method(key_value(ast["key"]), ast["value"])

        # foo = ...
      elsif exp && assignment?(exp)
        make_property(to_s(exp["left"]), exp["right"])

        # var foo = ...
      elsif var
        make_property(to_s(var["id"]), var["init"])

        # foo: ...
      elsif property?(ast)
        make_property(key_value(ast["key"]), ast["value"])

        # foo;
      elsif exp && ident?(exp)
        make_property(to_s(exp))

        # "foo"  (inside some expression)
      elsif string?(ast)
        make_property(to_value(ast))

        # "foo";  (as a statement of it's own)
      elsif exp && string?(exp)
        make_property(to_value(exp))

      else
        make_property()
      end
    end

    private

    def expression?(ast)
      ast["type"] == "ExpressionStatement"
    end

    def call?(ast)
      ast["type"] == "CallExpression"
    end

    def assignment?(ast)
      ast["type"] == "AssignmentExpression"
    end

    def return?(ast)
      ast["type"] == "ReturnStatement"
    end

    def dojo_declare?(ast)
      call?(ast) && @dojo_declare_patterns.include?(to_s(ast["callee"]))
    end

    def dojo_define?(ast)
      call?(ast) && @dojo_define_patterns.include?(to_s(ast["callee"]))
    end

    def dojo_mixin?(ast)
      if call?(ast)
        return to_s(ast["callee"]) == "lang.mixin"
      elsif return?(ast)
        return to_s(ast["argument"]["callee"]) == "lang.mixin"
      end
      false
    end

    def dojo_extend?(ast)
      call?(ast) && (to_s(ast["callee"]) == "dojo.extend" || to_s(ast["callee"]) == "lang.extend")
    end

    def function?(ast)
      ast["type"] == "FunctionDeclaration" || ast["type"] == "FunctionExpression" || empty_fn?(ast)
    end

    def empty_fn?(ast)
      ast["type"] == "MemberExpression" && to_s(ast) == "Ext.emptyFn"
    end

    def var?(ast)
      ast["type"] == "VariableDeclaration"
    end

    def property?(ast)
      ast["type"] == "Property"
    end

    def ident?(ast)
      ast["type"] == "Identifier"
    end

    def string?(ast)
      ast["type"] == "Literal" && ast["value"].is_a?(String)
    end

    # Class name begins with upcase char
    def class_name?(name)
      return name.split(/\./).last =~ /\A[A-Z]/
    end

    def make_class(name, ast=nil)
      cls = {
          :tagname => :class,
          :name => name,
      }

      # apply information from Ext.extend, Ext.define, or {}
      if ast
        if dojo_extend?(ast)
          args = ast["arguments"]
          cls[:extends] = to_s(args[0])
          if args.length == 2 && args[1]["type"] == "ObjectExpression"
            detect_class_members_from_object(cls, args[1])
          end
        elsif dojo_define?(ast)
          detect_dojo_define(cls, ast)
        elsif ast["type"] == "ObjectExpression"
          detect_class_members_from_object(cls, ast)
        elsif ast["type"] == "ArrayExpression"
          detect_class_members_from_array(cls, ast)
        end
      end

      return cls
    end

    # Inspects dojo.define() and copies detected properties over to the
    # given cls Hash
    def detect_dojo_define(cls, ast)
      # defaults
      cls[:code_type] = :dojo_define

      if ast["arguments"].length == 3
        ast["arguments"][2]["body"]["body"].each do |arg|
          if arg["type"] == "ReturnStatement"
            if arg["argument"]["callee"]["name"] == "declare"
              cls[:name] = arg["argument"]["arguments"][0]["value"]
              cls[:members] = []
              each_pair_in_object_expression(arg["argument"]["arguments"][2]) do |key, value, pair|
                detect_method_or_property_force_owner(cls, key, value, pair)
              end

            end
            if arg["argument"]["callee"]["property"] && ( arg["argument"]["callee"]["property"]["name"]== "setObject")
              cls[:name] = arg["argument"]["arguments"][0]["value"]
              detect_class_members_from_object(cls, arg["argument"]["arguments"][1])
            end
          end
        end
      end
    end

    # Detects class members from object literal
    def detect_class_members_from_object(cls, ast)
      cls[:members] = []
      each_pair_in_object_expression(ast) do |key, value, pair|
        detect_method_or_property(cls, key, value, pair)
      end
    end

    # Detects class members from array literal
    def detect_class_members_from_array(cls, ast)
      cls[:members] = []
      ast["elements"].each do |el|
        detect_method_or_property(cls, key_value(el), el, el)
      end
    end

    # Detects item in object literal either as method or property
    def detect_method_or_property(cls, key, value, pair)
      if function?(value)
        m = make_method(key, value)
        cls[:members] << m if apply_autodetected(m, pair)
      else
        p = make_property(key, value)
        cls[:members] << p if apply_autodetected(p, pair)
      end
    end
    # Detects item in object literal either as method or property
    def detect_method_or_property_force_owner(cls, key, value, pair)
      if function?(value)
        m = make_method(key, value)
        m[:owner] = cls[:name]
        apply_autodetected(m, pair)
        cls[:members] << m
      else
        p = make_property(key, value)
        p[:owner] = cls[:name]
        apply_autodetected(p, pair)
        cls[:members] << p
      end
    end
    def make_string(cfg_value)
      return nil unless cfg_value

      parent = to_value(cfg_value)

      return parent.is_a?(String) ? parent : nil
    end

    def make_string_list(cfg_value)
      return [] unless cfg_value

      classes = Array(to_value(cfg_value))

      return classes.all? {|c| c.is_a? String } ? classes : []
    end

    def make_mixins(cfg_value)
      return [] unless cfg_value

      v = to_value(cfg_value)
      classes = v.is_a?(Hash) ? v.values : Array(v)

      return classes.all? {|c| c.is_a? String } ? classes : []
    end

    def make_singleton(cfg_value)
      cfg_value && to_value(cfg_value) == true
    end

    def make_configs(ast, defaults={})
      configs = []

      each_pair_in_object_expression(ast) do |name, value, pair|
        cfg = make_property(name, value, :cfg)
        cfg.merge!(defaults)
        configs << cfg if apply_autodetected(cfg, pair)
      end

      configs
    end

    def make_statics(ast, defaults={})
      statics = []

      each_pair_in_object_expression(ast) do |name, value, pair|
        if function?(value)
          s = make_method(name, value)
        else
          s = make_property(name, value)
        end

        s[:meta] = {:static => true}
        s.merge!(defaults)

        statics << s if apply_autodetected(s, pair, defaults[:inheritable])
      end

      statics
    end

    # Sets auto-detection related properties :autodetected and
    # :inheritdoc on the given member Hash.
    #
    # When member has a comment, adds code to the related docset and
    # returns false.
    #
    # Otherwise detects the line number of member and returns true.
    def apply_autodetected(m, ast, inheritable=true)
      docset = find_docset(ast)

      if !docset || docset[:type] != :doc_comment
        if inheritable
          m[:inheritdoc] = {}
        else
          if ast["key"]["name"].start_with? '_'
            m[:private] = true
          end
        end
        m[:autodetected] = true
      end

      if docset
        docset[:code] = m
        return false
      else
        # Get line number from third place at range array.
        # This third item exists in forked EsprimaJS at
        # https://github.com/nene/esprima/tree/linenr-in-range
        m[:linenr] = ast["range"][2]
        return true
      end
    end

    # Looks up docset associated with given AST node.
    # A dead-stupid and -slow implementation, but works.
    def find_docset(ast)
      @docs.find do |docset|
        docset[:code] == ast
      end
    end

    def make_method(name, ast=nil)
      return {
          :tagname => :method,
          :name => name,
          :params => make_params(ast)
      }
    end

    def make_params(ast)
      if ast && !empty_fn?(ast)
        ast["params"].map {|p| {:name => to_s(p)} }
      else
        []
      end
    end

    def make_property(name=nil, ast=nil, tagname=:property)
      return {
          :tagname => tagname,
          :name => name,
          :type => make_value_type(ast),
          :default => make_default(ast),
      }
    end

    def make_default(ast)
      ast && to_value(ast) != nil ? to_s(ast) : nil
    end

    def make_value_type(ast)
      if ast
        v = to_value(ast)
        if v.is_a?(String)
          "String"
        elsif v.is_a?(Numeric)
          "Number"
        elsif v.is_a?(TrueClass) || v.is_a?(FalseClass)
          "Boolean"
        elsif v.is_a?(Array)
          "Array"
        elsif v.is_a?(Hash)
          "Object"
        elsif v == :regexp
          "RegExp"
        else
          nil
        end
      else
        nil
      end
    end

    # -- various helper methods --

    # Iterates over keys and values in ObjectExpression.  The keys
    # are turned into strings, but values are left as is for further
    # processing.
    def each_pair_in_object_expression(ast)
      return unless ast && ast["type"] == "ObjectExpression"

      ast["properties"].each do |p|
        yield(key_value(p["key"]), p["value"], p)
      end
    end

    # Converts object expression property key to string value
    def key_value(key)
      @evaluator.key_value(key)
    end

    # Fully serializes the node
    def to_s(ast)
      @serializer.to_s(ast)
    end

    # Converts AST node into a value.
    def to_value(ast)
      begin
        @evaluator.to_value(ast)
      rescue
        nil
      end
    end
  end

end

