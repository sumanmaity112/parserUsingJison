var Parser = require("jison").Parser;
var fs = require("fs");

var grammar = fs.readFileSync("./lib/src/advancedParseTreeGenerator.lex", "utf8");
var parser = new Parser(grammar);

var main = function (expressions, lookupTable) {
    var parseTrees = parser.parse(expressions);
    var finalResult = parseTrees.map(function (tree) {
        var jsCode = tree.toJs(lookupTable);
        if (tree.parent.type !== "Assignment")
            jsCode = "console.log(" + jsCode + ")";
        return jsCode + ";";
    });

    return finalResult.join("\n");

};
module.exports = main;
