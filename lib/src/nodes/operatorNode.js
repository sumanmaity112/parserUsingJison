var NumberNode = require("./numberNode");
var operatorNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "Operator";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function (lookupTable, args) {
        var leftChild = args[0].evaluate(lookupTable);
        var rightChild = args[1].evaluate(lookupTable);
        return eval(leftChild + this.value + rightChild);
    };

    this.toJs = function (lookupTable, args) {
        return "(" + [args[0].toJs(lookupTable),
                this.value.toString(), args[1].toJs(lookupTable)].join(" ") + ")";
    };
};

module.exports = operatorNode;

