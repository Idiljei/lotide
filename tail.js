// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if ( actual === expected ) {
   console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`); 

  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};
 
const tail = function(arr) {
  let newArray = []; 
  for (let i = 1; i < arr.length; i++) { //starting index at 1 skips the array head in loop  
    newArray.push(arr[i]);
  } 
  return newArray;
};
// TEST CODE

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);


