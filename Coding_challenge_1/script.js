/* Johnand John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀*/

var massMark = 89;
var massJohn = 105;
var heightMark = 1.89;
var heightJohn = 1.93;
var bmiMark = massMark / heightMark^2;
var bmiJohn= massJohn/ heightJohn^2;

console.log(bmiMark);
console.log(bmiJohn);

var higherBmi = bmiMark > bmiJohn;
console.log(higherBmi);

console.log("Is Mark's BMI higher than John's?" +  " " + higherBmi);

if (higherBmi) { // or (bmiMark > bmiJohn)
  console.log("Mark has the higher BMI");
} else {
  console.log("John has the higher BMI");
}