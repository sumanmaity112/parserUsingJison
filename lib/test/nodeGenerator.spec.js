var chai = require("chai");
var expect = chai.expect;
var nodeGenerators = require("../src/nodeGenerator.js");

describe("nodeGenerator", function () {
    describe("numberNodes", function () {
        it("should generate number node from given value and location", function () {
            var expected = {
                value: 3,
                location: {lineNumber: 2, recent: 2},
                type: "number"
            };
            expect(new nodeGenerators.numberNode(3, {lineNumber: 2, recent: 2})).to.eql(expected);
        });

        it("should generate operator node from given value and location", function () {
            var expected = {
                value: "+",
                location: {lineNumber: 1, recent: 2},
                type: "operator"
            };
            expect(new nodeGenerators.operatorNode("+", {lineNumber: 1, recent: 2})).to.eql(expected);
        });
    })
});