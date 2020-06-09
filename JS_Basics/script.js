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

// var firstName = "John";
// var age = 16;

// if (age < 13) {
//   console.log(firstName + " is a boy");
// } else if (age >= 13 && age < 20) { // between 13 and 20 => age >= 13 AND age < 20
//   console.log(firstName + " is a teenager");
// } else {
//   console.log(firstName + " is a man");
// }

/*********************
 * Ternary operator and switch statements
 */

 //ternary operator
//  var firstName = "John";
//  var age = 16;
//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + " drinks juice");

//  var drink = age >= 18 ? 'beer' : "juice";
//  console.log("What drink does " + firstName + " drink? " + drink + " !");

// //  if (age >= 18) {
// //    var drink = "beer";
// //  } else {
// //    var drink = "juice";
// //  }

// // switch statement
// var job = "teacher";
// switch(job) {
//   case 'teacher':
//   case "instructor":
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an Uber in Lisbon.')
//     break;
//   default:
//     console.log(firstName + ' does sth else.');
//     break;
// }


// var firstName = "John";
// var age = 16;

// switch(true) {
//   case age < 13:
//     console.log(firstName + " is a boy");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager");
//     break;
//   default:
//     console.log(firstName + " is a man");
//     break;
// }



/*********************
 * Truthy and falsy values and equality operators
 */

 // falsy values: undefined, null, 0, "", NaN
 // truthy values: all values that are not falsy

//  var height;
//  if (height) {
//    console.log("Variable has been defined");
//  } else {
//    console.log("Variable has not been defined");
//  } // undefined

//  var height;
//  height = 23;

//  if (height || height === 2) {
//    console.log("Variable has been defined");
//  } else {
//    console.log("Variable has not been defined");
//  } // defined

//  // Equality operators
//  if (height == "23") {
//    console.log('The == operator does type coercion');
//  } // it means that since there is no strict equality, JS is converting the number into a string and accepts it as truth

//  if (height === "23") {
//   console.log('The == operator does type coercion');
// } else {
//   console.log("There is a strict equal")
// }

 /*****************
  * Functions
  */

  // function calculateAge(birthYear) {
  //   return 2020 - birthYear;
  // }

  // var ageJohn = calculateAge(1976);
  // var ageJane = calculateAge(1988);
  // var ageMark = calculateAge(1980);
  // console.log(ageJohn, ageJane, ageMark);

  // function yearsUntilRetirement(year, firstName) {
  //   var age = calculateAge(year);
  //   var retirement = 65 - age;

  //   if (retirement > 0) {
  //     console.log(firstName + ' retires in ' + retirement + ' years.');
  //   } else {
  //     console.log(firstName + ' is already retired.');
  //   }
  // }
  // yearsUntilRetirement(1948, 'John')



  /*****************
  * Function statements and expressions
  */

// Function declaration
// function whatDoYouDo(job, firstName) {}

  //function expression = pieces of code that always produce a value ( 2+3 = 5 produces a result so it's an expression)
  // statements = they perform actions but they do not produce immediate result, eg if statement, functions
  // var whatDoYouDo = function(job, firstName) {
  //   switch(job) {
  //     case 'teacher':
  //       return firstName + ' teaches kids how to code';
  //     case 'driver':
  //       return firstName + ' drives kids to school.';
  //     case 'designer':
  //       return firstName + ' designs beautiful websites.';
  //     default:
  //       return firstName + ' does something else.';

  //   }
  // }
  // console.log(whatDoYouDo('teacher', 'John'));
  // console.log(whatDoYouDo('designer', 'Helen'));
  // console.log(whatDoYouDo('retired', 'Mark'));




  /*****************
  * Arrays
  */

//   var names = ['John', 'Diane', 'Jane'];
//   var years = new Array(1980, 1969, 1948);

//   console.log(names[2]);
//   console.log(names.length);

//   //mutate the data in the array
//   names[1] = 'Ben';
//   names[5] = 'Mary';
//   names[names.length] = 'Vicky'; // it adds the new string at the last position of the array
//   console.log(names);

//   // Different data types
// var john = ['John', 'Smith', 1980, 'Teacher', false];
//  john.push('blue'); // add elements at the end the array
//  john.unshift('Mr'); // add elements in the beginning of the array
//  john.pop(); // removes the last element at the end of the array
//  john.shift(); // removes the first element from the beginning of the array
//  console.log(john);


//  console.log(john.indexOf(1980));

//  var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
//  console.log(isDesigner);



/****************
 * Objects and properties
 */
 // objects = key/value pairs
//Object literal
//  var john = {
//   firstName: 'John', //firstname is a property of the john object and we read it by adding the . notation
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
//  };
//  // ways of retrieving data from an object
//  console.log(john.firstName);
//  console.log(john['family']);
//  var x = 'birthYear';
//  console.log(john[x]);

//  //mutate properties of the object
//  john.job = 'driver';
//  john['isMarried'] = true;
//  console.log(john);

//  //ways of creating a new object
//  var jane = new Object();
//  jane.name = 'Jane';
//  jane. birthYear = 1969;
//  jane['lastName'] = 'Peters';
//  console.log(jane);

/****************
 * Objects and methods
 */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//       this.age = 2018 - this.birthYear; //this => this current object
//     }
//   };

// // console.log(john.calcAge());

// // var age = john.calcAge();
// // john.age = age;
 
// // or 
// //john.age = john.calcAge()

// john.calcAge();
// console.log(john);