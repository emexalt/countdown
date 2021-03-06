/*
squares.js - generates a Countdown-style letters game puzzle
em folsom, 2020
*/

consonantString = 'bbccddddffggghhjkllllmmnnnnnnppqrrrrrrsssstttttvvwwxyyz'.toUpperCase();
consonants = consonantString.split('');
vowelString = "AAAAAAAAAEEEEEEEEEEEEIIIIIIIIIOOOOOOOOUUUU";
dictionaryString = "";
vowels = vowelString.split('');
puzzleArray = [];
/*
if you're going to run this, replace words_alpha.txt with your preferred
list of newline-separated words, ideally a smaller one!
*/
dictionaryFile = fetch("./words_alpha.txt")
    .then(response => response.text())
    .then(text => dictionaryString = text);




function setCounts() {
    /*
    Reads the number of vowels input by the user, calculates the number of
    consonants, sets the puzzleArray accordingly.
    */
    let vowelCount = parseInt(document.getElementById("vowel").value);
    let consCount = 9 - vowelCount;
    console.log("Requested vowels: " + vowelCount);
    for (let index = 1; index < consCount + 1; index++) {
        puzzleArray.push(consonants[Math.floor(Math.random() * consonants.length)]);
    }
    for (let index = consCount + 1; index < 10; index++) {
        puzzleArray.push(vowels[Math.floor(Math.random() * vowels.length)]);
    }
    puzzleArray.sort(function(a, b){return 0.5 - Math.random()});
    drawBoard();
};

function drawBoard() {
    /*
    Displays the contents of puzzleArray on the page.
    */ 
    for (let index = 1; index < puzzleArray.length + 1; index++){
        document.getElementById("square" + index).innerText = puzzleArray[index - 1];
    }
}

function checkGuess(){
    /*
    Checks the user-input guess against the letters on the board,
    then against the server-stored dictionary by calling checkDictionary().
    */
    guess = document.getElementById("guess").value.toUpperCase();
    guessArray = guess.split("");
    rightAnswerCounter = 0;
    for (let index = 0; index <= guessArray.length-1; index++){
        if (puzzleArray.includes(guessArray[index])) {
            rightAnswerCounter++;
            if (rightAnswerCounter === guessArray.length){
                console.log("It's all on the board!");
            }
        } else {
            console.log("Did not find " + guessArray[index]);
            document.getElementById("answerIndicator").style.backgroundColor = "red";

         }
    } 
    checkDictionary();
}

function checkDictionary() {
    /*
    Checks the supplied dictionary file to see if the file contains 
    the player's guess.
    */
    guess = document.getElementById("guess").value;
    if (dictionaryString.includes(guess)) {
        console.log("It's a word!");
        document.getElementById("answerIndicator").style.backgroundColor = "green";
    } else {
        console.log("It's not in the dictionary, sorry.");
        document.getElementById("answerIndicator").style.backgroundColor = "red";

    }
}
