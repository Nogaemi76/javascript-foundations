class Person {
    constructor(name) {
        this._name = name;
        this._stoned = false;
    }
    get name() {
        return this._name;
    }
    get stoned() {
        return this._stoned;
    }
}
module.exports = Person;