var exponentNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "Exponent";
    this.toString = function () {
        return value.toString();
    };

    this.evaluate = function (lookupTable, args) {
        return Math.pow(args[0].evaluate(lookupTable), args[1].evaluate(lookupTable))
    }
};

module.exports = exponentNode;
