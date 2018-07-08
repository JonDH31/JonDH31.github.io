if (options.indexOf(userGuess) > -1) {
    if (userGuess === computerGuess) {
        wins++;
        numGuesses = 9;
        guessChoices = [];
    }
    else {
        if (guessChoices.includes(userGuess)) {
            // Code for duplicate guess
        }
        else {
            numGuesses--;
            guessChoices.push(userGuess);
        }
    }

    if (numGuesses === 0) {
        numGuesses = 9;
        losses++;
        guessChoices = [];
    }
}   