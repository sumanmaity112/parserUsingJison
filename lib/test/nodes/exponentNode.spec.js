var ExponentNode = require("../../src/nodes/exponentNode");
var NumberNode = require("../../src/nodes/numberNode");
var chai = require("chai");
var expect = chai.expect;

describe("Exponent Node", function () {
    it("should evaluate exponent value", function () {
        var node = new ExponentNode("^");
        expect(node.evaluate({},[new NumberNode(4), new NumberNode(2)])).to.equal(16)
    });

    it("should give equivalent js code", function () {
        var node = new ExponentNode("^");
        expect(node.toJs({},[new NumberNode(4), new NumberNode(2)])).to.equal("Math.pow(4,2)");
    });
});