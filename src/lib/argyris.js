#!/usr/bin/env node

SemanticUnit = function(text) {
    this.text = text;
    if (isWord(this.text)) {
        this.constituents = [];
        this.attributes = [];
    } else {
        this.constituents = sentenceToUnits(this.text);
        this.attributes = [sentenceType(this.text)];
    }
};

SemanticUnit.prototype.toString = function() {
    return this.text;
};

SemanticUnit.prototype.getConstituents = function() {
    return this.constituents;
};

SemanticUnit.prototype.isWord = function() {
    return this.constituents.length == 0;
}

SemanticUnit.prototype.isSentence = function() {
    return this.constituents.length > 0;
}

SemanticUnit.prototype.getAttributes = function() {
    return this.attributes;
};

SemanticUnit.prototype.recordAttribute = function(attribute) {
    this.attributes.push(attribute);
};

var sentenceToUnits = function(text) {
    var words = text.split(/[ ]+/);
    return words.map(function(word) { return new SemanticUnit(word); });
}

var isWord = function(text) {
    return text.indexOf(' ') < 0;
}

var sentenceType = function(text) {
    var puncMapping = {".": "statement",
                       "?": "question",
                       "!": "exclamation"};
    var punc = text.slice(-1);
    return puncMapping[punc] || "statement";
}
