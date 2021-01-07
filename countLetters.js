// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if ( actual === expected ) {
   console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`); 

  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function (string) {
  let results = {}  //return a object

  for (const letter of string) { //loop over letters in the string
   if (results[letter]) {   //if true
    results[letter] += 1    //increment by 1
   } else { 
     results[letter] = 1    // letter only shows up once 
   }

  }
  return results
}

assertEqual(countLetters("Hello"), { H: 1, e: 1, l: 2, o: 1 });
console.log(countLetters("Hello"));