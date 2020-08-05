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

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher"; // this is not the right way to fill int he object john, so we can do it with another way because the Object.create method can take a second parameter

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1980 },
  job: { value: "nurse" }
});

// the biggest difference between the function constructor and the Object.create method is that object.create builds an object that inherits directly from the one that we passed into the first argument, while in the function constructor, the newly created object inherits from the constructor's prototype property.
