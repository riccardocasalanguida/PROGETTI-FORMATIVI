class Professionista2 {
}
class LavoratoriAutonomi2 extends Professionista2 {
    constructor(redditoAnnuoNetto = 0, coeffReddito = 0, aliquotaInps = 0, aliquotaIrpef = 0) {
        super();
        this.redditoAnnuoLordo = redditoAnnuoNetto;
        this.coeffReddito = coeffReddito;
        this.aliquotaInps = aliquotaInps;
        this.aliquotaIrpef = aliquotaIrpef;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * this.coeffReddito / 100;
    }
    getTassaInps() {
        return this.getUtileTasse() * this.aliquotaInps / 100;
    }
    getTassaIrpef() {
        return this.getUtileTasse() * this.aliquotaIrpef / 100;
    }
    getRedditoNetto() {
        return this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef());
    }
}
let reddNetto = new LavoratoriAutonomi2(70000, 78, 26, 15);
console.log(`REDDITO NETTO:   ${reddNetto.getRedditoNetto()}`);
console.log("");
//# sourceMappingURL=test3.js.map