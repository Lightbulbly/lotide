const middle = function(arr) {
  let result = [];
  let arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) {
    result = [];
  } else if (arrLength % 2 !== 0) {
    result.push(arr[Math.floor(arrLength / 2 + 1) - 1]);
  } else if (arrLength % 2 === 0) {
    result = [arr[arrLength / 2 - 1], arr[arrLength / 2]];
  }
  //   return middle element of an array
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// a functionthat takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function(arr1, arr2) {
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

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), [1, 2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
