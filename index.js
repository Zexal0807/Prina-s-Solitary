const Deck = require("./Deck");

let s = 40;
let d;
let tent = 0;
console.log(new Date())
do {
    d = new Deck();
    d.shaffle();
    s = d.perfectCheck();
    tent++;
    if (tent % 1000000 == 0) {
        console.log("Tentativi: " + tent / 1000000 + ".000.000");
    }
} while (s != 1);
console.log("Sequenza lunga " + s + " in " + tent + " tentativi");
console.log(new Date())
d.print();