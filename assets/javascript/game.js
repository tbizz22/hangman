// global Variables

var wins = 0;
var losses = 0;
var gamesPlayed =1;



//create game object

var hangman ={
    //array of last player names to chose from
    choices: [
        "Scott Stevens", 
        "Ken Daneyko", 
        "Martin Brodeur", 
        "Scott Niedermeyer", 
        "Patrick Elias"
    ],
    currentWord:"",
    userInput: "",
    incorrectLetters: [],
    correctLetters: [],
    wrongGuessesRemaining: "6"
}


    // pull player name from array 
    function  pickPlayer() {
        this.currentWord = this.choices[math.floor(math.random()*this.choices.length)];
        console.log(currentWord);
    }

//get length of player name and draw spaces on page





//////////////////////////////////////////
//event listener for letters



//if correct 
    //fill in letter in ui in correct location





//if wrong
    //add letter to missed letter array
    //increment incorrect guess




// if total count is greater than max number end the game
    //


