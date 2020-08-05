// Function constructor (always written with a capital letter)
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth)
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher"); // instantiation 
var jane = new Person("Jane", 1988, "doctor"); 
var mark = new Person("Mark", 1960, "dentist"); 
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);