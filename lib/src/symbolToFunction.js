var stores = {
    "!": "var factorial = function (number) {" +
    "return number <= 0 ? 1 : number * factorial(number - 1);" +
    "};\n"
};

module.exports = function (symbol) {
    return stores[symbol];
};