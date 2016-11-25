var factorial = function (number) {
    return number <= 0 ? 1 : number * factorial(number - 1);
};
var factorialNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "Factorial";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function (lookupTable, args) {
        return factorial(args[0].evaluate(lookupTable));
    };
    this.toJs = function (lookupTable, args) {
        return "factorial(" + args[0].toJs(lookupTable) + ")";
    }
};

module.exports = factorialNode;