var Parser = require("jison").Parser;

var main = function (grammar, expressions, lookupTable) {
    var parser = new Parser(grammar);
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
