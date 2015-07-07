#!/usr/bin/env node
require("../lib/argyris");

exports.shouldRepresentAWord = function(test) {
    test.expect(1);
    var blue = new Word("blue");
    test.strictEqual(blue.text, "blue", "Word not represented");
    test.done();
};

exports.shouldRepresentASentence = function(test) {
    test.expect(1);
    var sentence = new Sentence("How are you feeling?");
    test.strictEqual(sentence.text, "How are you feeling?",
                     "Sentence not represented");
    test.done();
};

exports.shouldRepresentASection = function(test) {
    test.expect(1);
    var section
        = new Section("Who's on first? No, he's on second. Who's on second?");
    test.strictEqual(section.text,
                     "Who's on first? No, he's on second. Who's on second?",
                     "Section not represented");
    test.done();
};

exports.aWordShouldHaveNoConstituents = function(test) {
    test.expect(1);
    var word = new Word("river");
    var constituents = word.constituents;
    test.strictEqual(constituents.length, 0,
                     "Word should not have constituents");
    test.done();
};

exports.aSentenceShouldHaveWordsAsConstituents = function(test) {
    test.expect(2);
    var sentence = new Sentence("Not the comfy chair!");
    var c = sentence.constituents;
    test.strictEqual(c.length, 4,
                     "Sentence should have all its words as constituents");
    test.strictEqual(c.every(function(u) { return u instanceof Word; }),
                     true, "All sentence constituents should be words");
    test.done();
};

exports.aWordShouldHaveNoAttributesToStart = function(test) {
    test.expect(1);
    var word = new Word("flower");
    var attributes = word.attributes;
    test.strictEqual(attributes.length, 0,
                     "New word should have no attributes");
    test.done();
};

exports.aSentenceShouldHaveATypeToStart = function(test) {
    var checkSentenceType = function(text, expectedType) {
        var sentence = new Sentence(text);
        var attributes = sentence.attributes;
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
