var Parser = require("jison").Parser;
var fs = require("fs");
var converter = require("../lib/src/converter.js");

var grammar = fs.readFileSync("./lib/src/generateParseTree.lex", "utf8");
var parser = new Parser(grammar);

var addAppropriateParenthesis = function (expressionSrcFile) {
    var expression = fs.readFileSync(expressionSrcFile, "utf8");
    var parseTree = parser.parse(expression);
    return converter(parseTree, function (node) {
        return node.value.toString();
    }, "(", ")");
};

console.log(addAppropriateParenthesis(process.argv[2]));