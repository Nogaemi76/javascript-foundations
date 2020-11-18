class Magician {
    constructor({name, topHat = true} = {}) {
        this._name = name;
        this._topHat = topHat;
        this._confident = false;
        this._spellCasted = 0;
    }
    get name() {
        return this._name;
    }
    get topHat() {
        return this._topHat;
    }
    get confident() {
        return this._confident;
    }
    get spellCasted() {
        return this._spellCasted;
    }
    incantation(spell) {
        return spell.toUpperCase() + "!";
    }
    cast() {
        this._spellCasted++;
        (this._spellCasted < 3) ? this._confident = false : this._confident = true; 
        //console.dir(this._confident);
        return (this._topHat) ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE';
    }
    performShowStopper() {
        return (this._confident === true) ? 'WOW! The magician totally just sawed that person in half!' : 'Oh no! Practice more before attempting this trick!'
    }
}
module.exports = Magician;