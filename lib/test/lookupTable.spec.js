var chai = require("chai");
var expect = chai.expect;
var LookupTable = require("../src/lookupTable");
var NumberNode = require("../src/nodes/numberNode");

describe.only("Lookup Table", function () {
    var lookupTable;
    beforeEach(function () {
        lookupTable = new LookupTable();
    });
    it("should add new identifier to table and give back the result", function () {
        var numberNode = new NumberNode(12);
        lookupTable.add("x", numberNode);
        expect(lookupTable.get("x")).to.equal(numberNode);
    });

    it("should overwrite the value of a identifier with new value", function () {
        var numberNode = new NumberNode(12);
        lookupTable.add("x", numberNode);
        expect(lookupTable.get("x")).to.equal(numberNode);
        var newNumberNode = new NumberNode(20);
        lookupTable.add("x", newNumberNode);
        expect(lookupTable.get("x")).to.equal(newNumberNode);

    });

    it("should not throw an error when value is zero", function () {
        var numberNode = new NumberNode(0);
        lookupTable.add("x", numberNode);
        expect(lookupTable.get("x")).to.equal(numberNode);
        expect(function () {
            lookupTable.get("x")
        }).not.to.throw("x is not defined");
    });

    it("should throw error when it tries to access one identifier which is not present in table", function () {
        var numberNode = new NumberNode(12);
        lookupTable.add("x", numberNode);
        expect(lookupTable.get("x")).to.equal(numberNode);
        expect(function () {
            lookupTable.get("y")
        }).to.throw("y is not defined");
    });

    it("should return true when a identifier is already present", function () {
        lookupTable.add("x", new NumberNode(12));
        expect(lookupTable.has("x")).be.true;
    });

    it("should return false when a identifier is not present", function () {
        expect(lookupTable.has("x")).be.false;
    });
});
