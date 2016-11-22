var converter = function (parseTree, convert, start, end) {
    var convertedResult = "";
    if (start)
        convertedResult = start;
    if (parseTree.child1 instanceof Object && parseTree.child1.child1 !== undefined) {
        convertedResult += converter(parseTree.child1, convert, start, end);
    } else {
        convertedResult += convert(parseTree.child1);
    }
    convertedResult += convert(parseTree.operator);
    if (parseTree.child2 instanceof Object && parseTree.child2.child2 !== undefined) {
        convertedResult += converter(parseTree.child2, convert, start, end);
    } else {
        convertedResult += convert(parseTree.child2);
    }
    return end ? convertedResult + end : convertedResult;
};

module.exports = converter;