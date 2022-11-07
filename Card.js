module.exports = class Card {
    constructor(seme, value) {
        this.seme = seme;
        this.value = value;
    }

    print() {
        console.log(this.seme, this.value);
    }

}