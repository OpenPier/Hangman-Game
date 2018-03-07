//Global Variables


//Arrays and Variables for holding data
var wordOptions = ["pacific", "ocean", "solana", "blacks", "carlsbad", "oceanside", "trestles"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // p _ _ _ _ __
var wrongLetters = [];

//Game counters
var winCount =0;
var lossCount =0;
var guessesLeft = 9;

//Functions of the game (Reusable blocks of cod that I will call upon when needed)
funtion startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and successors with right number of blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
        

    }

    //chanage HTML to reflect round conditions
    document.getElementById["wordToGuess"].innerHTML = blanksAndSuccesses.join["  "];
    document.getElementById["numGuesses"].innerHTML = guessesLeft;
    document.getElementById["winCounter"].innerHTML = winCount;
    document.getElementById["lossCounter"].innerHTML = lossCount;


    //Testing /Debuggin
    console.log [selectedWord];
    console.log [lettersinWord];
    console.log [numBlanks];
    console.log [blanksAndSuccesses];
}

//Main Process

//Initiates the code
startGame[];

//register key clicks

document.onkeyup=function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    alert
    
}