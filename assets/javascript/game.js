// global Variables

var wins = 0;
var losses = 0;
var gamesPlayed = 1;



//create game object

var hangman = {
    //array of last player names to chose from
    choices: [
        "Scott Stevens",
        "Ken Daneyko",
        "Martin Brodeur",
        "Scott Niedermeyer",
        "Patrick Elias"
    ],
    currentWord: "",
    userInput: "",
    incorrectLetters: [],
    correctLetters: [],
    remainingLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    wrongGuessesRemaining: "6"
}


// pull player name from array 
function pickPlayer() {
    hangman.currentWord = hangman.choices[Math.floor(Math.random() * hangman.choices.length)];
    console.log(hangman.currentWord);
}

//get length of player name and draw spaces on page



//////////////////////////////////////////
//event listener for letters

document.onkeyup = function (event) {

    // Determines which key was pressed.
    hangman.userInput = event.key.toLowerCase;
    console.log(hangman.userInput);


//determine if letter input is valid


    function isValid() {
    var a = hangman.remainingLetters.indexOf(hangman.userInput,0);
    console.log("is valid returns" + a);
    return a;
    }

    if (isValid() >= 0) {
        console.log("valid")
    } else {
        console.log("invalid")
    }

};
//////////////////////
//determine if letter input is in current word



//remove letter from remaining letters



//if correct 
//fill in letter in ui in correct location





//if wrong
//add letter to missed letter array
//increment incorrect guess




// if total count is greater than max number end the game
//






// look at drink list exercise to see how to add ui elements on the page when drawing the values. html5 shows how to add the classes
