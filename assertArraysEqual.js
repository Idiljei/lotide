// Function comparing equality of two arrays
const eqArrays = require('./eqArrays');

// Use eqArray Function to pass through your new arrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ This is true indeed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ This is false indeed: ${arr1} !== ${arr2}`);

  }


};
  

// // TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]); //True
assertArraysEqual([1, 2, 3], [3, 2, 1]); //False
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //True
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //False

module.exports = assertArraysEqual;
