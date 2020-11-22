class Fairy {
    constructor(name) {
        this._name = name;
        this._dust = 10;
        this._clothes = {dresses: ['Iris']};
        this._disposition = 'Good natured';
        this._humanWards = [];
    }
    get name() {
        return this._name;
    }
    get dust() {
        return this._dust;
    }
    get clothes() {
        return this._clothes;
    }
    get disposition() {
        return this._disposition;
    }
    get humanWards() {
        return this._humanWards;
    }
    receiveBelief() {
        this._dust++;
    }
    believe() {
        this._dust = this._dust + 10;
    }
    makeDresses(flowers) {
        this._clothes.dresses = this._clothes.dresses.concat(flowers);
    }
    provoke() {
        this._disposition = 'Vengeful';
    }
    replaceInfant(infant) {
        if (this._disposition === 'Vengeful') {
            infant.disposition = 'Malicious';
            this._humanWards.push(infant);
        }
        if (this._humanWards.length > 2) {
            this._disposition = 'Good natured';
        }
        return infant;
    }
}
module.exports = Fairy;