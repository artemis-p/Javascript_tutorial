// Function constructor (always written with a capital letter)
// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function() {
//   console.log(2016 - this.yearOfBirth)
// };

// Person.prototype.lastName = "Smith";

// var john = new Person("John", 1990, "teacher"); // instantiation 
// var jane = new Person("Jane", 1988, "doctor"); 
// var mark = new Person("Mark", 1960, "dentist"); 
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Object.create = another way to create objects and inheritance

// var personProto = {
//   calculateAge: function() {
//     console.log(2016 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher"; // this is not the right way to fill int he object john, so we can do it with another way because the Object.create method can take a second parameter

// var jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1980 },
//   job: { value: "nurse" }
// });

// the biggest difference between the function constructor and the Object.create method is that object.create builds an object that inherits directly from the one that we passed into the first argument, while in the function constructor, the newly created object inherits from the constructor's prototype property.


// Primitives vs Objects
//primitives = strings, booleans, null, numbers, undefined
// everyhting else is object

// variables containing primitives actually hold that data inside of the variable itself. 
// variable associated with objects do not actually contain the object,  but instead they contain a reference to the place in memory where thr object sits (where the object is stored)

//primitives
// var a = 23;
// var b = a;
// a = 30; // mutating a

// console.log(a, b); // a = 30 b = 23 => this means that each of the variables hold their own copy of the data


// //objects
// var obj1 = {
//   name: "Jonas",
//   age: 26
// }; 

// var obj2 = obj1;

// console.log(obj1); // age = 26
// console.log(obj2); //age = 26

// obj1.age = 30;
// console.log(obj1); //age = 30
// console.log(obj2); // age = 30
// when we said obj1 = obj2 we did not actually create a new object. No copy was created here and what we created was a new reference which points to the first object. obj1 and obj2 both hold a reference that points to the exact same object in the memory, so it's the exact same object.

//passing a primitive and object into a function - functions

// var age = 27;
// var obj = {
//   name: "Jonas",
//   city: "Lisbon"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "San Francisco";
// }

// change(age, obj);
// console.log(age , obj.city); 
// when we pass a primitive into a function a simple copy is created, so if we change a the variable won't be affected on the outside because it is a primitive. The reference of the object that we pass, will change since this is a copy.




/////////////
// Passing functions as arguments
// Example 1:
// var years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);


// Example 2:
// var years = [1940, 1980];
// function arrayCalc(arr, fn) {
//   arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);


// Example 3:
// var years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// console.log(ages);
// console.log(fullAges);



// Example 4:
// var years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge); // calculateAge is a callback function cause we are not calling it. we want the arrayCalc function to later call the calculateAge function
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);


////////////
// Functions returning functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) { // anonymous function
//       console.log(name + ', can you please explain what UX design is?');
//     } 
//   } else if (job === 'teacher') {
//       return function(name) {
//         console.log('What subject do you teach, ' + name + '?');
//     }
//   } else {
//       return function(name) {
//         console.log('Hello ' + name + ', what do you do?');
//       };
//     };
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('Mark');
// var unkownQuestion = interviewQuestion('chef');
// unkownQuestion('Luna');

// //alternatively: 
// interviewQuestion('teacher')('John');


/////////
// IIFE - Immediately Invoked Function Expressions

// a game where we win if a random score from zero to nine is greater or equal to five and lose if it's smaller, but the score should not be visible

// Simple version
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// how an IIFE looks like - private method. we write an anonymous function within brackets and then invoke it 
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// console.log(score); // this is going to give us a reference error cause it doesn't recognise the score variable but if we write it like this, then it will work:

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5); // this will always be true cause if we had 5 goodlucks, 5-5 = 0 so the score will always be bigger than 0.

// function () { 

// }
// if we write a function like this the parser will think that this is a function declaration but since we don't have any name for the function declaration, then it will throw an error. So we need to trick the parser so it understands that we have here is an expression and not a declaration, and we do this by wrapping everything in parenthesis, cause in JS what's inside a parenthesis cannot be a statement and by that it will treat is as an expression and not a declaration.

// The IIFE can be called only once, but it's fine because we are not using this function to create a piece of reusable code, all we are doing here is creating a new scope which is hidden from the outside scope and we can safely put variables. With this we obtain data privacy and we don't interfere with other variables in our global execution context. 