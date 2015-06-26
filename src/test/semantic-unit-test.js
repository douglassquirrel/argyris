#!/usr/bin/env node
require("../lib/argyris");

exports.testShouldRepresentAWord = function(test) {
    test.expect(1);
    var blue = new SemanticUnit("blue");
    test.strictEqual(blue.toString(), "blue", "Word not represented");
    test.done();
};

exports.testAWordShouldHaveNoConstituents = function(test) {
    test.expect(1);
    var grass = new SemanticUnit("grass");
    var constituents = grass.getConstituents();
    test.strictEqual(constituents.length, 0,
                     "Word should not have constituents");
    test.done();
};

exports.testAUnitHasNoAttributesToStart = function(test) {
    test.expect(1)
    var river = new SemanticUnit("river");
    var attributes = river.getAttributes();
    test.strictEqual(attributes.length, 0,
                     "New unit should have no attributes");
    test.done();
};
