// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if ( actual === expected ) {
   console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`); 

  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};

/// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);



// all Items: an array of strings that we need to look through 
// itemsToCount:  an object specifiying what to count 

const countOnly = function(allItems,itemsToCount) {
const results = {};

// loop over object
for (const item of allItems) {
  console.log(item);
  if (itemsToCount[item]) {
    if (results[item]) {
      results[item] +=1
    } else {
      results[item] = 1 
    }
}

  }
  return results;
};

const firstNames = [
  "karl",
  "salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];


assertEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), );