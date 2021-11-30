const _ = require('../index');
const eqArrays = _.eqArrays;
const assertArraysEqual = _.assertArraysEqual;
const map = _.map;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[word.length - 1]);
const results3 = map(words, (word) => word.length);


console.log(`
#map-----starts here`);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["d", "l", "o", "r", "m"]);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);
console.log(`#map-----ends here`);

