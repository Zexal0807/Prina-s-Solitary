const Deck = require("./Deck");

const MAX_TENT = 10 * 1000 * 1000;

let result = [];

let correct = 0;
let perfect = 0;
let perfectInCorrect = 0;
let n_perfect = 0;

let d;
let s = new Date()
console.log("START", s);
for (let i = 0; i < MAX_TENT; i++) {
	d = new Deck();
	d.shaffle();

	let ss = d._check([...d.cards]);
	if (result[ss] == undefined) {
		result[ss] = 0;
	}
	result[ss]++;

	if (ss == 2) {
		correct++;
		if (d.isPerfect()) {
			perfect++;
			perfectInCorrect++;
		}
	}
	if (ss == 40) {
		d.print();
		n_perfect++;
	}
}

console.log("END", new Date());
console.log("TOT", (new Date() - s) / 1000, "s");

console.log(`Correct: ${correct}/${MAX_TENT} (${correct/MAX_TENT*100}%)`);
console.log(`Perfect: ${perfect}/${MAX_TENT} (${perfect/MAX_TENT*100}%)`);
console.log(`Perfect IN Correct: ${perfectInCorrect}/${correct} (${perfectInCorrect/correct*100}%)`);
console.log(`N-Perfect: ${n_perfect}/${MAX_TENT} (${n_perfect/MAX_TENT*100}%)`);

console.log(result.map(x => { return { tent: x, perc: x / MAX_TENT * 100 } }));