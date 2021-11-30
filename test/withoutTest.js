const _ = require('../index');
// const eqArrays = _.eqArrays;
const without = _.without;
const assertArraysEqual = _.assertArraysEqual;

console.log(`
#without-----starts here`);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5]), [2, 4]);

console.log(`#without-----ends here`);

