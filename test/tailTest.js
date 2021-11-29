const assertEqual = require('../assertEqual');
const tail =require('../tail');
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