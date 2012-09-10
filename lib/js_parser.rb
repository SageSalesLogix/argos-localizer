require 'lib/esprima'

module Argos

  # JavaScript parser that internally uses Esprima.js
  class JsParser

    # Initializes the parser with JavaScript source code to be parsed.
    def initialize(input, options = {})
      @input = input
    end

    # Parses JavaScript source code and returns array of hashes like this:
    #
    #     {
    #         :code => {...AST data structure for code following the comment...},
    #         :type => :doc_comment, // or :plain_comment
    #     }
    #
    def parse
      @ast = Esprima.instance.parse(@input)
    end

    # All possible node types in Esprima-created abstract syntax tree
    #
    # Each node type maps to list of properties of that node into
    # which we can recurse for further parsing.
    NODE_TYPES = {
        "Program" => ["body"],

        "BlockStatement" => ["body"],
        "BreakStatement" => [],
        "ContinueStatement" => [],
        "DoWhileStatement" => ["body", "test"],
        "DebuggerStatement" => [],
        "EmptyStatement" => [],
        "ExpressionStatement" => ["expression"],
        "ForStatement" => ["init", "test", "update", "body"],
        "ForInStatement" => ["left", "right", "body"],
        "IfStatement" => ["test", "consequent", "alternate"],
        "LabeledStatement" => ["body"],
        "ReturnStatement" => ["argument"],
        "SwitchStatement" => ["discriminant", "cases"],
        "SwitchCase" => ["test", "consequent"],
        "ThrowStatement" => ["argument"],
        "TryStatement" => ["block", "handlers", "finalizer"],
        "CatchClause" => ["param", "body"],
        "WhileStatement" => ["test", "body"],
        "WithStatement" => ["object", "body"],

        "FunctionDeclaration" => ["id", "params", "body"],
        "VariableDeclaration" => ["declarations"],
        "VariableDeclarator" => ["id", "init"],

        "AssignmentExpression" => ["left", "right"],
        "ArrayExpression" => ["elements"],
        "BinaryExpression" => ["left", "right"],
        "CallExpression" => ["callee", "arguments"],
        "ConditionalExpression" => ["test", "consequent", "alternate"],
        "FunctionExpression" => ["body"],

        "LogicalExpression" => ["left", "right"],
        "MemberExpression" => ["object", "property"],
        "NewExpression" => ["callee", "arguments"],
        "ObjectExpression" => ["properties"],
        "Property" => ["key", "value"],

        "SequenceExpression" => ["expressions"],
        "ThisExpression" => [],
        "UnaryExpression" => ["argument"],
        "UpdateExpression" => ["argument"],

        "Identifier" => [],
        "Literal" => [],
    }

  end
end
