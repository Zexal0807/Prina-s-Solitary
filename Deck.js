const Card = require("./Card");
const Seme = require("./Seme");
const Value = require("./Value");

module.exports = class Deck {

	cards = [];

	constructor() {
		this.cards.push(new Card(Seme.HEART, Value.ONE));
		this.cards.push(new Card(Seme.HEART, Value.TWO));
		this.cards.push(new Card(Seme.HEART, Value.THREE));
		this.cards.push(new Card(Seme.HEART, Value.FOUR));
		this.cards.push(new Card(Seme.HEART, Value.FIVE));
		this.cards.push(new Card(Seme.HEART, Value.SIX));
		this.cards.push(new Card(Seme.HEART, Value.SEVEN));
		this.cards.push(new Card(Seme.HEART, Value.JACK));
		this.cards.push(new Card(Seme.HEART, Value.QUEEN));
		this.cards.push(new Card(Seme.HEART, Value.KING));

		this.cards.push(new Card(Seme.DIAMOND, Value.ONE));
		this.cards.push(new Card(Seme.DIAMOND, Value.TWO));
		this.cards.push(new Card(Seme.DIAMOND, Value.THREE));
		this.cards.push(new Card(Seme.DIAMOND, Value.FOUR));
		this.cards.push(new Card(Seme.DIAMOND, Value.FIVE));
		this.cards.push(new Card(Seme.DIAMOND, Value.SIX));
		this.cards.push(new Card(Seme.DIAMOND, Value.SEVEN));
		this.cards.push(new Card(Seme.DIAMOND, Value.JACK));
		this.cards.push(new Card(Seme.DIAMOND, Value.QUEEN));
		this.cards.push(new Card(Seme.DIAMOND, Value.KING));

		this.cards.push(new Card(Seme.FLOWER, Value.ONE));
		this.cards.push(new Card(Seme.FLOWER, Value.TWO));
		this.cards.push(new Card(Seme.FLOWER, Value.THREE));
		this.cards.push(new Card(Seme.FLOWER, Value.FOUR));
		this.cards.push(new Card(Seme.FLOWER, Value.FIVE));
		this.cards.push(new Card(Seme.FLOWER, Value.SIX));
		this.cards.push(new Card(Seme.FLOWER, Value.SEVEN));
		this.cards.push(new Card(Seme.FLOWER, Value.JACK));
		this.cards.push(new Card(Seme.FLOWER, Value.QUEEN));
		this.cards.push(new Card(Seme.FLOWER, Value.KING));

		this.cards.push(new Card(Seme.CLUB, Value.ONE));
		this.cards.push(new Card(Seme.CLUB, Value.TWO));
		this.cards.push(new Card(Seme.CLUB, Value.THREE));
		this.cards.push(new Card(Seme.CLUB, Value.FOUR));
		this.cards.push(new Card(Seme.CLUB, Value.FIVE));
		this.cards.push(new Card(Seme.CLUB, Value.SIX));
		this.cards.push(new Card(Seme.CLUB, Value.SEVEN));
		this.cards.push(new Card(Seme.CLUB, Value.JACK));
		this.cards.push(new Card(Seme.CLUB, Value.QUEEN));
		this.cards.push(new Card(Seme.CLUB, Value.KING));
	}

	shaffle() {
		let index = this.cards.length;
		let randomIndex;

		while (index != 0) {

			randomIndex = Math.floor(Math.random() * index);
			index--;

			[
				this.cards[index], this.cards[randomIndex]
			] = [
				this.cards[randomIndex], this.cards[index]
			];
		}
	}

	print() {
		let s = this.cards.map(card => card.print()).join(" ");
		console.log(s);
	}

	check() {
		let cards = [...this.cards];

		let i = 0;
		let j = 2;

		while (j < cards.length) {

			let a = cards[i];
			let b = cards[j];

			if (a.value == b.value || a.seme == b.seme) {
				cards.splice(i, 1);
				i = 0;
				j = 2;
			} else {
				i++;
				j++;
			}
		}
		return cards.length;

	}

	perfectCheck() {
		let cards = [...this.cards];
		let last = cards.pop();

		let i = 0;
		let j = 2;

		while (j < cards.length) {

			let a = cards[i];
			let b = cards[j];

			if (a.value == b.value || a.seme == b.seme) {
				cards.splice(i, 1);
				i = 0;
				j = 2;
			} else {
				i++;
				j++;
			}
		}
		if (cards.length == 2) {
			let a = cards[0];
			if (a.value == last.value || a.seme == last.seme) {
				return 1;
			}
		}
		return cards.length;
	}

	_sameValueOrSeme(a, b) {
		return a.value == b.value || a.seme == b.seme;
	}

	_check(cards) {
		let i = 0;
		let j = 2;

		while (j < cards.length) {
			let a = cards[i];
			let b = cards[j];

			if (this._sameValueOrSeme(a, b)) {
				cards.splice(i, 1);
				i = 0;
				j = 2;
			} else {
				i++;
				j++;
			}
		}
		return cards.length;
	}

	isCorrect() {
		let cards = [...this.cards];
		return this._check(cards) == 2;
	}

	isPerfect() {
		let cards = [...this.cards];
		let last = cards.pop();

		this._check(cards);
		if (cards.length == 2) {
			let a = cards[0];
			return this._sameValueOrSeme(a, last);
		}
		return false;

	}

	isNPerfect() {
		let cards = [...this.cards];
		return this._check(cards) == 40;
	}
}