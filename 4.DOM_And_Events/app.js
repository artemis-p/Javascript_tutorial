/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;

init();

document.querySelector("#current-" + activePlayer).textContent = dice; // setter, cause we set a value // document => the object that will give us access to the DOM, querySelector => a method to select elements from the DOM, textContent => we use it when we want ti change the text of an element 
// ('#current-' + activePlayer) => because of type coersion JS will convert all this into current 0, if activePLayer is === 0, if this was 1 then JS would convert it to 1 
//textContent => can set plain text, but no HTML
// innerHTML =>changes the selection text bit adds some HTML in there, too

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' //this always needs to be a string, otherwise the JS parser will not recognise it the HTMl and will give us an error


// var x = document.querySelector('#score-0').textContent; // getter, cause we get a value. we want to just read it and store it to a variable
// console.log(x);

// function btn() {

// }
// btn();

//callback function: a function that another function will call it for us => EventTarget. the addEventListener will call the btn function for us, so we don't need to add the empty brackets, next to the "click"
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1; // this will give a number between 0-5 that's why we need to add 1 at the end // due to the scoping chain we won't have any access in this variable outside of this function

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. Update the round score if the rolled number was not a 1
  if (dice !== 1) {
    // Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // Next player
    nextPlayer();
  }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
  // 1. Add current score to GLOBAL score
  scores[activePlayer] += roundScore;

  // 2. Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // 3. Check if player won the game 
  if (scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
    // 4. Next Player
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
};

document.querySelector('btn-new').addEventListener('click', init);

function init() {
  scores = [0,0]; // to keep track of scores for both players
  roundScore = 0; // one round score at a time
  activePlayer = 0; // to keep track of the player playing every time

  document.querySelector('.dice').style.display = 'none'; // we make the dice disappear. we use the element id with the style method to change the css and then the display method and set it equal to none.

  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
}