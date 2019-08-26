var Word = require("./word");
var inquirer = require("inquirer");
var wordsToGuess = ["Barquisimeto", "Bangkok", "London", "Paris", "Dubai", "Singapore", "Tokyo", "Istanbul", "Caracas", "Bogota", "Seoul", "Milan", "Barcelona", "Rome", "Miami", "Shanghai", "Moscow", "Amsterdam", "Vienna", "Venice", "Johannesburg", "Beijing", "Orlando", "Budapest", "Madrid", "Nairobi", "Munich", "Toronto", "Lisbon"];
var pos = Math.floor(Math.random() * wordsToGuess.length);
var guessedArr = [];
var count = 0;
var remainingGuess = 5;
var newWord = new Word(wordsToGuess[pos]);
newWord.createLetters();
console.log("\n\n\n\n\n\n\n\n\n\n\n\n" + newWord.getWord() + "\n\n");
function game() {
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuessed",
            message: "Enter a New Letter",
            validate: function (letterGuessed) {
                if (letterGuessed.length > 1 || letterGuessed.length === 0 || isNaN(letterGuessed) === false) {
                    console.log("\nPlease enter only a letter at the time");
                    return false
                } else {
                    return true
                }
            }
        }
    ]).then(function (selection) {
        if (guessedArr.indexOf(selection.letterGuessed) < 0) {
            newWord.checkWord(selection.letterGuessed);
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n" + newWord.getWord() + "\n\n");
            if (newWord.checkWord(selection.letterGuessed)) {
                count = newWord.ocurencies / 2
                console.log("CORRECT !!!");
            } else {
                remainingGuess--
                console.log("INCORRECT!!");
            }
            console.log("Correct Guesses: " + count + " Remaining wrong Guesses: " + remainingGuess);
            guessedArr.push(selection.letterGuessed);
            console.log("Letters Guessed " + guessedArr);
            if (count === wordsToGuess[pos].length) {
                console.log("You Win");
                continuePlaying();
            } else if (remainingGuess === 0) {
                console.log("You Loss");
                continuePlaying();
            } else {
                game();
                //console.log(count)
            }

        } else {
            console.log("You already select the letter " + selection.letterGuessed + " Please select another letter");
            game();
        }

    });

}
game();

function continuePlaying() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "play",
            message: "Do you want continue playing?",
        }
    ]).then(function (sel) {
        if (sel.play) {
            pos = Math.floor(Math.random() * wordsToGuess.length);
            guessedArr = [];
            count = 0;
            remainingGuess = 5;
            newWord = new Word(wordsToGuess[pos]);
            newWord.createLetters();
            //console.log(wordsToGuess[pos].length);
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n" + newWord.getWord() + "\n\n");
            game();
        } else {
            console.log("Thank you for Play see you soon");
        }
    });
}