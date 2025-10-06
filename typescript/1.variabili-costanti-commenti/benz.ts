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

abstract class distributore {
    abstract rifornisci(a: number): void;
    abstract vendi(a: number): void;
}
interface distributore1 {
    aggiorna(prezzo: number) : void;
}
class distributoreBenzina extends distributore implements distributore1 {
    private deposito: number;
    private euroPerLitro: number;
    constructor(deposito: number, euroPerLitro: number) {
        super();
        this.deposito = deposito;
        this.euroPerLitro = euroPerLitro;     
    }
    public rifornisci(a: number) : void {   
        this.deposito += a;
    }
    public vendi(a: number): void {       
        let quantitativo: number = a / this.euroPerLitro;
        if(quantitativo <= this.deposito) {
            this.deposito -= quantitativo;
        } else {
            console.log("Non c'è abbastanza benzina");
        }
    }
    public aggiorna(prezzo: number): void {   
        this.euroPerLitro = prezzo;
    }
    public getDeposito(): number {
        return this.deposito;
    }
    public getPrezzo(): number {
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





/*Progettare una classe di nome Cellulare, per rappresentare un telefono cellulare
con contratto a ricarica.
Tale classe prevede due variabili d'istanza. La prima variabile d'istanza e'
definita come private double carica, e rappresenta il quantitativo di euro
disponibile per le chiamate. La seconda variabile d'istanza e' definita come
private int numeroChiamate, e rappresenta il numero di chiamate effettuate con
il cellulare. La classe deve implementare un costruttore public Cellulare(double
unaCarica), che prende come parametro esplicito la quantita' di euro della
ricarica iniziale. La classe deve inoltre implementare i seguenti metodi. Un
metodo definito come public void ricarica(double unaRicarica), che ricarica il
telefonino. Un metodo definito come public void chiama(double minutiDurata), che
effettua una chiamata di durata in minuti specificata dal parametro esplicito.
Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria
contenente il numero di chiamate effettuate dal telefonino. Si assuma un costo
di 0.20 euro per ogni minuto di chiamata. Un metodo public double numero404(),
che restituisce il valore della carica disponibile. Un metodo public int
getNumeroChiamate(), che restituisce il valore della variabile d'istanza
numeroChiamate. Infine, un metodo public void azzeraChiamate(), che azzera la
variabile contenente il numero di chiamate effettuate dal telefonino.*/

interface ICellulare {
    ricarica(unaRicarica : number) : void;
    chiama(minutiDurata : number) : void;
    numero404() : number;
}

abstract class Smartphone{
    abstract getNumeroChiamate() : number;
    abstract azzeraChiamate() : void;
}

class Cellulare extends Smartphone implements ICellulare{
    private carica: number;
    private numeroChiamate: number;
    constructor(unaCarica: number){
        super();
        this.carica = unaCarica;
        this.numeroChiamate = 0;
    }
    public ricarica(unaRicarica: number) : void {
        this.carica += unaRicarica;
    }
    public chiama(minutiDurata: number) : void {
        const costoPerMinuto = 0.2;
        const costoTotale = minutiDurata * costoPerMinuto;
        if(costoTotale <= this.carica){
            this.carica -= costoTotale;
            this.numeroChiamate++;
        } else {
            console.log("Il credito per effettuare la chiamata non è sufficiente. Effettua una ricarica.");
        }
    }
    public numero404() : number {
        return this.carica;
    }
    public getNumeroChiamate() : number {
        return this.numeroChiamate;
    }
    public azzeraChiamate() : void {
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
    private static redditoAnnuoLordo: number
    private static coeffReddito: number
    private static aliquotaInps: number
    private static aliquotaIrpef: number
    private static inpsFissa: number
    private static importoEccedente: number
    constructor(
        redditoAnnuoLordo = 0,
        coeffReddito = 0,
        aliquotaInps = 0,
        aliquotaIrpef = 0,
        inpsFissa = 0,
        importoEccedente = 0) {
            Artigiano.redditoAnnuoLordo = redditoAnnuoLordo
            Artigiano.coeffReddito = coeffReddito
            Artigiano.aliquotaInps = aliquotaInps
            Artigiano.aliquotaIrpef = aliquotaIrpef
            Artigiano.inpsFissa = inpsFissa
            Artigiano.importoEccedente = importoEccedente
        }
    public static getUtileTasse(): number {
        return (Artigiano.redditoAnnuoLordo - Artigiano.importoEccedente) * Artigiano.coeffReddito / 100
    }
    public static getTassaInps(): number {
        return this.getUtileTasse() * Artigiano.aliquotaInps / 100
    }
    public static getTassaIrpef(): number {
        return this.getUtileTasse() * Artigiano.aliquotaIrpef / 100
    }
    public static getRedditoNetto(): number {
        return Artigiano.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef() + Artigiano.inpsFissa)
    }
}
let nettoArtigiano = new Artigiano(80000,67,25,24,3500,15000)
console.log(`REDDITO NETTO ARTIGIANO:        ${Artigiano.getRedditoNetto()}`);




