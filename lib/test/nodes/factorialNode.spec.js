var FactorialNode = require("../../src/nodes/factorialNode");
var NumberNode = require("../../src/nodes/numberNode");
var chai = require("chai");
var expect = chai.expect;

describe("Factorial Node", function () {
    it("should find the factorial of given argument", function () {
        var node = new FactorialNode("!");
        expect(node.evaluate({}, [new NumberNode(4)])).to.equal(24);
        expect(node.evaluate({}, [new NumberNode(0)])).to.equal(1);
    });
});