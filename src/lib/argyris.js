#!/usr/bin/env node

var sentenceToUnits = function(text) {
    words = text.split(/[ ]+/);
    return words.map(function(word) { return new SemanticUnit(word); });
}

var isWord = function(text) {
    return text.indexOf(' ') < 0;
}

SemanticUnit = function(text) {
    this.text = text;
    this.attributes = [];
    if (isWord(this.text)) {
        this.constituents = [];
    } else {
        this.constituents = sentenceToUnits(this.text);
    }
};

SemanticUnit.prototype.toString = function() {
    return this.text;
};

SemanticUnit.prototype.getConstituents = function() {
    return [];
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
