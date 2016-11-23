var Parser = require("jison").Parser;
var LookupTable = require("../lib/src/lookupTable.js");
var fs = require("fs");

var grammar = fs.readFileSync("./lib/src/advancedParseTreeGenerator.lex", "utf8");
var parser = new Parser(grammar);

var main = function (expressions) {
    var lookupTable = new LookupTable();
    var parseTrees = parser.parse(expressions);
    var finalResult = undefined;
    parseTrees.forEach(function (tree) {
        finalResult = tree.evaluate(lookupTable);
    });
    return finalResult;

};
module.exports = main;