class Colour {

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

}

class Combination {

    constructor(colours) {
        if (colours != null) {
            console.log(typeof colours);
            this.colours = colours;
        } else {
            this.colours = [];
            var randomColour;
            for (var i = 0; i < combinationLength; i++) {
                do {
                    randomColour = colourPool[Math.floor(Math.random() * coloursAmount)];
                }
                while (this.colours.indexOf(randomColour) != -1)
                this.colours[i] = randomColour;
            }
        }
    }
}




var combinationLength = 5       // coloursAmount must be greater than (or euqal to) combinationsLength !!
var coloursAmount = 8;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var colourPool = [];
colourPool[0] = new Colour('white', 'FFFFFF');
colourPool[1] = new Colour('black', '000000');
colourPool[2] = new Colour('red', 'BB0000');
colourPool[3] = new Colour('yellow', 'FFFF00');
colourPool[4] = new Colour('blue', '0000BB');
colourPool[5] = new Colour('green', '00BB00');
colourPool[6] = new Colour('orange', 'ffa500');
colourPool[7] = new Colour('shit', '555555');
var guesses = [];
var combination = new Combination(undefined);


for (x of combination.colours) {
    console.log(x.name);
}



function displayColourPool() {
    var spacePerColour = canvas.width / coloursAmount;


    for (i = 0; i < coloursAmount; i++) {
        ctx.fillStyle = "#" + colourPool[i].value;
        ctx.fillRect(i * spacePerColour, canvas.height - 100,spacePerColour, 100);
    }
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, canvas.height - 105, canvas.width, 5);
}

displayColourPool();
