var AssignmentNode = require("../../src/nodes/assignmentNode");
var IdentifierNode = require("../../src/nodes/identifierNode");
var NumberNode = require("../../src/nodes/numberNode");
var LookupTable = require("../../src/lookupTable");
var chai = require("chai");
var expect = chai.expect;

describe("Assignment Node", function () {
    it("should add new identifier value to lookup table", function () {
        var node = new AssignmentNode("=");
        var lookupTable = new LookupTable();
        var numberNode = new NumberNode(10);
        node.evaluate(lookupTable, [new IdentifierNode("x"), numberNode]);
        expect(lookupTable.get("x")).to.equal(numberNode);
    });

    it("should evaluate basic expression and give back the result and also add it to lookup table", function () {
        var node = new AssignmentNode("=");
        var lookupTable = new LookupTable();
        var numberNode = new NumberNode(10);
        expect(node.evaluate(lookupTable, [new IdentifierNode("x"), numberNode])).to.equal(numberNode);
        expect(lookupTable.get("x")).to.equal(numberNode);
    });

    it("should evaluate complex expression and give back the result and also add it to lookup table", function () {
        var node = new AssignmentNode("=");
        var lookupTable = new LookupTable();
        var numberNode = new NumberNode(10);
        expect(node.evaluate(lookupTable, [new IdentifierNode("x"), numberNode])).to.equal(numberNode);
    });
    describe("toJs", function () {
        it("should add 'var' as prefix when one identifier is not defined", function () {
            var node = new AssignmentNode("=");
            var lookupTable = new LookupTable();
            var numberNode = new NumberNode(10);
            var identifierNode = new IdentifierNode("x");
            expect(node.toJs(lookupTable, [identifierNode, numberNode])).to.equal("var x = 10");
        });

        it("should not add 'var' as prefix when one identifier is defined", function () {
            var node = new AssignmentNode("=");
            var lookupTable = new LookupTable();
            var numberNode = new NumberNode(10);
            lookupTable.add("x", numberNode);
            var identifierNode = new IdentifierNode("x");
            expect(node.toJs(lookupTable, [identifierNode, numberNode])).to.equal("x = 10");
        });
    });
});
