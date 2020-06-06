/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/


//1.
var avgJohn = (89 + 120 + 103)/3
var avgMark = (116 + 94 + 123)/3
console.log(avgJohn, avgMark);

//2. 
var nameJohn = "John";
var nameMark = "Mark";

if (avgJohn > avgMark) {
  console.log(nameJohn + "'s team wins with an average of " + avgJohn + " points!");
} else if (avgJohn < avgMark) {
  console.log(nameMark + "'s team wins with an average of " + avgMark + " points!");
} else {
  console.log("It's a draw!")
}

//3.Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
var avgJohn = (100 + 100 + 103)/3
var avgMark = (110 + 130 + 90)/3

if (avgJohn > avgMark) {
  console.log(nameJohn + "'s team wins with an average of " + avgJohn + " points!");
} else if (avgJohn < avgMark) {
  console.log(nameMark + "'s team wins with an average of " + avgMark + " points!");
} else {
  console.log("It's a draw!")
}


// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
nameMary = "Mary";
var avgMary = (97 + 134 + 105)/3
console.log(avgJohn, avgMark, avgMary);

if (avgMary > avgJohn && avgMary > avgMark) {
  console.log(nameMary + "'s team wins with an average of " + avgMary + " points");
} else if (avgMark > avgMary && avgMark > avgJohn) {
  console.log(nameMark + "'s team wins with ana average of " + avgMark + "points");
} else {
  console.log(nameJohn + "'s team wins with an average of " + avgJohn + " points");
}

// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
var avgMary = (100 + 130 + 90)/3
var avgJohn = (100 + 100 + 103)/3
var avgMark = (110 + 130 + 90)/3

console.log(avgJohn, avgMark, avgMary);

if (avgMary > avgJohn && avgMary > avgMark) {
  console.log(nameMary + "'s team wins with an average of " + avgMary + " points");
} else if (avgMark > avgMary && avgMark > avgJohn) {
  console.log(nameMark + "'s team wins with an average of " + avgMark + " points");
} else if (avgJohn > avgMark && avgJohn > avgMary) {
  console.log(nameJohn + "'s team wins with an average of " + avgJohn + " points");
} else {
  console.log("It's a draw!");
}

//GOOD LUCK 😀