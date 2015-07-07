#!/usr/bin/env node

Word = function(text) {
    this.text = text;
    this.constituents = [];
    this.attributes = [];
}

Sentence = function(text) {
    this.text = text;
    this.constituents = sentenceToWords(this.text);
    this.attributes = [sentenceType(this.text)];
}

Section = function(text) {
    this.text = text;
    this.constituents = [];
    this.attributes = [];
}

var sentenceToWords = function(text) {
    var words = text.split(/[ ]+/);
    return words.map(function(word) { return new Word(word); });
}

var sentenceType = function(text) {
    var puncMapping = {".": "declarative",
                       "?": "interrogative",
                       "!": "exclamative"};
    var punc = text.slice(-1);
    return puncMapping[punc] || "declarative";
}
