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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values. Otherwise return false
const eqObjects = function(object1, object2) {
  let keysOfObj1 = Object.keys(object1);
  let keysOfObj2 = Object.keys(object2);
  let objHasEqualNumOfKeys = keysOfObj1.length === keysOfObj2.length;
  let result;
  // console.log(keysOfObj1, keysOfObj2, !objHasEqualNumOfKeys);
  if (!objHasEqualNumOfKeys) {
    return false;
  } else {
    //objHasEqualNumOfKeys
    for (const key of keysOfObj1) {
      //<----for of loop starts
      //  console.log(key);
      if (typeof object1[key] !== typeof object2[key]) {
        result = false;
      } else {
        //same type, check values

        if (Array.isArray(object1[key])) {
          // console.log(object1[key], object2[key]);
          result = eqArrays(object1[key], object2[key]);
        } else {
          // console.log("key: ", key, object1[key], object2[key])
          // console.log("POW");
          result = object1[key] === object2[key] ? true : false;
        }
      }
    } //<----for of loop ends
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
// console.log(eqArrays(cd.d, cd2.d), "check if eqArray works");

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
const yourCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
const hisCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
  update: null,
};
assertEqual(eqObjects(myCar, yourCar), true);
assertEqual(eqObjects(myCar, hisCar), false);
