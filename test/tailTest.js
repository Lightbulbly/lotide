const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returned array's length is 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it(`returned array's index 0 is Lighthouse for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
  it(`returned array's index 1 is Labs for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
    
  //Make sure the original array is not modified
  it(`the original array is not modified for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    let array = ["Yo Yo", "Lighthouse", "Labs"];
    tail(array);
    assert.deepEqual(array, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it(`returned array's index 1 is Labs for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
    
  it(`tail function returns empty array when passed in an empty array`, () => {
    assert.deepEqual(tail([]), []);
  });

});


