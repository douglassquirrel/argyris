#!/usr/bin/env node
require("../lib/argyris");

function newWord(text) {
    if (typeof(text)==='undefined') text = "testword";
    return new SemanticUnit(text);
};

exports.testShouldRepresentAWord = function(test) {
    test.expect(1);
    var blue = newWord("blue");
    test.strictEqual(blue.toString(), "blue", "Word not represented");
    test.done();
};

exports.testAWordShouldHaveNoConstituents = function(test) {
    test.expect(1);
    var word = newWord();
    var constituents = word.getConstituents();
    test.strictEqual(constituents.length, 0,
                     "Word should not have constituents");
    test.done();
};

exports.testAUnitShouldHaveNoAttributesToStart = function(test) {
    test.expect(1)
    var word = newWord();
    var attributes = word.getAttributes();
    test.strictEqual(attributes.length, 0,
                     "New unit should have no attributes");
    test.done();
};

exports.testAUnitShouldAcceptNewAttributes = function(test) {
    test.expect(1)
    var river = newWord("river");
    river.recordAttribute("wet");
    river.recordAttribute("meandering");
    var attributes = river.getAttributes();
    attributes.sort();
    test.deepEqual(attributes, ["meandering", "wet"],
                   "Unit should record attributes");
    test.done();
};
