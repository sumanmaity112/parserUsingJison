var Parser = require("jison").Parser;
var fs = require("fs");
var convertToWard = require("../lib/src/convertToWord.js");
var converter = require("../lib/src/converter.js");

var grammar = fs.readFileSync("./lib/src/generateParseTree.lex", "utf8");
var parser = new Parser(grammar);

var toWord = function (expression) {
    var parseTree = parser.parse(expression);
    return converter(parseTree, convertToWard, "(", ")");
};
module.exports = toWord;