var Parser = require("jison").Parser;
var fs = require("fs");
var path = require("path");
var converter = require("../lib/src/converter.js");

var grammar = fs.readFileSync("./lib/src/generateParseTree.lex", "utf8");
var parser = new Parser(grammar);

var addAppropriateParenthesis = function (expression) {
    var parseTree = parser.parse(expression);
    return converter(parseTree, function (node) {
        return node.value.toString();
    }, "(", ")");
};

module.exports = addAppropriateParenthesis;