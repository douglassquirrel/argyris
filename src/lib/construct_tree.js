#!/usr/bin/env node

var TreeModel = require("tree-model");

var construct_tree = function(source_data, transformers) {
    tree = new TreeModel();
    return tree.parse(source_data);
}

module.exports = construct_tree;
