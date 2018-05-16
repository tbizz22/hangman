// global Variables

var wins = 0;
var losses = 0;
var gamesPlayed = 1;



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
    incorrectLetters: [],
    correctLetters: [],
    remainingLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    maxWrongGuess: 6,
    lives: 0,
    livesRemain:6
};


//get length of player name and draw spaces on page

// pull player name from array 
function pickPlayer() {
    hangman.currentWord = hangman.choices[Math.floor(Math.random() * hangman.choices.length)];
    console.log(hangman.currentWord);
};


//Add the current player spaces to the view
function drawPlayer() {
    var targetDiv = document.getElementById("current-word");

    for (var i = 0; i < split.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("ID",split[i]);
        newDiv.innerHTML = split[i];
        targetDiv.appendChild(newDiv);
    };
};


//takes player and places into array
pickPlayer();
    var split = hangman.currentWord.split("");
    // console.log(split);

//Start the round
drawPlayer();
showStats();


//////////////////////////////////////////
//event listener for letters

document.onkeyup = function (event) {

    // Determines which key was pressed.
    hangman.userInput = event.key;
    console.log(hangman.userInput);

    //is this a letter in the alphabet
    if (isValid() >= 0) {
        console.log("valid") //comment out later, obvi
        removeRemaining(hangman.remainingLetters,hangman.userInput);
        
        //is this a letter in the current word
        if (isLetterInWord() >=0) {
            console.log("letter in word");
            showLetters();
            //todo: for loop to show all letters in ui -> make reveal???
       
        } else {
            missedLetters();
            takeLives();
        };
    } else {
        console.log("invalid");
        takeLives();
    };
    showStats();
    checkScore();
};




//////////////////////

//determine if letter input is valid
function isValid() {
    var a = hangman.remainingLetters.indexOf(hangman.userInput,0);
    console.log("is valid returns" + a);
    return a;
    };

//determine if letter input is in current word
function isLetterInWord() {
    var a = hangman.currentWord.indexOf(hangman.userInput,0);
    return a;
};




//remove letter from remaining letters

function removeRemaining(array, element) {
    const index = array.indexOf(element);
    array.splice(index,1);
    //need to update UI code here
    updateRemainingLetters();
};



//fill in letter in ui in correct location
//!!!! can not get this working for multiple letters 
function showLetters() {
    var targetDiv = document.getElementById(hangman.userInput);
    targetDiv.setAttribute("ID", hangman.userInput + "-reveal"); 
};





//add letter to missed letter array
function missedLetters() {
    hangman.incorrectLetters.push(hangman.userInput);
};

// Update UI
function updateMissedLetters() {
    var stringwrong = hangman.incorrectLetters.toString();
    document.getElementById("incorrect-guesses").innerHTML = stringwrong;      
};


//show remaining choices to user
// Update UI
function updateRemainingLetters() {
    var stringRemain = hangman.remainingLetters.toString();
    document.getElementById("remaining-choices").innerHTML = stringRemain;      
};


//increment incorrect guess 
function takeLives() {
hangman.lives++;
};

//Update UI with Wrong Guess
function updateLives() {
    hangman.livesRemain = hangman.maxWrongGuess-hangman.lives;
    document.getElementById("lives").innerHTML = hangman.livesRemain; 
};



// if total count is greater than max number end the game
//

function checkScore() {
    if (hangman.livesRemain === 0) {
        //end the game
        updateLives();
        alert("game over dude");
    } else {
        //nothing happening here
    }
};



function showStats() {
    updateLives();
    updateRemainingLetters();
    updateMissedLetters();
};



