class Hobbit {
    constructor(name) {
        this._name = name;
        this._age = 0;
        this._hasRing = false;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get adult() {
        return (this._age > 32) ? this._adult = true : this._adult = false;
    }
    get old() {    
        return (this._age > 100) ? this._old = true : this._old = false;
    }
    get hasRing() {
        return (this._name === 'Frodo') ? true : false;
    }
    
    celebrateBirthday() {
        this._age++;
    }
}
module.exports = Hobbit;