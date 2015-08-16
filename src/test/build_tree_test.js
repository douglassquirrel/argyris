#!/usr/bin/env node
var build_tree = require("../lib/build_tree");
var TreeModel = require("tree-model");

var makeTree = function(model) {
    tree = new TreeModel();
    return tree.parse(model);
}

var numberToDigits = function(n) {
    if (n < 10) { return [n]; }
    return numberToDigits(Math.floor(n/10)).concat([n%10]);
}

exports.shouldConstructTrivialTree = function(test) {
    test.expect(1);
    var trivialTree = build_tree(1, []);
    var expectedTree = makeTree({info: 1});
    test.deepEqual(trivialTree.model, expectedTree.model);
    test.done();
};

exports.shouldConstructOneLevelTree = function(test) {
    test.expect(1);
    var constructedTree = build_tree(123, [numberToDigits]);
    var expectedTree = makeTree({info: 123,
                                 children: [{info: 1}, {info: 2}, {info: 3}]});
    test.deepEqual(constructedTree.model, expectedTree.model);
    test.done();
}
