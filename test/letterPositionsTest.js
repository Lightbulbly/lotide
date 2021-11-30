const _ = require('../index');
const assertArraysEqual = _.assertArraysEqual;
const letterPositions = _.letterPositions;

console.log(`
#letterPositions-----starts here`);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
console.log(`#letterPositions-----ends here`);




//   console.log (letterPositions("lighthouse in the house"));

// Generate expected Output
// let result1 = [];
//  for (let i=0; i<a.length; i++){
//      result1.push (a[i],i);
//  }

//   const expectedOutput = {
//   l: [0],
//   i: [1,11],
//   g: [2],
//   h: [3,5,15,18]
//   t: [4,14],
//   o: [6,19]
//   u: [7,20]
//   s: [8,21]
//   e: [9,16,22]
//   n: [12]
// };
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
