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
    maxWrongGuess: "6"
}


//get length of player name and draw spaces on page

// pull player name from array 
function pickPlayer() {
    hangman.currentWord = hangman.choices[Math.floor(Math.random() * hangman.choices.length)];
    console.log(hangman.currentWord);
}


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





//display number of correct guess remaining

//display choices to pick from remaining

//display incorrectly guessed letters



//////////////////////////////////////////
//event listener for letters

document.onkeyup = function (event) {

    // Determines which key was pressed.
    hangman.userInput = event.key;
    console.log(hangman.userInput);

    if (isValid() >= 0) {
        console.log("valid") //comment out later, obvi
        removeRemaining(hangman.remainingLetters,hangman.userInput);
        
        if (isLetterInWord() >=0) {
            console.log("letter in word");
            showLetters();
            //for loop to show all letters in ui -> make reveal
       
        } else {
            missedLetters();
        }
    } else {
        console.log("invalid")
    }

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
    updateMissedLetters();
};

function updateMissedLetters() {
    var stringwrong = hangman.incorrectLetters.toString();
    document.getElementById("incorrect-guesses").innerHTML = stringwrong;      
};

//increment incorrect guess




// if total count is greater than max number end the game
//









