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
 
var year, yearJohn, yearMark;
year = 2020;

// Math operators
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);
console.log(year * 2);
console.log(year/10);