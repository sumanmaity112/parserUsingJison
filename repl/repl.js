const readline = require('readline');
var LookupTable = require("./../lib/src/lookupTable.js");
var evaluate = require("./expressionEvaluator");
var fs = require("fs");
var chalk = require("chalk");
var triedToExit = false;

var grammar = fs.readFileSync("./lib/src/advancedParseTreeGenerator.lex", "utf8");
var lookupTable = new LookupTable();

const repl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var evaluateExpression = function (input) {
    try {
        console.log(chalk.yellow(evaluate(input, grammar, lookupTable)));
    } catch (e) {
        console.error(chalk.red(e.message));
        if (e.stack)
            console.error(chalk.red(e.stack));
    }
};

var main = function () {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    repl.prompt();
    repl.on('line', function (input) {
        if (input.match(/^\.exit$/))
            process.exit(0);
        else {
            evaluateExpression(input);
            repl.prompt();
        }
    });
    repl.on('SIGINT', function () {
        if (triedToExit)
            repl.close();
        else {
            triedToExit = true;
            console.log("\n(To exit, press ^C again or type .exit)");
            repl.prompt();
        }
    });
};

main();
