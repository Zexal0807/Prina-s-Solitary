const Card = require("./Card");
const Seme = require("./Seme");
const Value = require("./Value");

module.exports = class Deck {

    cards = [];

    constructor() {
        this.cards.push(new Card(Seme.HEART, Value.ONE));


    }

}