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
module.exports = middle;
