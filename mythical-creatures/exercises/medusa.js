class Medusa {
    constructor (name) {
        this._name = name;
        this._statues = [];
    }
    get name() {
        return this._name;
    }
    get statues() {
        return this._statues;
    }
    stare(human){
        if (this._statues.length < 3) {
            this._statues.push(human);
        } else {
            this._statues.push(human);
            let victimSaved = this._statues.slice(0,1);
            victimSaved[0]._stoned = false;
            this._statues.shift();
        }
        for(let i = 0; i < this._statues.length; i++) {
                this._statues[i]._stoned = true;
        }
    }
}
module.exports = Medusa;