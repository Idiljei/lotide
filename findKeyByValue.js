//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if ( actual === expected ) {
   console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`); 

  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};

    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

const findKeyByValue = function (obj, val) {
  for (let key in obj) { // looping over properties in obj 
    if (obj[key] === val) { // key is sci_fi and val is The Wire 
      return key // 
    } 

  } 


}



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined);
 assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


