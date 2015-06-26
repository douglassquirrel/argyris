#!/usr/bin/env node
exports.testShouldRepresentSimpleWord = function(test){
    test.expect(1);
    var blue = new SemanticUnit("blue");
    test.strictEqual(blue.text(), "blue", "Simple word not represented");
    test.done();
};
