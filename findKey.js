// const _ = require('./index');
// const assertEqual = _.assertEqual;
//   Implement the functionfindKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (const key in object) {
    // console.log(object[key]);
    // console.log(callback(object[key]));
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
