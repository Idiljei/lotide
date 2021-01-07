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
  
//function that will return all indices where each character of string is found
const letterPositions = function (sentence) {
  const results = {}

 for (let i = 0; i <sentence.length; i++){
 
   // create if else 
   if (results[sentence[i]]) {
    results[sentence[i]].push(i)//pushing index on to the array 
    console.log(results[sentence[i]]);
   } else {
     results[sentence[i]] = [i]
   }

  }
  return results; 

}



assertArraysEqual(letterPositions("hello"), [1]);
assertArraysEqual(letterPositions("best friend"), [1]);
assertArraysEqual(letterPositions("LighthouseLabs"), [1]);

