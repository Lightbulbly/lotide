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

// FUNCTION TO TEST IF TWO ARGUMENTS ARE EQUAL - USING WORKAROUND RECOMMENDED BY COMPASS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION TO RETURN ALL BUT THE FIRST ELEMENT OF AN ARRAY
const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else return arr.slice(1);
};

//TEST CASE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Make sure the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements

//Test if tail function returns empty array when passed in an empty array
console.log("empty arr: ", tail([]), tail([1]));

//Make sure the original array is not modified
assertEqual();
