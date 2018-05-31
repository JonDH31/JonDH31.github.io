var wordsList = ["bacon", "eggs", "sausage", "hash browns", "toast", "waffles", "pancakes", "cereal", "coffee", "orange juice"];

var chosenWord = "";

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = "";

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 5;




console.log(blanksAndSuccesses);

document.body.onkeyup = function(e) {
    if(e.keyCode == 32){
       startGame()
      
        
function startGame() 
    numGuesses = 5;
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    console.log(chosenWord);
    blanksAndSuccesses = [];
    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
        
    document.getElementById("guesses-left").innerHTML = numGuesses;


    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");


    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
    }
}






function checkLetters(letter) {


var letterInWord = false;

// Check if a letter exists inside the array at all.
for (var i = 0; i < numBlanks; i++) {

  if (chosenWord[i] === letter) {

    // If the letter exists then toggle this boolean to true.
    // This will be used in the next step.
    letterInWord = true;
  }
}

// If the letter exists somewhere in the word,
// then figure out exactly where (which indices).
if (letterInWord) {

  // Loop through the word
  for (var j = 0; j < numBlanks; j++) {

    // Populate the blanksAndSuccesses with every instance of the letter.
    if (chosenWord[j] === letter) {

      // Here we set specific blank spaces to equal the correct letter
      // when there is a match.
      blanksAndSuccesses[j] = letter;
    }
  }

  // Log the current blanks and successes for testing.
  console.log(blanksAndSuccesses);
}

// If the letter doesn't exist at all...
else {

  // Then we add the letter to the list of wrong letters.
  wrongGuesses.push(letter);

  // We also subtract one of the guesses.
  numGuesses--;

}

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

// First, log an initial status update in the console
// telling us how many wins, losses, and guesses are left.
console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

// HTML UPDATES
// ============

// Update the HTML to reflect the new number of guesses.
document.getElementById("guesses-left").innerHTML = numGuesses;

// This will print the array of guesses and blanks onto the page.
document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

// This will print the wrong guesses onto the page.
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

// If our Word Guess string equals the solution.
// (meaning that we guessed all the letters to match the solution)...
if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

  // Add to the win counter
  winCounter++;

  // Give the user an alert
  alert("You win!");

  // Update the win counter in the HTML
  document.getElementById("win-counter").innerHTML = winCounter;

  // Restart the game
  startGame();
}

// If we've run out of guesses
else if (numGuesses === 0) {

  // Add to the loss counter
  lossCounter++;

  // Give the user an alert
  alert("You lose");

  // Update the loss counter in the HTML
  document.getElementById("loss-counter").innerHTML = lossCounter;

  // Restart the game
  startGame();

}

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

// Converts all key clicks to lowercase letters.
letterGuessed = String.fromCharCode(event.which).toLowerCase();

// Runs the code to check for correct guesses.
checkLetters(letterGuessed);

// Runs the code that ends each round.
roundComplete();
};
