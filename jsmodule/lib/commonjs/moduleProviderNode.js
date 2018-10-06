"use strict";

function ourFunction() {
  console.log('😜');
} // exports.ourFunction = ourFunction;
// In this case, the consumer would need to use
// require('./asd').ourFunction


module.exports = ourFunction;