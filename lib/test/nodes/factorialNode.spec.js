var FactorialNode = require("../../src/nodes/factorialNode");
var NumberNode = require("../../src/nodes/numberNode");
var LookupTable = require("../../src/lookupTable");
var chai = require("chai");
var expect = chai.expect;

describe("Factorial Node", function () {
    it("should find the factorial of given argument", function () {
        var node = new FactorialNode("!");
        expect(node.evaluate({}, [new NumberNode(4)])).to.equal(24);
        expect(node.evaluate({}, [new NumberNode(0)])).to.equal(1);
    });

    it("should return equivalent js code", function () {
        var node = new FactorialNode("!");
        expect(node.toJs(new LookupTable(), [new NumberNode(4)])).to.equal("factorial(4)");
    });
});