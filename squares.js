/*
squares.js - generates a Countdown-style letters game puzzle
em folsom, 2020
*/

consonantString = 'bbccddddffggghhjkllllmmnnnnnnppqrrrrrrsssstttttvvwwxyyz'.toUpperCase();
consonants = consonantString.split('');
vowelString = "AAAAAAAAAEEEEEEEEEEEEIIIIIIIIIOOOOOOOOUUUU";
vowels = vowelString.split('');
puzzleArray = [];

function setCounts() {
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
    for (let index = 1; index < puzzleArray.length + 1; index++){
        document.getElementById("square" + index).innerText = puzzleArray[index - 1];
    }
}

//in progress; need to integrate check against word-list
function checkGuess(){
    guess = document.getElementById("guess").value.split("");
    console.log(guess);
    for (let index = 0; index <= guess.length-1; index++){
        if (puzzleArray.includes(guess[index])) {
            console.log("Found " + guess[index]);
        } else {
            console.log("Did not find " + guess[index]);
         }
    }

}