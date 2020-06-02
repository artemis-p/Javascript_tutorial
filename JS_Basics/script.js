// // Variable Mutation and Type Coercion

// var firstName = 'John';
// var age = 28;

// // type coercion => when JS automatically converts types from one another as its needed, eg. firstName is a string, space is a string and it converts age from a number to a string
// console.log(firstName + ' ' + age);

// var job, isMarried; //this is going to be undefined
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation => to change the value of a variable
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?'); // prompt asks for user's input

// console.log(firstName + ' ' + lastName);


/********************************** 
 * Basic operators
 */
 
// var year, yearJohn, yearMark;
// year = 2020;
// ageJohn = 28;
// ageMark = 30;

// // Math operators
// yearJohn = year - 28;
// yearMark = year - 33;

// console.log(yearJohn);
// console.log(year * 2);
// console.log(year/10);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// var x;
// console.log(typeof x);



// /**********************
//  * Operator precedence
//  */

// var now = 2020;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x,y;
// x = (3 + 5) * 4 - 6;//8 * 4 // 32 - 6// 26
// console.log(x);

// // More operators
// x = x + 2;
// x += 2;
// console.log(x);

// x++; // x = x + 1


/****************
 * Coding challenge 1 - In a separare folder
 */

/****************
 * If / else statements
 */


// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " is single!");
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " is single!");
// }



/*********************
 * Boolean logic
 */

var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) { // between 13 and 20 => age >= 13 AND age < 20
  console.log(firstName + " is a teenager");
} else {
  console.log(firstName + " is a man");
}