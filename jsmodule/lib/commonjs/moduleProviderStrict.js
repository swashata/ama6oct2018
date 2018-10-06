"use strict";

function ourFunction() {
  console.log('🎉');
}

const arrFunc = () => {
  console.log('💥');
}; // // Think like there an object
// exports = {};
// // Then you define the properties of the object
// exports.foo = 'bar';
// exports.baz = 'boom';
// // Somehow, your consumer gets the exports object
// We can not do this
// exports = ourFunction;
// We can rather do this


exports.coolFunc = ourFunction;
exports.anotherFunc = arrFunc; // If we use both, then whichever comes last
// will override the first
// DO NOT MIX exports and module.exports under the file

module.exports = ourFunction;
console.log(exports);