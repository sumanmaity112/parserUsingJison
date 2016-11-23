var tree = function (parent, childs) {
    this.parent = parent;
    this.childs = childs;
    this.type = "Tree";
    this.evaluate = function (lookupTable) {
        return this.parent.evaluate(lookupTable, this.childs);

    }
};

module.exports = tree;