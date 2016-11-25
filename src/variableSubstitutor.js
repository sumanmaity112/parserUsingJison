var Parser = require("jison").Parser;

var main = function (grammar, expressions, lookupTable) {
    var parser = new Parser(grammar);
    var parseTrees = parser.parse(expressions);
    var finalResult = undefined;
    parseTrees.forEach(function (tree) {
        finalResult = tree.evaluate(lookupTable);
    });
    return finalResult;

};
module.exports = main;