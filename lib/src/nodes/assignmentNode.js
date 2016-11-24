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
            result = child.type == "Tree" ? child.parent.evaluate(lookupTable, child.childs) : child;
        });
        lookupTable.add(identifier.value, result);
        return result;
    };
    this.toJs = function (lookupTable, args) {
        return [args[0].toJs(lookupTable), this.toString(), args[1].toJs(lookupTable)].join(" ");
    }
};

module.exports = assignmentNode;