class Werewolf {
    constructor(name) {
        this._name = name
        this._human = true;
        this._wolf = false;
        this._hungry = false;
        this._ate = false;
    }
    get name() {
        return this._name;
    }
    get human() {
        return this._human;
    }
    get wolf() {
        return this._wolf;
    }
    get hungry() {
        return this._hungry;
    }
    get ate() {
        return this._ate;
    }
    transform() {
        if (this._human === true) {
            this._human = false;
            this._wolf = true;
            this._hungry = true;
        } else {
            this._human = true;
            this._wolf = false;
            this._hungry = false;
        }
        return this._human && this._wolf;
    }
    eat(victim) {
        if (this._hungry === true && this._human === false) {
            victim._eaten = true;
            this._ate = true;
            this._human = true
        }
        return victim._eaten && this._ate & this._human;    
    }
}
module.exports = Werewolf;