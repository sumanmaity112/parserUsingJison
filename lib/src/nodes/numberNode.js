var numberNode = function (value, location) {
    this.value = Number(value);
    this.location = location;
    this.type = "Number";
    this.toString = function () {
        return value.toString();
    };

    this.evaluate = function () {
        return value;
    }
};

module.exports = numberNode;
