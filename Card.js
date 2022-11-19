module.exports = class Card {

	constructor(seme, value) {
		this.seme = seme;
		this.value = value;
	}

	print() {
		return this.seme + this.value;
	}

}