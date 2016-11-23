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
        return new NumberNode(eval(leftChild + this.value + rightChild));
    }
};

module.exports = operatorNode;

