var fs = require("fs");
var LookupTable = require("../lib/src/lookupTable");
var variableSubstitutor = require("./variableSubstitutor");
var toJs = require("./toJs");

var grammar = fs.readFileSync("./lib/src/advancedParseTreeGenerator.lex", "utf8");

var text = fs.readFileSync(process.argv[2], "utf8");
console.log(variableSubstitutor(grammar, text, new LookupTable()));
console.log("//---------------------------- Equivalent Js Code ----------------------------//")
console.log(toJs(grammar, text, new LookupTable()));