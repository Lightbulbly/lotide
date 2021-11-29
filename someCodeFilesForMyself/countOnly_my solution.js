const countOnly = function (allItems, itemsToCount) {
  let KeysOfItemToCount = Object.keys(itemsToCount);
  let ValuesOfItemToCount = Object.values(itemsToCount);
  // console.log("allItems:", allItems, "itemsToCount", itemsToCount);
  let result = {};
  for (let i = 0; i < allItems.length; i++) {
    for (let j = 0; j < KeysOfItemToCount.length; j++) {
      if (
        allItems[i] === KeysOfItemToCount[j] &&
        ValuesOfItemToCount[j] === true
      ) {
        // console.log(allItems[i], KeysOfItemToCount[j], ValuesOfItemToCount[j]);
        // console.log(Object.keys(result).indexOf(KeysOfItemToCount[j]) !== -1);
        if (Object.keys(result).indexOf(KeysOfItemToCount[j]) !== -1) {
          result[KeysOfItemToCount[j]] += 1;
        } else {
          result[KeysOfItemToCount[j]] = 1;
        }
      }
    }
  }
  console.log(result);
  return result;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
