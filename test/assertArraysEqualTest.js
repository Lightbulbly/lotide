const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 4]);