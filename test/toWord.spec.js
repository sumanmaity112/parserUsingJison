var chai = require("chai");
var expect = chai.expect;
var toWord = require("../src/toWord.js");

describe("toWord", function () {
    it("should convert basic expression to equivalent word representation with appropriate parenthesis", function () {
        expect(toWord("2 + 3")).to.equal("(two PLUS three)");
        expect(toWord("2 - 3")).to.equal("(two MINUS three)");
        expect(toWord("2 * 3")).to.equal("(two TIMES three)");
        expect(toWord("2 / 3")).to.equal("(two DIVIDE three)");
    });

    it("should convert basic expression to equivalent word representation with appropriate parenthesis which have multiple number but multiple same operator", function () {
        expect(toWord("2+3+1")).to.equal("((two PLUS three) PLUS one)");
        expect(toWord("2-3-1")).to.equal("((two MINUS three) MINUS one)");
        expect(toWord("2*3*1")).to.equal("((two TIMES three) TIMES one)");
        expect(toWord("2/3/4")).to.equal("((two DIVIDE three) DIVIDE four)");
    });

    it("should convert basic expression to equivalent word representation with appropriate parenthesis which have multiple different operators", function () {
        expect(toWord("2+3*1/3")).to.equal("(two PLUS ((three TIMES one) DIVIDE three))");
        expect(toWord("2-3/1*3")).to.equal("(two MINUS ((three DIVIDE one) TIMES three))");
    })
});