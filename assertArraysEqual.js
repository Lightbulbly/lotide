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

const assertEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
assertEqual([], []);
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [1, 2, 3, 4]);
assertEqual([1, 2, 3, 5], [1, 2, 3, 4]);
