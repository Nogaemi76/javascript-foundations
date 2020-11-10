class Dragon {
    constructor(name, rider, color) {
        this._name = name;
        this._rider = rider;
        this._color = color;
        this._hungry = true;
        this._meal = 0;
    }
    get name() {
        return this._name;
    }
    get rider() {
        return this._rider;
    }
    get color() {
        return this._color;
    }
    get hungry() {
        return this._hungry;
    }
    eat() {
        this._meal++;
        return (this._meal > 2) ? this._hungry = false : this._hungry = true;
    }
}

module.exports = Dragon;