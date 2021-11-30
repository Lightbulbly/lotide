// const _ = require('./index');
// const assertEqual = _.assertEqual;

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



module.exports = findKeyByValue;