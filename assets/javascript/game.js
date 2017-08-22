// Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 9;
var guessSoFar = "";

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // This logic determines the outcome of the game, and increments the appropriate number
  if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

    if ((userGuess === computerGuess) && (guessesLeft > 1)) {
      wins++;
      guessesLeft = 9;
      guessSoFar = "";
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } else if ((userGuess !== computerGuess) && (guessesLeft >1)) { 
      guessesLeft--;
      guessSoFar = userGuess + ", " + guessSoFar;
    } else {
      losses++;
      guessesLeft = 9;
      guessSoFar = "";
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
    var html =
      "<h2>The Psychic Game</h2>" +
      "<p>You chose: " + userGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>guesses left: " + guessesLeft + "</p>" +
      "<p>guesses so far: " + guessSoFar + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
  }
};