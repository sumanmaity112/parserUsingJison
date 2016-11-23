var factorial = function (number) {
    return number <= 0 ? 1 : number * factorial(number - 1);
};
var factorialNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "Assignment";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function (lookupTable, arg) {
        return factorial(arg[0].evaluate(lookupTable));
    }
};

module.exports = factorialNode;