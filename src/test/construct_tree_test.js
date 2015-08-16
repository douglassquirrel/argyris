#!/usr/bin/env node
var construct_tree = require("../lib/construct_tree");
var TreeModel = require("tree-model");

var makeTree = function(model) {
    tree = new TreeModel();
    return tree.parse(model);
}

exports.shouldConstructTrivialTree = function(test) {
    test.expect(1);
    var trivialTree = construct_tree({label: "root"}, []);
    var expectedTree = makeTree({label: "root"});
    console.log(expectedTree.model);
    test.deepEqual(trivialTree.model, expectedTree.model);
    test.done();
};
