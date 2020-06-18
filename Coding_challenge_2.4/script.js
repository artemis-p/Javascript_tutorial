/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

var john = {
  name: 'John Smith',
  mass: 105,
  height: 1.78,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

var BMI = john.calcBMI();
john.BMI = BMI;

 console.log(john);


var mark = {
  name: 'Mark Andrews',
  mass: 80,
  height: 1.85,
  calcBMI: function() {
    return this.BMI = this.mass / (this.height^2)
  }
};

var BMI = mark.calcBMI();
mark.BMI = BMI;

 console.log(mark);

 if (john.BMI > mark.BMI) {
   console.log(john.name + ' has a higher BMI of ' + john.BMI);
 } else if (john.BMI === mark.BMI) {
   console.log('The BMI for both John and Mark is the same');
 } else {
   console.log(mark.name + ' has a higher BMI of ' + mark.BMI);
 }