var lookupTable = function () {
    this.lookupTable = {};
    this.get = function (key) {
        return this.lookupTable[key];
    };
    this.add = function (key, value) {
        this.lookupTable[key] = value;
    };
};

module.exports = lookupTable;
