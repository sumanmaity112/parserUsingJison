var assignmentNode = function (value, location) {
    this.value = value;
    this.location = location;
    this.type = "Assignment";
    this.toString = function () {
        return value.toString();
    };
    this.evaluate = function (lookupTable, args) {
        var identifier = args.shift();
        var result = undefined;
        args.forEach(function (child) {
            result = child.type == "Tree" ? child.parent.evaluate(lookupTable, child.childs) : child.value;
        });
        lookupTable.add(identifier.value, result);
        return this.value;
    }
};

module.exports = assignmentNode;