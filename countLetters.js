// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if ( actual === expected ) {
   console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`); 

  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function (string) {
  let results = {}

  for (const letter of string) {
   if (results[letter]) {  
    results[letter] += 1
   } else { 
     results[letter] = 1
   }


 ///  return newString = string.match(/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p);
  }
  return results
}

//takes in a string
// return count of each of the letters in that sentence
// can use for of loops 

assertEqual(countLetters("Hello"), { H: 1, e: 1, l: 2, o: 1 });
console.log(countLetters("Hello"));