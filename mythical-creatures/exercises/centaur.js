class Centaur {
    constructor({name, type}= {}) {
        this._name = name;
        this._breed = type;
        this._cranky = false;
        this._standing = true;
        this._nerves = 0;
        this._layingDown = false;
    }
    get name() {
        return this._name;
    }
    get breed() {
        return this._breed;
    }
    get cranky() {
        return (this._nerves > 2) ? this._cranky = true : this._cranky = false;
    }
    get standing() {
        return this._standing;
    }
    get layingDown() {
        return this._layingDown;
    }
    shoot() {
        this._nerves++;
        (this._nerves > 2) ? this._cranky = true : this._cranky = false;
        return (this._cranky === true || this._layingDown === true) ? 'NO!' : 'Twang!!!';
    }
    run() {
        this._nerves++;
        (this._nerves > 2) ? this._cranky = true : this._cranky = false;
        return (this._cranky === true || this._layingDown === true) ? 'NO!' : 'Clop clop clop clop!!!';
    }
    sleep() {
        this._nerves = 0;
        return (this._standing === true && this._layingDown === false)? 'NO!': 'ZZZZ';
    }
    layDown() {
        this._standing = false;
        this._layingDown = true;
        return this._standing && this._layingDown;
    }
    standUp() {
        this._standing = true;
        this._layingDown = false;
        return this._standing && this._layingDown;
    }
    drinkPotion() {
        if (this._standing === false && this._layingDown === true) {
            return 'Not while I\'m laying down!'
        } else {
            return (this._nerves != 0) ? this._nerves = 0 : this._nerves = 3;
        }
    }
}
module.exports = Centaur;