var identifierNode = function (value, args, location) {
    this.value = value;
    this.args = args;
    this.location = location;
    this.type = "Identifier";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function (lookupTable) {
        return lookupTable.get([this.value]);
    };
    this.toJs = function (lookupTable) {
        if (lookupTable.has(this.toString()))
            return this.toString();
        lookupTable.add(this.value.toString());
        return "var " + this.toString();
    }
};

module.exports = identifierNode;
