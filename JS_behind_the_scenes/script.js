/////////////////////////////////////////
// Lecture: Hoisting => functions and variables are hoisted in JS, which means that they are avilable before the the execution phase starts. The functions are already defined before the execution phase starts, while variables are set up to undefined and will only be defined in the execution phase.

//functions

// // up to now we have first declared the function and then call it
// calculateAge(1965);

// function calculateAge(year) {
//   console.log(2016 - year);
// }
// // calculateAge(1990);


// // retirement(1965); => this will not work because it's not a function declaration but a function expression and hoisting with functions works only for function declarations
// var retirement = function(year) {
//   console.log(65 - (2016 - year));
// }

// //variables
// console.log(age); // => won't work and will come up as undefined.In the creation phase of the variable object what happens is that the code is scanned for variable declarationsand the variables are then set to undefined. Js knows that there will be av age variable but we don't have the value yet.
// var age = 23;
// // console.log(age); => works


// function foo() {
//   // console.log(age); => this will come back as undefined because of the hoisting
//   var age = 65;
//   console.log(age);
// }

// foo(); // prints the age of 65 => gets its own execution context object(the foo function) in which we can store a variable and it can be the same name
// console.log(age); // prints the age of 23 => this variable gets stored in the global execution context object



/////////////////////////////////////////
// Lecture: Scoping => answers the questions "where can we access a certain variable?" Each new function creates a scope,ie the space/environment in which the variables it defines are accessible.
// Lexical scoping => a function that is lexically within another function gets access to the scope of the outer function

// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     console.log(a + b + c);
//   }
// }
 // this will print hello!hi!hey! => that's because of the scoping chain. the second function has access to the variables of the first function and the global scope. That's because the second function is written inside of the first, which in turn is written inside of the global scope. That's why it's called lexical scopping.



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }
// function third() {
//     var d = 'John';
//     console.log(a + d);
// }
// var a, function first and function third are in the global scope
// function secton is in a local scope of function first



///////////////////////////////////////
// Lecture: The this keyword => at a regular function the this keyword simply points at the global project, which in case of the browser is the window object. In a method call (function attached to an object), the this variable points to the object that is calling the method.

//console.log(this); // returns the Window object, as this is the default object 
// calculateAge(1985);

// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this); // logs "window" because this is not a method but a regular function call
// }


var john = { // object
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() { // method
    console.log(this); // returns the Object, as this keyword refers to the object that called the method
    console.log(2016 - this.yearOfBirth); 

    // function innerFunction() {
    //   console.log(this); // returns Window, because even though it's within a method, it's still a regular function call so the object is Window
    // }
    // innerFunction();
  }
}

john.calculateAge(); //calling the method

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // method borrowing => using john's method to work on Mike. We don't have the parenthesis next to this methods, because we are now longer using it as a method but it's instead a variable
mike.calculateAge(); // calling the function and the object will be mike

// the this variable is only assigned a value when the object calls the method