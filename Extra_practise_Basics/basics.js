// Concatenation

var firstString = "Hello";
var secondString = "World!";

console.log(firstString + " " + secondString);


// Conditions

var word = "ball";

if (word.startsWith("B") === true) {
  console.log(true)
} else {
  console.log(false)
};

// Refactoring the above condition
console.log(word.startsWith("B"));

// Array - Iteration
var names = ["Maria", "Luke", "Pedro", "Shayne", "Beatrix"];
var namesStartingWithB = [];

names.forEach((name) => {
  if (name.startsWith("B") === true) {
    namesStartingWithB.push(name);
  }
});

console.log(namesStartingWithB);

// Functions
const capitalize = (first_name, last_name) => {
  first = first_name.charAt(0).toUpperCase() + first_name.substring(1);
  last = last_name.charAt(0).toUpperCase() + last_name.substring(1);
  return first + " " + last
}
capitalize("maria", "loyds");

