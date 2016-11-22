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

module.exports = nodeGenerators;
