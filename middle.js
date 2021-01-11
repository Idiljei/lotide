const assertArraysEqual = require('./assertArraysEqual');
  
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
// assertArraysEqual(middle([1, 2, 3]), [2]); //true
// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);//true
// assertArraysEqual(middle([1, 2, 3, 4]), [2]);//false


module.exports = middle; 
