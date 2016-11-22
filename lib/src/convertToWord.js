var convertNonZeroValuesToWord = function (number) {
    var oneToNine = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var elevenToNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var teens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    var dividersInformation = {
        "100": "hundred",
        "1000": "thousand",
        "100000": "lack",
        "1000000": "million",
        "10000000": "crore",
        "1000000000": "billion"
    };

    if (number < 10) {
        return oneToNine[number];
    }
    if (number < 20) {
        return elevenToNineteen[number % 10];
    }
    if (number < 100) {
        return teens[Math.floor(number / 10)] + " " + convertNonZeroValuesToWord(number % 10);
    }
    var dividers = Object.keys(dividersInformation);

    var index = dividers.length - 1;
    var reminder = 0;
    while (reminder < 1 && index > -1) {
        var divider = +dividers[index];
        reminder = Math.floor(number / divider);
        index--;
    }
    return convertNonZeroValuesToWord(reminder) + " " + dividersInformation[dividers[index + 1]] + " " + convertNonZeroValuesToWord(number % (+dividers[index + 1]));
};

var convertSymbolToWord = function (symbol) {
    switch (symbol) {
        case "+":
            return " PLUS ";
        case "-":
            return " MINUS ";
        case "*":
            return " TIMES ";
        case "/":
            return " DIVIDE ";
        default :
            return symbol;
    }
};

var toWord = function (node) {
    var symbol = node.value;
    if (isNaN(symbol))
        return convertSymbolToWord(symbol);
    return +symbol == 0 ? 'zero ' : convertNonZeroValuesToWord(+symbol);
};

module.exports = toWord;