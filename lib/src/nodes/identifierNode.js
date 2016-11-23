var identifierNode = function (value, args, location) {
    this.value = value;
    this.args = args;
    this.location = location;
    this.type = "Identifier";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function () {
        return value;
    };
};

module.exports = identifierNode;
