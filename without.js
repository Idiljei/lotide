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
  
  // function removing items from array 

  const without = function(source, itemsToRemove) {
    
    let newArray = []
    itemsToRemove = itemsToRemove.toString();  // helps us in our if statement

    for (let item of source) { // loops through each item in source 
      if (item!== itemsToRemove) {//item in source is not equal to itemsToRemove 
      newArray.push(item)
    }
  }
   return newArray;
   
}  
  

  //TEST CODE
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  console.log(without(words, ["lighthouse"]))