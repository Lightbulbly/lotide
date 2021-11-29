const _ = require('../index');
const assertObjectsEqual = _.assertObjectsEqual;

console.log(`
#assertObjectsEqual-----starts here`);
assertObjectsEqual({a:1,b:2},{a:1,b:2});
assertObjectsEqual({a:1,b:2},{a:1,b:3});
assertObjectsEqual({a:1,b:2},{a:1,b:2,c:3});
assertObjectsEqual({a:1,b:2},{a:1,d:3});
console.log(`#assertObjectsEqual-----ends here`);