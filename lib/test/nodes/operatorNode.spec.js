var OperatorNode = require("../../src/nodes/operatorNode");
var NumberNode = require("../../src/nodes/numberNode");
var chai = require("chai");
var expect = chai.expect;

describe("Operator Node", function () {
    it("should give equivalent js code", function () {
        var node = new OperatorNode("+");
        expect(node.toJs({}, [new NumberNode(4), new NumberNode(2)])).to.equal("(4 + 2)");
    });
});