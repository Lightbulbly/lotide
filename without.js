const without = function(source, itemsToRemove) {
  let sourceCopy = [...source];
  let resultArr = [];
  for (let i = 0; i < sourceCopy.length; i++) {
    if (itemsToRemove.indexOf(sourceCopy[i]) === -1) {
      resultArr.push(sourceCopy[i]);
    }
  }
  return resultArr;
};

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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5]), [2, 4]);
