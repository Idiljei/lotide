// Function comparing equality of two arrays 
  const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  // create  loops to see the values of the arrays
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) 
    return false
  }
  return true;
  }
    

// Use eqArray Function to pass through your new arrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
  console.log(`This is true indeed: ${arr1} === ${arr2}`);
  } else {
    console.log(`This is false indeed: ${arr1} !== ${arr2}`);

  }


} 
  

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
