let foo = require('./foo');
const proxyquire = require('proxyquire');

console.log(foo.baz);
console.log(foo.baz.testexport);

foo = proxyquire('./foo',{
  './baz' : {
    testexport: 'arse',
  },
});

console.log(foo.baz);