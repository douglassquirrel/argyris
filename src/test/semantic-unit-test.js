#!/usr/bin/env node
require("../lib/argyris");

exports.testShouldRepresentSimpleWord = function(test){
    test.expect(1);
    var blue = new SemanticUnit("blue");
    test.strictEqual(blue.toString(), "blue", "Simple word not represented");
    test.done();
};
