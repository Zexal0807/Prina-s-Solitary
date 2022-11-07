const Deck = require("./Deck");

let d = new Deck();
d.shaffle();
let s = d.check();
console.log("Sequnza lunga " + s);
d.print();