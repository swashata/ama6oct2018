"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ourFunction = ourFunction;
exports.default = exports.arrFunc = exports.anotherVar = exports.ourVar = void 0;
const ourVar = '📁';
exports.ourVar = ourVar;
const anotherVar = '🐶';
exports.anotherVar = anotherVar;

function ourFunction() {// stuff
}

const arrFunc = () => {// Stuff
};

exports.arrFunc = arrFunc;

function defaultFunc() {// Stuff
}

var _default = defaultFunc; // {default: defaultFunc}
// export {ourVar, anotherVar};

exports.default = _default;