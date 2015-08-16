#!/usr/bin/env node

var TreeModel = require("tree-model");

var build_tree = function(full_info, dismantlers) {
    var tm = new TreeModel();
    var root = tm.parse({info: full_info});
    if (dismantlers.length > 0) {
        var child_infos = dismantlers[0](full_info);
        var add_child = function(child_info) {
            root.addChild(build_tree(child_info, dismantlers.slice(1)));
        }
        child_infos.forEach(add_child);
    }
    return root;
};

module.exports = build_tree;
