const _ = require('../index');
// const assertEqual = _.assertEqual;
const eqObjects = _.eqObjects;
const assert = require('chai').assert;



describe("#eqObjects 1/3", () => {
  const ab = { a: "1", b: "2" };
  const ba = { a: "1", b: "2" };
  const abc = { a: "1", b: "2", c: "3" };

  // assertEqual(eqObjects(ab, ba), true);
  // assertEqual(eqObjects(ab, abc), false);
  it(`returns true for ${JSON.stringify(ab)}, ${JSON.stringify(ba)} `, () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it(`returns false for ${JSON.stringify(ab)}, ${JSON.stringify(abc)} `, () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

});
 



// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// console.log(eqArrays(cd.d, cd2.d), "check if eqArray works");

describe("#eqObjects 2/3", () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it(`returns true for ${JSON.stringify(cd)}, ${JSON.stringify(dc)} `, () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it(`returns false for ${ JSON.stringify(cd)}, ${ JSON.stringify(cd2)}`, () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});




// assertEqual(eqObjects(myCar, yourCar), true);
// assertEqual(eqObjects(myCar, hisCar), false);

describe("#eqObjects 3/3", () => {
  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };
  const yourCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };
  const hisCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
    update: null,
  };

  it(`returns true for ${JSON.stringify(myCar)}, ${JSON.stringify(yourCar)} `, () => {
    assert.strictEqual(eqObjects(myCar, yourCar), true);
  });
  it(`returns false for ${JSON.stringify(myCar)}, ${JSON.stringify(hisCar)}`, () => {
    assert.strictEqual(eqObjects(myCar, hisCar), false);
  });
});