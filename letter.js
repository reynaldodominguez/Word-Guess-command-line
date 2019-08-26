//Constructor for the letters
function Letter(character){
    
    this.character = character;
    this.guessed = false;

    this.getCharacter = function(){
        if(this.guessed){
            return this.character
        }else{
            return "_"
        }
    }

    this.checkCharacter = function(char){
        if(char.toLowerCase() === this.character.toLowerCase()){
            this.guessed = true;
            return true;
        }else{
            return false;
        }
    }
}
//Export the constructor
module.exports = Letter;