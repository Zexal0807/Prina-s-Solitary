const Deck = require("./Deck");

let s = 40;
let d;
do {
    d = new Deck();
    d.shaffle();
    s = d.check();
} while (s != 2);
console.log("Sequenza lunga " + s);
d.print();