// const assertArraysEqual = require('../assertArraysEqual');
const _ = require('../index');
const assertArraysEqual=_.assertArraysEqual;
// const eqArrays=_.eqArrays;
const assert = require('chai').assert; 


assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 4]);

// describe("#assertArraysEqual", () => {
//     it(`logs out Passed for [],[]`, () => {
//         expect( console.log.calledOnce ).to.be.true;
//         expect( console.log.calledWith(`✅✅✅Assertion Passed ${arr1} === ${arr2}`)).to.be.true;
//     });

//     it(`logs out Passed for [1,2,3],[1,2,3]}`, () => {
//         expect( console.log.calledOnce ).to.be.true;
//         expect( console.log.calledWith(`✅✅✅Assertion Passed ${arr1} === ${arr2}`)).to.be.true;
//     });

//     it(`logs out Passed for [1,2,3],[1,2,3]`, () => {
//         expect( console.log.calledOnce ).to.be.true;
//         expect( console.log.calledWith(`✅✅✅Assertion Passed ${arr1} === ${arr2}`)).to.be.true;
//       });

//       it(`logs out Passed for [1,2,3,5], [1,2,3,5]`, () => {
//         expect( console.log.calledOnce ).to.be.true;
//         expect( console.log.calledWith(`✅✅✅Assertion Passed ${arr1} === ${arr2}`)).to.be.true;
//       });
//   });
