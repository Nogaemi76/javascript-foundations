class Human {
    constructor(name) {
        this._name = name;
        this._encounterCounter = 0;
        this._knockedOut = false;
    }
    get name() {
        return this._name;
    }
    get encounterCounter() {
        return this._encounterCounter;
    }
    get knockedOut() {
        return this._knockedOut;
    }
    noticesOgre() {
        return (this._encounterCounter !== 0 && this._encounterCounter%3 === 0) ? true : false;
    }
}
module.exports = Human;