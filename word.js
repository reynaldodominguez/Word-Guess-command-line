
var Letter = require("./letter");

function Word (word){
    this.letters = [];
    this.ocurencies = 0;
    this.createLetters = function(){
        var wordArr = word.split("");
        for(var i= 0; i < wordArr.length; i++){
            this.letters.push(new Letter(wordArr[i]))
        }
    }

    this.getWord = function(){
        var wordStr = "";
        for(var i = 0; i < this.letters.length; i++){
            wordStr += " " + this.letters[i].getCharacter() + " ";
        }
        return wordStr;
    }

    this.checkWord = function(char){
        var correctGuess = false;
        for(var i = 0; i < this.letters.length; i++){
            if(this.letters[i].checkCharacter(char)){
                correctGuess = true;
                this.ocurencies = this.ocurencies + 1;
            }
        }
        return correctGuess;
    }

}

module.exports = Word;