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

}