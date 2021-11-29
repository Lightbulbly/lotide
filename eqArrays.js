// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// a function that takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        counter += 1;
      }
    }
    if (counter === arr1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
assertEqual(eqArrays([], []), true); // => should PASS;
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 2, 4]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
