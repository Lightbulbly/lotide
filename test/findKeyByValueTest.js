const _ = require('../index');
const findKeyByValue = _.findKeyByValue;
const assertEqual = _.assertEqual;


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(`
     #findKeyByValue-----Starts here`);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
console.log(`
     #findKeyByValue-----Starts here`);