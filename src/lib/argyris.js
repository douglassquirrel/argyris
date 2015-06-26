#!/usr/bin/env node
SemanticUnit = function(text) {
    this.text = text;
}

SemanticUnit.prototype.toString = function() {
    return this.text;
}
