const strictProvider = require('./moduleProviderStrict.js');
console.log(strictProvider);

strictProvider.anotherFunc();
strictProvider.coolFunc();


const defaultProvider = require('./moduleProviderNode.js');
console.log(defaultProvider);
defaultProvider();
