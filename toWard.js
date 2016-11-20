var Parser = require("jison").Parser;
var fs = require("fs");
var convertToWard = require("./lib/convertToWord.js");
var converter = require("./lib/converter.js");

var grammar = fs.readFileSync("./lib/generateParseTree.lex", "utf8");
var parser = new Parser(grammar);

var toWord = function (expressionSrcFile) {
    var expression = fs.readFileSync(expressionSrcFile, "utf8");
    var parseTree = parser.parse(expression);
    console.log(converter(parseTree, convertToWard, "(", ")"))
};

toWord(process.argv[2]);