#!/usr/bin/env node
require("../lib/argyris");

function newUnit(text) {
    if (typeof(text)==='undefined') text = "testword";
    return new SemanticUnit(text);
};

exports.testShouldRepresentAWord = function(test) {
    test.expect(1);
    var blue = newUnit("blue");
    test.strictEqual(blue.toString(), "blue", "Word not represented");
    test.done();
};

exports.testShouldRepresentASentence = function(test) {
    test.expect(1);
    var sentence = newUnit("How are you feeling?");
    test.strictEqual(sentence.toString(), "How are you feeling?",
                     "Sentence not represented");
    test.done();
};

exports.testAWordShouldHaveNoConstituents = function(test) {
    test.expect(1);
    var word = newUnit("river");
    var constituents = word.getConstituents();
    test.strictEqual(constituents.length, 0,
                     "Word should not have constituents");
    test.done();
};

exports.testShouldIdentifyWords = function(test) {
    test.expect(2);
    var word = newUnit("grass");
    var sentence = newUnit("The grass is green.");
    test.strictEqual(word.isWord(), true,
                     "Words should be identified as such");
    test.strictEqual(sentence.isWord(), false,
                     "Sentences should not be identified as words");
    test.done();
};

exports.testAUnitShouldHaveNoAttributesToStart = function(test) {
    test.expect(1)
    var unit = newUnit();
    var attributes = unit.getAttributes();
    test.strictEqual(attributes.length, 0,
                     "New unit should have no attributes");
    test.done();
};

exports.testAUnitShouldAcceptNewAttributes = function(test) {
    test.expect(1)
    var unit = newUnit("sad");
    unit.recordAttribute("emotion");
    unit.recordAttribute("adjective");
    var attributes = unit.getAttributes();
    attributes.sort();
    test.deepEqual(attributes, ["adjective", "emotion"],
                   "Unit should record attributes");
    test.done();
};
