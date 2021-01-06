// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
};

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
    
   

// TEST CODE

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
