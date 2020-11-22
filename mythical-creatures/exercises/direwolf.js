class Direwolf {
    constructor(name, home, size) {
        this._name = name;
        this._home = home || 'Beyond the Wall';
        this._size = size || 'Massive';
        this._starksToProtect = [];
        this._huntsWhiteWalkers = true;
    }
    get name() {
        return this._name;
    }
    get home() {
        return this._home;
    }
    get size() {
        return this._size;
    }
    get starksToProtect() {
        return this._starksToProtect;
    }
    get huntsWhiteWalkers() {
        return this._huntsWhiteWalkers;
    }
    protect(stark) {
        if (this._home === stark._location && this._starksToProtect.length < 2) {
            stark._safe = true;
            this._huntsWhiteWalkers = false;
            this._starksToProtect.push(stark);
        }
        return this._starksToProtect;
    }
    leave(stark) {
        for (let i = 0; i < this._starksToProtect.length; i++) {
            if (this._starksToProtect[i]._name === stark._name) {
                this._starksToProtect.splice(i, 1);
            }
        }
        stark._safe = false;
    }
}
module.exports = Direwolf;