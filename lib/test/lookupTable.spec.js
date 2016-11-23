var chai = require("chai");
var expect = chai.expect;
var LookupTable = require("../src/lookupTable");
var NumberNode = require("../src/nodes/numberNode");

describe("Lookup Table", function () {
    it("should add new identifier to table and give back the result", function () {
        var storage = new LookupTable();
        var numberNode = new NumberNode(12);
        storage.add("x", numberNode);
        expect(storage.get("x")).to.equal(numberNode);
    });

    it("should not throw an error when value is zero", function () {
        var storage = new LookupTable();
        var numberNode = new NumberNode(0);
        storage.add("x", numberNode);
        expect(storage.get("x")).to.equal(numberNode);
        expect(function () {
            storage.get("x")
        }).not.to.throw("x is not defined");
    });

    it("should throw error when it tries to access one identifier which is not present in table", function () {
        var storage = new LookupTable();
        var numberNode = new NumberNode(12);
        storage.add("x", numberNode);
        expect(storage.get("x")).to.equal(numberNode);
        expect(function () {
            storage.get("y")
        }).to.throw("y is not defined");
    });
});
