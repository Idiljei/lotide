// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// //Test Cases
// assertArraysEqual(middle([1, 2, 3]), [2]); //true
// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);//true
// assertArraysEqual(middle([1, 2, 3, 4]), [2]);//false

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("if true returns middle ['2] ", () => {
    assert.deepEqual(middle(["1", "2", "3"]), ["2"])
  });

  it("if true returns middle ['2','3'] ", () => {
    assert.deepEqual(middle(["1", "2", "3","4"]), ["2","3"])
  });

 
});