var toWord = require("../src/convertToWord.js");
var chai = require("chai");
var expect = chai.expect;
describe("Convert to word", function () {
    it("should convert operator to word", function () {
        expect(toWord({value: "+"})).to.equal(" PLUS ");
        expect(toWord({value: "-"})).to.equal(" MINUS ");
        expect(toWord({value: "*"})).to.equal(" TIMES ");
        expect(toWord({value: "/"})).to.equal(" DIVIDE ");
    });

    it("should convert 0 to 9 into word", function () {
        expect(toWord({value: 0})).to.equal("zero ");
        expect(toWord({value: 5})).to.equal("five");
        expect(toWord({value: 9})).to.equal("nine");
    });

    it("should convert multiple digit number to word", function () {
        expect(toWord({value: 112})).to.equal("one hundred twelve");
        expect(toWord({value: 10})).to.equal("ten");
        expect(toWord({value: 20})).to.equal("twenty ");
        expect(toWord({value: 11110})).to.equal("eleven thousand one hundred ten");
        expect(toWord({value: 1000000000})).to.equal("one billion ");
    })
});
