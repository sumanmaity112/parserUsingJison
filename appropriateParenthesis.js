var Parser = require("jison").Parser;
var fs = require("fs");
var converter = require("./lib/converter.js");

var grammar = fs.readFileSync("./lib/generateParseTree.lex", "utf8");
var parser = new Parser(grammar);

var addAppropriateParenthesis = function (expressionSrcFile) {
    var expression = fs.readFileSync(expressionSrcFile, "utf8");
    var parseTree = parser.parse(expression);
    console.log(converter(parseTree, function (symbol) {
        return symbol.toString();
    }, "(", ")"))
};

addAppropriateParenthesis(process.argv[2]);