var Parser = require("jison").Parser;
var functions = require("../lib/src/symbolToFunction");

var main = function (grammar, expressions, lookupTable) {
    var parser = new Parser(grammar);
    var parseTrees = parser.parse(expressions);
    var finalResult = parseTrees.map(function (tree) {
        var jsCode = "";
        jsCode += tree.toJs(lookupTable);
        if (tree.parent === undefined || tree.parent.type !== "Assignment") {
            if (jsCode.match(/^\s*var [A-Za-z0-9_]+\s*$/)) {
                jsCode = jsCode + ";" + "\n" + "console.log(" + jsCode.split(" ")[1] + ")";
            } else
                jsCode = "console.log(" + jsCode + ")";
        }
        if (tree.parent.type === "Factorial") {
            jsCode = functions(tree.parent.toString()) + jsCode;
        }
        return jsCode + ";";
    });

    return finalResult.join("\n");

};
module.exports = main;
