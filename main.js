const Deck = require("./Deck");

const MAX_TENT = 1000 * 1000 * 1000;
let correct = 0;
let perfect = 0;
let n_perfect = 0;

let d;
let s = new Date()
console.log("START", s);
for (let i = 0; i < MAX_TENT; i++) {
	d = new Deck();
	d.shaffle();

	if (d.isCorrect()) {
		correct++;
		if (d.isPerfect()) {
			perfect++
		}
	}
	if (d.isNPerfect()) {
		d.print();
		n_perfect++;
	}
}

console.log("END", new Date());
console.log("TOT", (new Date() - s) / 1000, "s");

console.log(`Correct: ${correct}/${MAX_TENT} (${correct/MAX_TENT*100}%)`);
console.log(`Perfect: ${perfect}/${MAX_TENT} (${perfect/MAX_TENT*100}%)`);
console.log(`N-Perfect: ${n_perfect}/${MAX_TENT} (${n_perfect/MAX_TENT*100}%)`);