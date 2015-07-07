#!/usr/bin/env node

var nlp = require("nlp_compromise");

Word = function(text) {
    this.text = text;
    this.constituents = [];
    this.attributes = [];
}

Sentence = function(text) {
    this.text = text;
    this.constituents = sentenceToWords(this.text);
    this.attributes = [sentenceFunction(this.text)];
}

Section = function(text) {
    this.text = text;
    this.constituents = sectionToSentences(this.text);
    this.attributes = [];
}

var sentenceToWords = function(text) {
    var words = text.split(/[ ]+/);
    return words.map(function(word) { return new Word(word); });
}

var sectionToSentences = function(text) {
    var textSentences = nlp.sentences(text);
    return textSentences.map(function(s) { return new Sentence(s); });
}

var sentenceFunction = function(text) {
    var puncMapping = {".": "declarative",
                       "?": "interrogative",
                       "!": "exclamative"};
    var punc = text.slice(-1);
    return puncMapping[punc] || "declarative";
}
