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
  
// function should return an array with only the middle element(s)
const middle = function(middleArray) {
// if array only has 1 or 2 elements return 

if (middleArray.length <= 2) {
  return []
} 
const middleIndex = Math.floor(middleArray.length/2) // calculates the middle of array

if (middleArray.length % 2 ==0) { // array is even there is no middle number
    
  return  [middleArray[middleIndex -1], middleArray[middleIndex]]

} else {
  return [middleArray[middleIndex]]
}

}

 



// if array is even then it returns nothing
// if array is odd return the middle number 
// find the middle of the array
//return the midle-most element




// TEST CODE

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
