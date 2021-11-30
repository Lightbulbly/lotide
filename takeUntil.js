const takeUntil = function(array, callback) {
  let results = [];
  // console.log("array: ", array);
  // console.log("callback: ", callback);
  let i = 0;
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    } else {
      break;
    }
  }
  //  console.log(results);
  return results;
};



module.exports = takeUntil;
