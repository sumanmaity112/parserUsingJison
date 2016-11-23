var chai = require("chai");
var expect = chai.expect;
var variableSubstituition = require("../src/variableSubstitutor");
describe("variableSubstitutor", function () {
    it("should substitute basic variable and evaluate result", function () {
        expect(variableSubstituition("2+3;")).to.equal(5);
    });
});