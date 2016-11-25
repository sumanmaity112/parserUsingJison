var IdentifierNode = require("../../src/nodes/identifierNode");
var LookupTable = require("../../src/lookupTable");
var chai = require("chai");
var expect = chai.expect;

describe("Identifier Node", function () {
    describe("toJs", function () {
        it("should add 'var' as prefix when one identifier is not defined", function () {
            var lookupTable = new LookupTable();
            var identifierNode = new IdentifierNode("x");
            expect(identifierNode.toJs(lookupTable)).to.equal("var x");
        });

        it("should not add 'var' as prefix when one identifier is defined", function () {
            var lookupTable = new LookupTable();
            var identifierNode = new IdentifierNode("x");
            expect(identifierNode.toJs(lookupTable)).to.equal("var x");

            expect(identifierNode.toJs(lookupTable)).to.equal("x");
        });
    });
});