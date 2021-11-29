const assert = require('chai').assert;
const middle   = require('../middle');
describe("#middle", () => {
  it("returned empty array for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it(`returned empty array for [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });
  it(`returned [2] for [1,2,3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returned [1, 2] for [1,2]`, () => {
    assert.deepEqual(middle([1, 2]), [1, 2]);
  });
  it(`returned [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it(`returned [4] for [1, 2, 3, 4, 5, 6, 7]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it(`returned [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
  
});
  
  
  