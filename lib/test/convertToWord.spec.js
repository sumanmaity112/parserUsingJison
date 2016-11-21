var toWord = require("../src/convertToWord.js");
var chai = require("chai");
var expect = chai.expect;
describe("Convert to word", function () {
    it("should convert operator to word", function () {
        expect(toWord("+")).to.equal(" PLUS ");
        expect(toWord("-")).to.equal(" MINUS ");
        expect(toWord("*")).to.equal(" TIMES ");
        expect(toWord("/")).to.equal(" DIVIDE ");
    });

    it("should convert 0 to 9 into word", function () {
        expect(toWord(0)).to.equal("zero ");
        expect(toWord(5)).to.equal("five");
        expect(toWord(9)).to.equal("nine");
    });

    it("should convert multiple digit number to word", function () {
        expect(toWord(112)).to.equal("one hundred twelve");
        expect(toWord(10)).to.equal("ten");
        expect(toWord(20)).to.equal("twenty ");
        expect(toWord(11110)).to.equal("eleven thousand one hundred ten");
        expect(toWord(1000000000)).to.equal("one billion ");
    })
});
