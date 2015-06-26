#!/usr/bin/env node
SemanticUnit = function(text) {
    this.text = text;
    this.attributes = [];
};

SemanticUnit.prototype.toString = function() {
    return this.text;
};

SemanticUnit.prototype.getConstituents = function() {
    return [];
};

SemanticUnit.prototype.getAttributes = function() {
    return this.attributes;
};

SemanticUnit.prototype.recordAttribute = function(attribute) {
    this.attributes.push(attribute);
};
