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

exports.testShouldIdentifyWordsAndSentences = function(test) {
    test.expect(4);
    var word = newUnit("grass");
    var sentence = newUnit("The grass is green.");
    test.strictEqual(word.isWord(), true,
                     "Words should be identified as such");
    test.strictEqual(sentence.isWord(), false,
                     "Sentences should not be identified as words");
    test.strictEqual(word.isSentence(), false,
                     "Words should not be identified as sentences");
    test.strictEqual(sentence.isSentence(), true,
                     "Sentences should be identified as such");
    test.done();
};

exports.testAWordShouldHaveNoAttributesToStart = function(test) {
    test.expect(1);
    var word = newUnit("flower");
    var attributes = word.getAttributes();
    test.strictEqual(attributes.length, 0,
                     "New word should have no attributes");
    test.done();
};

exports.testASentenceShouldHaveATypeToStart = function(test) {
    var checkSentenceType = function(text, expectedType) {
        var sentence = newUnit(text);
        var attributes = sentence.getAttributes();
        test.deepEqual([expectedType], attributes,
                       "New sentence should have correct type attribute");
    };

    test.expect(4);
    checkSentenceType("This is not a pipe.", "statement");
    checkSentenceType("Is this a pipe?",     "question");
    checkSentenceType("Wow, a pipe!",        "exclamation");
    checkSentenceType("lol a pipe wowz",     "statement");
    test.done();
};

exports.testAUnitShouldAcceptNewAttributes = function(test) {
    test.expect(1);
    var unit = newUnit("sad");
    unit.recordAttribute("emotion");
    unit.recordAttribute("adjective");
    var attributes = unit.getAttributes();
    attributes.sort();
    test.deepEqual(attributes, ["adjective", "emotion"],
                   "Unit should record attributes");
    test.done();
};
