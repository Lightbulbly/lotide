// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
const _ = require('../index');
const assertEqual = _.assertEqual;
const eqArrays = _.eqArrays;

console.log(`
#assertObjectsEqual-----starts here`);
assertEqual(assertEqual([], []), true); // => should PASS;
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 2, 4]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log(`#assertObjectsEqual-----ends here`);