"use strict";

// Strict cjs
const foo = 'bar';
exports.foo = foo;
const bar = 'Bar=z';
exports.bar = bar; // Here exports means this object
// {foo: 'bar', bar: 'Bar=z'}