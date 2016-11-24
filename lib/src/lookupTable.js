var lookupTable = function () {
    this.lookupTable = {};
    this.get = function (key) {
        if (this.lookupTable[key] !== undefined)
            return this.lookupTable[key].value;
        else
            throw new Error(key + " is not defined");
    };
    this.add = function (key, value) {
        this.lookupTable[key] = {value: value};
    };
    this.has = function (key) {
        return !!this.lookupTable[key];
    }
};

module.exports = lookupTable;
