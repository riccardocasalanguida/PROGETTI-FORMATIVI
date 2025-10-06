abstract class Professionista2 {
    abstract getUtileTasse(): number
}

interface IProfessionista2 {
    getTassaInps(): number
    getTassaIrpef(): number
}

class LavoratoriAutonomi2 extends Professionista2 implements IProfessionista2 {
    private redditoAnnuoLordo: number
    private coeffReddito: number
    private aliquotaInps: number
    private aliquotaIrpef: number
    constructor(
        redditoAnnuoNetto = 0,
        coeffReddito = 0,
        aliquotaInps = 0,
        aliquotaIrpef = 0) {
            super()
            this.redditoAnnuoLordo = redditoAnnuoNetto
            this.coeffReddito = coeffReddito
            this.aliquotaInps = aliquotaInps
            this.aliquotaIrpef = aliquotaIrpef
        }
        public getUtileTasse(): number {
            return this.redditoAnnuoLordo * this.coeffReddito / 100
        }
        public getTassaInps(): number {
            return this.getUtileTasse() * this.aliquotaInps / 100
        }
        public getTassaIrpef(): number {
            return this.getUtileTasse() * this.aliquotaIrpef / 100
        }
        public getRedditoNetto(): number {
            return this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef())
        }
}
let reddNetto = new LavoratoriAutonomi2(70000,78,26,15)
console.log(`REDDITO NETTO:   ${reddNetto.getRedditoNetto()}`);
console.log("");







