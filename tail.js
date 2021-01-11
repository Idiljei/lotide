// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

 
const tail = function(arr) {
  let newArray = []; 
  for (let i = 1; i < arr.length; i++) { //starting index at 1 skips the array head in loop  
    newArray.push(arr[i]);
  } 
  return newArray;
};
// TEST CODE

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);
//console.log(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);

module.exports = tail; 


