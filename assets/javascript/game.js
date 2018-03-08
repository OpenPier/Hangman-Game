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
function startGame () {
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
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    //Testing /Debuggin
    console.log [selectedWord];
    console.log [lettersinWord];
    console.log [numBlanks];
    console.log [blanksAndSuccesses];
}
function checkletters(letter) {
    //check if letter exists
    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++ ){
        if(selectedWord[i] == letter) {
            lettersinWord = true;
                alert("Letter Found")
        }
    }
    //Check where in the Letter
    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++){
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
       }
}

//Letter wasn't found


   console.log(blanksAndSuccesses);

function roundComplete() {
    console.log["Win Count: " + winCount +" | Loss Count: " + lossCount + "| Guesses left" + numGuesses];

    //Update the HTML to reflect the most recent count stats
    document.getElementById["numGuesses"].innerHTML = guessesLeft;
    document.getElementById["wordToGuess"].innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById["wrongGuesses"].innerHTML = wrongLetters.join(" ");


    //Check if user won
    if(lettersinWord.toString()== blanksAndSuccesses.toString()){
        winCount++;
        alert("You Won!");

        //Update the win counter to the HTML
        document.getElementById("winCounter").innerHTML = winCount;
        
        startGame();
    }
//Check if user lost
    else if (numGuesses == 0) {
        lossCount++;
        alert("You lost!");

        //Update the HTML
        document.getElementById("lostCounter").innerHTML * lossCount;

        startGame();
    }
}
    
//Main Process

//Initiates the code
startGame();

//register key clicks

document.onkeyup=function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkletters(letterGuessed);
    roundComplete;
    //testing/debuggin
    console.log (letterGuessed);
    
}








https://itunes.apple.com/us/album/2am/1278503345?i=1278503350

//Regagee music playing 
var music = document.createElement("audio");
music.setAttribute("src", "pathToYourMp3File");
music.play();

//loop if you want your song to keep playing
music.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);