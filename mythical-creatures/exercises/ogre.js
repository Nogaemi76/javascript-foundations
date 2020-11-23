class Ogre {
    constructor(name, home) {
        this._name = name;
        this._home = home || 'Swamp';
        this._swings = 0;
    }
    get name() {
        return this._name;
    }
    get home() {
        return this._home;
    }
    get swings() {
        return this._swings;
    }
    encounter(human) {
        human._encounterCounter++;
        if (human._encounterCounter !== 0 && human._encounterCounter%3 === 0) {
            this._swings++;
        }
        if (this._swings !== 0 && this._swings%2 === 0){
            human._knockedOut = true;
        }
    }
    swingAt(human) {
        if (human !== null) {
            this._swings++;
        }
    }
    apologize(human) {
        human._knockedOut = false;
    }
}
module.exports = Ogre;