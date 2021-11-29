// FUNCTION TO TEST IF TWO ARGUMENTS ARE EQUAL - BY COMPARING ARRAY
// const assertEqual = function (actual, expected) {
//   const equals = (a, b) =>
//     a.length === b.length && a.every((value, index) => value === b[index]);
//   if (actual === expected || equals(actual, expected)) {
//     console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

// FUNCTION TO RETURN ALL BUT THE FIRST ELEMENT OF AN ARRAY
const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else return arr.slice(1);
};
module.exports = tail;

