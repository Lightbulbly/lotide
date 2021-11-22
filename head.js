// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION TO RETURN THE FIRST ELEMENT OF THE ARRAY
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else return arr[0];
};

//TEST CASE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
