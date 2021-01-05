// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  let comparison = actual === expected

  return comparison

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual( 0, 1));
console.log(assertEqual(0,0));
