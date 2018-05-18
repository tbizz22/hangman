// global Variables

//not being used currently
// var wins = 0;
// var losses = 0;
// var gamesPlayed = 1;



//create game object

var hangman = {
    //array of last player names to chose from
    choices: [
        "scott stevens",
        "ken daneyko",
        "martin brodeur",
        "scott niedermeyer",
        "patrick elias"
    ],
    currentWord: "",
    userInput: "",
    letterLocations: [],
    incorrectLetters: [2],
    correctLetters: [],
    remainingLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    maxWrongGuess: 6,
    lives: 0,
    livesRemain: 6,
    correctLettersGuessed: [],
    distinctLettersinCurrentWord: []
};


//get length of player name and draw spaces on page

// pull player name from array 
function pickPlayer() {
    hangman.currentWord = hangman.choices[Math.floor(Math.random() * hangman.choices.length)];
    //leaving this to display the answer
    console.log(hangman.currentWord);
};


//Add the current player spaces to the view
//for statment evaluates if the letter in the array is a space. If it is it applies the appropriate class

function drawPlayer() {
    var targetDiv = document.getElementById("current-word");

    for (var i = 0; i < currentWordToArray.length; i++) {
        if (currentWordToArray[i] === " ") {
            var newDiv = document.createElement("div");
            newDiv.setAttribute("ID", i);
            newDiv.setAttribute("Class", "space");
            targetDiv.appendChild(newDiv);
        } else {
            var newDiv = document.createElement("div");
            newDiv.setAttribute("ID", i);
            newDiv.setAttribute("Class", "letter");
            targetDiv.appendChild(newDiv);
        }
    };
};


//takes player and places into array
pickPlayer();
var currentWordToArray = hangman.currentWord.split("");
// console.log(split);

//Start the round
drawPlayer();
showStats();


//////////////////////////////////////////
//event listener for letters

document.onkeyup = function (event) {

    // Determines which key was pressed.
    hangman.userInput = event.key;
    //console.log(hangman.userInput);

    //is this a letter in the alphabet
    if (isValid() >= 0) {
        //console.log("valid") //comment out later, obvi
        removeRemaining(hangman.remainingLetters, hangman.userInput);
        isLetterInWordArray();

        //is this a letter in the current word
        if (hangman.letterLocations.length >= 0) {
           // console.log("letter in word");
            showLetters();
            isWinner();


        } else {
            missedLetters();
            takeLives();
        }
    } else {
        alert("You have to pick values from the alphabet or you have already guessed this letter.");
        
        //Enable this for hard mode, lol
        //takeLives();
    }
    showStats();
    checkScore();
}




//////////////////////

//determine if letter input is valid
function isValid() {
    var a = hangman.remainingLetters.indexOf(hangman.userInput, 0);
    console.log("is valid returns" + a);
    return a;
}



function isLetterInWordArray() {
    for (var i = 0; i < currentWordToArray.length; i++) {
        if (currentWordToArray[i] === hangman.userInput) {
            hangman.letterLocations.push(i);
            hangman.correctLettersGuessed.push(i)
        }
    }
}

function isWinner() {
    if (hangman.correctLettersGuessed.length + 1 === hangman.currentWord.length) {
        alert("//end game ");
    }
}

//remove letter from remaining letters

function removeRemaining(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
    //need to update UI code here
    updateRemainingLetters();
}


//fill in letter in ui in correct location

function showLetters() {
    for (var i = 0; i < hangman.letterLocations.length; i++) {
        var targetDiv = document.getElementById(hangman.letterLocations[i])
        targetDiv.innerHTML = hangman.userInput;
    }
    hangman.letterLocations = [];
}


//add letter to missed letter array
function missedLetters() {
    hangman.incorrectLetters.push(hangman.userInput);   
}

// Update UI
function updateMissedLetters() {
    var stringwrong = hangman.incorrectLetters.toString();
    document.getElementById("incorrect-guesses").innerHTML = stringwrong;
}


//show remaining choices to user
// Update UI
function updateRemainingLetters() {
    var stringRemain = hangman.remainingLetters.toString();
    document.getElementById("remaining-choices").innerHTML = stringRemain;
}


//increment incorrect guess 
function takeLives() {
    hangman.lives++;
}

//Update UI with Wrong Guess
function updateLives() {
    hangman.livesRemain = hangman.maxWrongGuess - hangman.lives;
    document.getElementById("lives").innerHTML = hangman.livesRemain;
}



// if total count is greater than max number end the game

function checkScore() {
    if (hangman.livesRemain === 0) {
        //end the game
        updateLives();
        alert("game over dude");
    } else {
        //nothing happening here
    }
}

//updates footer status bar
function showStats() {
    updateLives();
    updateRemainingLetters();
    updateMissedLetters();
}



