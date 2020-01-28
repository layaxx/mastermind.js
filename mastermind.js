class Colour {

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

}

class Combination{

    constructor(){
        this.colours = new Colour[combinationLength];
        var randomColour;
        for(var i = 0; i < combinationLength; i++){
            randomColour =
            this.colours[i] = randomColour;
        }
    }

    constructor(colours){
        this.colours = colours;
    }
}


var combinationLength = 5       // coloursAmount must be greater than (or euqal to) combinationsLength !!
var coloursAmount = 8;

var colors = new Colour[8];
var guesses = new Colour[1][combinationLength];
var combination = new Combination();
