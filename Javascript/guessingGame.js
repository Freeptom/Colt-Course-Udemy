//create sectretNumber
var sectretNumber = 4;

//ask user for guessingGame
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if (guess === sectretNumber) {
  alert("You got it right");
}
//check if higher
else if (guess > sectretNumber) {
  alert("Too High")
}
//otherwise
else {
  alert("Too Low")
}
