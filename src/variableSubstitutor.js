var Parser = require("jison").Parser;
var fs = require("fs");

var grammar = fs.readFileSync("./lib/src/advancedParseTreeGenerator.lex", "utf8");
var parser = new Parser(grammar);

var main = function (expressions, lookupTable) {
    var parseTrees = parser.parse(expressions);
    var finalResult = undefined;
    parseTrees.forEach(function (tree) {
        finalResult = tree.evaluate(lookupTable);
    });
    return finalResult;

};
module.exports = main;