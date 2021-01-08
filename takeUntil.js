
const takeUntil = function(array, callback) {
   let newArray = [];
  for (let item of array) { //loops through elements of array 
    if (callback(item)) { // if callback is true // return new array 
      return newArray
      } else {
        newArray.push(item) // if False - push to new array 
      }
 
  }
 

}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // callback:  if x is less than 0 return true else false 
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);