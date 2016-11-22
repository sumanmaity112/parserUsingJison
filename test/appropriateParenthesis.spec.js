var chai = require("chai");
var expect = chai.expect;
var appropriateParenthesis = require("../src/appropriateParenthesis.js");

describe("appropriateParenthesis", function () {
    it("should add appropriate parenthesis for basic expression which have one operator and two number", function () {
        expect(appropriateParenthesis("0+3")).to.equal("(0+3)");
        expect(appropriateParenthesis("2+3")).to.equal("(2+3)");
        expect(appropriateParenthesis("2-3")).to.equal("(2-3)");
        expect(appropriateParenthesis("2*3")).to.equal("(2*3)");
        expect(appropriateParenthesis("2/3")).to.equal("(2/3)");
    });

    it("should add appropriate parenthesis for basic expression which have multiple number but multiple same operator", function () {
        expect(appropriateParenthesis("2+3+1")).to.equal("((2+3)+1)");
        expect(appropriateParenthesis("2-3-1")).to.equal("((2-3)-1)");
        expect(appropriateParenthesis("2*3*1")).to.equal("((2*3)*1)");
        expect(appropriateParenthesis("2/3/4")).to.equal("((2/3)/4)");
    });

    it("should add appropriate parenthesis for basic expression and skip empty spaces", function () {
        expect(appropriateParenthesis("2 + 3 + 1  ")).to.equal("((2+3)+1)");
    });

    it("should add appropriate parenthesis for basic expression which have multiple different operators", function () {
        expect(appropriateParenthesis("2+3*1/3")).to.equal("(2+((3*1)/3))");
        expect(appropriateParenthesis("2-3/1*3")).to.equal("(2-((3/1)*3))");
    });
});