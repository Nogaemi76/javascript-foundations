class Sphinx {
    constructor() {
        this._riddles = [];
        this._heroesEaten = 0;
    }
    get riddles() {
        return this._riddles;
    }
    get heroesEaten() {
        return this._heroesEaten;
    }
    collectRiddle(riddle) {    
        this._riddles.push(riddle);
        if (this._riddles.length > 3) {
            this._riddles.shift();
        }
    }
    attemptAnswer(answer) {
        let goodAnswer = false;
        for (let i = 0; i < this._riddles.length; i++) {
            if (answer === this._riddles[i].answer) {
                this._riddles.splice(i, 1);
                goodAnswer = true;
                if (this._riddles.length === 0) {
                    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`;
                } else {
                    return 'That wasn\'t that hard, I bet you don\'t get the next one';
                }
            }
        }
        if (!goodAnswer) {
            this._heroesEaten++;
        }
    }
}
module.exports = Sphinx;