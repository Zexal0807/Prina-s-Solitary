const Deck = require("./Deck");

let s = 40;
let d;
do {
    d = new Deck();
    d.shaffle();
    s = d.perfectCheck();
} while (s != 1);
console.log("Sequenza lunga " + s);
d.print();