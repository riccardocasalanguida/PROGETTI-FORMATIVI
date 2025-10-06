/*Progettare una classe di nome DistributoreBenzina, per rappresentare un
distributore di carburante per automobili. Tale classe prevede due variabili
d'istanza. La prima chiamata deposito, di tipo double, e contiene il
quantitativo di benzina disponibile al distributore. La seconda, chiamata
euroPerLitro, di tipo double, rappresenta il prezzo della benzina, espresso in
euro per litro.
La classe deve implementare un costruttore public DistributoreBenzina(double
unPrezzoPerLitro), che prende come parametro esplicito il prezzo in euro per un
litro di benzina. La quantita' iniziale di benzina disponibile e' zero. La
15
classe deve inoltre implementare i seguenti metodi: public void
rifornisci(double unaQuantita), che rifornisce il distributore di benzina.
public void vendi(double euro, Car unaAutomobile) che vende una quantita' di
benzina corrispondente all'ammontare di euro pagato che va a rifornisce
l'automobile passata come parametro esplicito. public void aggiorna(double
unPrezzoPerLitro), che aggiorna il prezzo della benzina.
Consigli:
Si noti che nel metodo vendi(double euro, Car unAutomobile) il secondo parametro
esplicito unAutomobile è un oggetto della classe Car dell’esercizio 3.3 che deve
essere costruito con il costruttore della classe Car, di conseguenza, si possono
sfruttare i metodi della classe Car.
Nel Tester create varie automobili e un distributore. Fate compiere alcuni
"viaggi" alle automobili, e rifornitele di benzina in modo appropriato. Inoltre,
rifornite la pompa di benzina in caso di necessità.*/
class distributore {
}
class distributoreBenzina extends distributore {
    constructor(deposito, euroPerLitro) {
        super();
        this.deposito = deposito;
        this.euroPerLitro = euroPerLitro;
    }
    rifornisci(a) {
        this.deposito += a;
    }
    vendi(a) {
        let quantitativo = a / this.euroPerLitro;
        if (quantitativo <= this.deposito) {
            this.deposito -= quantitativo;
        }
        else {
            console.log("Non c'è abbastanza benzina");
        }
    }
    aggiorna(prezzo) {
        this.euroPerLitro = prezzo;
    }
    getDeposito() {
        return this.deposito;
    }
    getPrezzo() {
        return this.euroPerLitro;
    }
}
let distributore3 = new distributoreBenzina(100, 1.74);
distributore3.rifornisci(10);
console.log(distributore3.getDeposito());
distributore3.vendi(50);
console.log(distributore3.getDeposito());
distributore3.aggiorna(1.78);
console.log(distributore3.getPrezzo());
distributore3.vendi(600);
class Smartphone {
}
class Cellulare extends Smartphone {
    constructor(unaCarica) {
        super();
        this.carica = unaCarica;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiama(minutiDurata) {
        const costoPerMinuto = 0.2;
        const costoTotale = minutiDurata * costoPerMinuto;
        if (costoTotale <= this.carica) {
            this.carica -= costoTotale;
            this.numeroChiamate++;
        }
        else {
            console.log("Il credito per effettuare la chiamata non è sufficiente. Effettua una ricarica.");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const cellulare = new Cellulare(20);
cellulare.chiama(10);
console.log("Credito residuo: €", cellulare.numero404());
console.log("Numero chiamate effettuate: ", cellulare.getNumeroChiamate());
cellulare.ricarica(10);
console.log("Nuovo credito telefonico: €", cellulare.numero404());
cellulare.azzeraChiamate();
console.log("Numero chiamate effettuate dopo l'azzeramento: ", cellulare.getNumeroChiamate());
//////////////// ESEMPIO STATIC /////////////
class Artigiano {
    constructor(redditoAnnuoLordo = 0, coeffReddito = 0, aliquotaInps = 0, aliquotaIrpef = 0, inpsFissa = 0, importoEccedente = 0) {
        Artigiano.redditoAnnuoLordo = redditoAnnuoLordo;
        Artigiano.coeffReddito = coeffReddito;
        Artigiano.aliquotaInps = aliquotaInps;
        Artigiano.aliquotaIrpef = aliquotaIrpef;
        Artigiano.inpsFissa = inpsFissa;
        Artigiano.importoEccedente = importoEccedente;
    }
    static getUtileTasse() {
        return (Artigiano.redditoAnnuoLordo - Artigiano.importoEccedente) * Artigiano.coeffReddito / 100;
    }
    static getTassaInps() {
        return this.getUtileTasse() * Artigiano.aliquotaInps / 100;
    }
    static getTassaIrpef() {
        return this.getUtileTasse() * Artigiano.aliquotaIrpef / 100;
    }
    static getRedditoNetto() {
        return Artigiano.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef() + Artigiano.inpsFissa);
    }
}
let nettoArtigiano = new Artigiano(80000, 67, 25, 24, 3500, 15000);
console.log(`REDDITO NETTO ARTIGIANO:        ${Artigiano.getRedditoNetto()}`);
//# sourceMappingURL=benz.js.map