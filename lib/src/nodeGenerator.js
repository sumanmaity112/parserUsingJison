var nodeGenerators = {};
nodeGenerators.numberNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "number";
};

nodeGenerators.operatorNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "operator";
};

nodeGenerators.variableNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "variable";
};

nodeGenerators.terminatorNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "terminator";
};

module.exports = nodeGenerators;
