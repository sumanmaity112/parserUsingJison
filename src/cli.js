var fs = require("fs");
var main = require("./variableSubstitutor");
var text = fs.readFileSync(process.argv[2], "utf8");
console.log(main(text));