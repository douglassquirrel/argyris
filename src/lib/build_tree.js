#!/usr/bin/env node

var TreeModel = require("tree-model");

var build_tree = function(full_info, dismantlers) {
    tm = new TreeModel();
    root = tm.parse({info: full_info});
    if (dismantlers.length > 0) {
        child_infos = dismantlers[0](full_info);
        var build_child = function(child_info) {
            root.addChild(tm.parse({info: child_info}));
        }
        child_infos.forEach(build_child);
    }
    return root;
};

module.exports = build_tree;
