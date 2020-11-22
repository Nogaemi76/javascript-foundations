class Stark {
    constructor(name, location) {
        this._name = name;
        this._location = location || 'Winterfell';
        this._safe = false;
    }
     get name() {
        return this._name;
    }
    get location() {
        return this._location;
    }
    get safe() {
        return this._safe;
    }
    houseWords() {
        return (this._safe) ? 'The North Remembers' : 'Winter is Coming';
    }
}
module.exports = Stark;