var fs = require("fs");
var LookupTable = require("../lib/src/lookupTable");
var variableSubstitutor = require("./variableSubstitutor");
var toJs = require("./toJs");
var text = fs.readFileSync(process.argv[2], "utf8");
console.log(variableSubstitutor(text, new LookupTable()));
console.log("//---------------------------- Equivalent Js Code ----------------------------//")
console.log(toJs(text, new LookupTable()));