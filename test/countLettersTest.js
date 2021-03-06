const _ = require('../index');
const countLetters = _.countLetters;
const assertEqual = _.assertEqual;
const result1 = countLetters("lighthouse in the house");

console.log(`
#countLetters-----starts here`);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
console.log(`
#countLetters-----ends here`);