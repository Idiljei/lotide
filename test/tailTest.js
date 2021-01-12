const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("if true returns ['lighthouse', 'Labs'] ", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("if false doesn't return ['lighthouse', 'Labs'] ", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
 
});
