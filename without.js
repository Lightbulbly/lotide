const without = function(source, itemsToRemove) {
  let sourceCopy = [...source];
  let resultArr = [];
  for (let i = 0; i < sourceCopy.length; i++) {
    if (itemsToRemove.indexOf(sourceCopy[i]) === -1) {
      resultArr.push(sourceCopy[i]);
    }
  }
  return resultArr;
};

module.exports = without;
