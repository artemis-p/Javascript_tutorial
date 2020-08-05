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

var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age , obj.city); 
// when we pass a primitive into a function a simple copy is created, so if we change a the variable won't be affected on the outside because it is a primitive. The reference of the object that we pass, will change since this is a copy.
