class Victim {
    constructor(name) {
        this._name = name;
        this._eaten = false;
    }
    get name() {
        return this._name;
    }
    get eaten() {
        return this._eaten;
    }
}
module.exports = Victim;