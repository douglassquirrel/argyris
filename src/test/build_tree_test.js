#!/usr/bin/env node
var build_tree = require("../lib/build_tree");
var TreeModel = require("tree-model");

var numberToDigits = function(n) {
    if (n < 10) { return [n]; }
    return numberToDigits(Math.floor(n/10)).concat([n%10]);
};

var digitToLetters = function(n) {
    var letters = [["z","e","r","o"], ["o","n","e"], ["t","w","o"],
                   ["t","h","r","e","e"], ["f","o","u","r"], ["f","i","v","e"],
                   ["s","i","x"], ["s","e","v","e","n"], ["e","i","g","h","t"],
                   ["n","i","n","e"]];
    return letters[n];
};

var testBuildTree = function(test, root_info, dismantlers, expectedModel) {
    test.expect(1);
    tree = new TreeModel();
    var constructedTree = build_tree(root_info, dismantlers);
    var expectedTree = tree.parse(expectedModel);
    test.deepEqual(constructedTree.model, expectedTree.model);
    test.done();
};

exports.shouldConstructTrivialTree = function(test) {
    testBuildTree(test, 1, [], {info: 1});
};

exports.shouldConstructOneLevelTree = function(test) {
    testBuildTree(test, 123, [numberToDigits],
                  {info: 123,
                   children: [{info: 1}, {info: 2}, {info: 3}]});
};

exports.shouldConstructTwoLevelTree = function(test) {
    testBuildTree(test, 456, [numberToDigits, digitToLetters],
                  {info: 456,
                   children: [{info: 4,
                               children: [{info: "f"}, {info: "o"},
                                          {info: "u"}, {info: "r"}]},
                              {info: 5,
                               children: [{info: "f"}, {info: "i"},
                                          {info: "v"}, {info: "e"}]},
                              {info: 6,
                               children: [{info: "s"}, {info: "i"},
                                          {info: "x"}]}]});
};
