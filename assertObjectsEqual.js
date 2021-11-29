const eqArrays = require('./eqArrays');
  
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
          result = object1[key] === object2[key] ? true : false;
        }
      }
    } //<----for of loop ends
  }
  return result;
};
  // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



module.exports = assertObjectsEqual;
