var operatorNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "Operator";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function (lookupTable, args) {
        return eval(args[0].value + this.value + args[1].value);
    }
};

module.exports = operatorNode;

