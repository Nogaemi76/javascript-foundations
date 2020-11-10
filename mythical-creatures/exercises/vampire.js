class Vampire {
    constructor(name, pet) {
        this._name = name;
        this._pet = pet || "bat";
        this._thirsty = true;
    }
    get name() {
        return this._name;
    }
    get pet() {
        return this._pet;
    }

    get thirsty() {
        return this._thirsty;
    }
    drink() {
        this._thirsty = false;
    }

}

module.exports = Vampire;