const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(listOfTVShowsByGenre, queryTVShow) {
  let result = "";
  // console.log(listOfTVShowsByGenre,queryTVShow);
  for (const key in listOfTVShowsByGenre) {
    // console.log(
    //   "key: ", key,
    //   " TVShowName: ", listOfTVShowsByGenre[key],
    //   "query: "queryTVShow
    // );
    if (listOfTVShowsByGenre[key] === queryTVShow) {
      result = key;
      break;
    } else {
      result = undefined;
    }
  }
  // console.log(`this is ${result}`);
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
