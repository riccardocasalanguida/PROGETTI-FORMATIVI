/*let studente: string = 'Riccardo'
console.log(studente);
console.log(" ");

let arr: string[] = ['giallo','verde','blu'];
console.log(" ");
console.log(arr);
console.log(" ");
arr.unshift('arancione');
arr.push('rosso');
console.log(arr);
console.log(" ");
//console.log(arr.pop());
//console.log(" ");
console.log("CRESCENTE: " + arr.sort());
console.log(" ");
console.log("REVERSE: " + arr.reverse());
console.log(" ");*/

/*
///////////ESERCIZI TYPESCRIPT//////    
//Crea un array di interi e stampane ogni elemento.
let arr1: number[] = [5,15,10,20,10,25];
for(let i = 0; i < arr1.length; i++){  
    console.log(arr1[i]);        
};
console.log(" ");

//Calcola la somma di tutti gli elementi di un array.
let somma: number = 0;
for(let i = 0; i < arr1.length; i++){  
    somma += arr1[i];        
};
console.log("LA SOMMA DEI VALORI DELL'ARRAY 'arr1' E': " + somma);
console.log(" ");

//Calcola la media aritmetica degli elementi di un array.
let media: number = 0;
for(let i = 0; i < arr1.length; i++){  
    somma += arr1[i];        
};
media = somma / arr1.length;
console.log("LA MEDIA DEI VALORI E': " + media);
console.log(" ");

//Trova il valore massimo in un array di interi.
let valMax: number = arr1[0];
for(let i = 0; i < arr1.length; i++){  
    if (arr1[i] > valMax) {
        valMax = arr1[i];
    }  
};
console.log("IL VALORE MASSIMO E': " + valMax);  
console.log(" ");

//Trova il valore minimo in un array di interi.
let valMin: number = arr1[0];
for(let i = 0; i < arr1.length; i++){  
    if (arr1[i] < valMin) {
        valMin = arr1[i];
    }  
};
console.log("IL VALORE MINIMO E': " + valMin);  
console.log(" ");

//Conta il numero di elementi pari in un array.
let cont: number = 0;
for(let i = 0; i < arr1.length; i++){  
    if (arr1[i] % 2 == 0) {
        cont++;
    }  
};
console.log("I VALORI PARI SONO: " + cont);  
console.log(" ");

//Stampa gli elementi dell’array in ordine inverso.
for(let i = arr1.length - 1; i >= 0; i--){  
    console.log(arr1[i]);        
};
console.log(" ");

//Controlla se un numero dato (es. 10) è presente nell’array.
let presente: boolean = false;
for(let i = 0; i < arr1.length; i++){  
    if (arr1[i] == 10) {
        presente = true;
    }  
};
console.log("10 E' PRESENTE NELL'ARRAY? " + (presente ? "SI" : "NO"));  
console.log(" ");

//Conta quanti elementi nell’array sono maggiori di 10.
let contatore: number = 0;
for(let i = 0; i < arr1.length; i++){  
    if (arr1[i] > 10) {
        contatore++;
    }  
};
console.log("I VALORI MAGGIORI DI 10 SONO: " + contatore);  
console.log(" ");
*/






/*
///////OGGETTI///////
const nation1: {id: number; name: string; city: string} = 
                {id: 1, name: "italy", city: "turin"};
console.log(nation1);
console.log(nation1.name);


const prodotto: {nome: string; prezzo: number; marca: string[]} = 
                {nome: "mouse", prezzo: 50, marca: ["trust", "microsoft", "asus"]};
console.log("");
console.log(prodotto);
console.log(...prodotto.marca);
console.log("");

//Traccia: Crea un oggetto persona con nome e età.
const persona: {id: number; nome: string; età: number} = {id: 1, nome: "Riccardo", età: 39};
console.log(persona.nome);
console.log(persona.età);
console.log("");

//Traccia: Crea un oggetto con un metodo che saluta.
function ogg() {
    const ogg = {
        nome: "Anna", 
        saluta() {
        return `Ciao sono ${this.nome}`;
        }
    };
    console.log(ogg.saluta());
}
ogg();
console.log("");

//Traccia: Crea un oggetto auto con proprietà modello e opzionale anno.
function auto() {
    const auto: {
        modello: string,
        anno ?: number;
    } = {
        modello: "Audi"
    };
    console.log(auto);
}
auto();
console.log("");

//Traccia: Crea un oggetto con un altro oggetto dentro.
function studente() {
    const studente = {
        nome: "Riccardo",
        indirizzo: {via: "Via Roma 1", città: "Milano"}
    }
    console.log(studente);
}
studente();
console.log("");

//Traccia: Crea un oggetto classe con un array di studenti.
function classe() {
    const classe = {
        nome: "3A",
        studenti: ["Riccardo", "Francesca", "Marta"]
    }
    console.log(classe)
}
classe();
console.log("");

//Traccia: Passa un oggetto a una funzione.
function persona1(p: {nome: string; età: number}) {
    console.log(`${p.nome} ${p.età}`);
}
persona1({nome: "Riccardo", età: 39});
console.log("");

//Oggetto come ritorno
//Traccia: Una funzione deve restituire un oggetto.
function auto1() {
    return {
        marca: "Audi",
        modello: "A3"
    }
}
console.log(auto1());
console.log("");

//Oggetto con chiavi dinamiche
//Traccia: Crea un oggetto rubrica con chiavi assegnate a runtime.
function rubrica() {
    let rubrica: {[nome: string]: string} = {}
            rubrica["Mario"] = "12345"
            rubrica["Giovanni"] = "56789"
            rubrica["Lucia"] = "98745"
            console.log(rubrica);
}
rubrica();
console.log("");

//Oggetto con unione di tipi
//Traccia: Una proprietà può essere string o number.
function pagamento() {
    let pagamento: {tipo: string|number} =    //PRENDE ENTRAMBI I TIPI DI VALORI////
    {tipo: 123456}
    console.log(pagamento);
    
}
pagamento();

//Traccia: Crea un array contenente più oggetti.
function prodotti() {
    let prodotti = [{art: "pane", prezzo: 3.5},
                    {art: "mele", prezzo: 2.5},
                    {art: "pasta", prezzo: 1}]                    
        console.log(prodotti);
}
prodotti();

//Traccia: Stampa tutte le chiavi e i valori di un oggetto.
function nomi() {
    let nomi = {nome: "Riccardo", età: 39}
    for(let chiave in nomi) {
        console.log(`${chiave}: ${nomi[chiave as keyof typeof nomi]}`);   
    }
}
nomi();
*/




/*
///////// TUPLA /////////
let tupla1: [string, string];
tupla1 = ["tupla", "typescript"];
console.log(tupla1);

let employee1: [number, string][];
employee1 = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];
console.log(employee);

let names1: [number, string] = [1, "Steve"];
//names[0]
//names[1]
console.log(names1);
*/


/*
let prodotti: [string,string,boolean,number];
prodotti = ["pc","asus",true,5];
console.log(prodotti);
console.log("");
 


//Traccia: Stampa solo il secondo elemento di una tupla.
//Traccia: Modifica il contenuto di una tupla già dichiarata.//******
function persone() {
    let persone: [string,number,string,number,string,number];
    persone = ["riccardo",39,"lucia",37,"mario",35];
    persone[2] = "Francesca";//******
    console.log(persone);
    console.log(persone[1]);    
}
persone();
console.log("");



//Traccia: Crea una funzione che ritorna una tupla [string, number].
function getUtente(): [string,number] {
    return ["Riccardo",39];
}
console.log(getUtente());
console.log("");



//Traccia: Crea una tupla [string, number, boolean].
let tup: [string,number,boolean]
tup = ["mouse",5,true]
console.log(tup);
console.log("");



//Traccia: Crea un array che contiene più tuple [string, number].
let arrTuple: [string,number][];
arrTuple = [["monitor",150],["mouse",50],["tastiera",70]];
console.log(arrTuple);
console.log("");
//Traccia: Scorri un array di tuple e stampa i dati.
for(let i in arrTuple) {
        console.log(`${i}: ${arrTuple[i as keyof typeof arrTuple]}`);   
    }
console.log("");
arrTuple.forEach((tupla, i) => {    /////CON FOREACH////
    console.log(`${i}: ${tupla}`);
});
console.log("");



//. Destrutturazione di tuple
//Traccia: Estrai i valori da una tupla in variabili separate.
function eserc() {
  let tupla: [string, number] = ["Paolo", 33];
  const [nome, eta] = tupla;
  console.log(nome, eta);
}
eserc();
console.log("");



//Funzione con parametro tupla
//Traccia: Crea una funzione che accetta una tupla [string, number].
let utente: [string, number] = ["Riccardo", 39];
function getTupla(persona: [string, number]) {
  const nome = persona[0];
  const eta = persona[1];
  console.log(nome);
  console.log(eta);
}
getTupla(utente); 
//VERSIONE 2
function traccia2(tupla: any) {
  const [nome, eta] = tupla;
  console.log(nome);
  console.log(eta);
}
traccia2(["Mario", 60]);
console.log("");



//Tuple opzionali
//Traccia: Definisci una tupla dove il terzo elemento è opzionale.
function eserc1() {
  let tupla: [string,number,any?] = ["Paolo", 44,];
  for (let i = 0; i < tupla.length; i++) {
    console.log(tupla[i]);
  }
}
eserc1();
//VERSIONE 2
function traccia3() {
  let tupla: [cognome: string, nome?: string] = ["Verdi"];
  tupla.push("Rossi", "Luigi");
  tupla.push("Bianchi", "Andrea");

  for (let i = 0; i < tupla.length; i++) {
    console.log(tupla[i]);
  }
}
traccia3();
console.log("");



//Tupla con tipo readonly
//Traccia: Definisci una tupla immutabile
let tuplaOnly: readonly[string,number]
tuplaOnly = ["mouse",50]
console.log(tuplaOnly);
//VERSIONE 2
function coordinate() {
    let coordinate : readonly [number, number] = [1 , 2];
    console.log(coordinate);
}
coordinate();
console.log("");



//Tupla come chiave-valore
//Traccia: Crea una funzione che ritorna una tupla chiave-valore.
function coppiaChiaveValore(key : string, value : number) : [string, number] {
   return [key, value];
}
console.log(coppiaChiaveValore("ab123", 1));
console.log("");



//Uso avanzato con map
//Traccia: Dato un array di tuple [string, number], incrementa tutti i numeri di 1.
function coppia() {
    let coppia : [string, number][];
    coppia = [["a", 1],["b", 2],["c", 3]
    ]
    let appoggio = coppia.map(([lettera, numero]) : [string, number] => 
        {return [lettera, numero + 1]});
    console.log(appoggio);
}
coppia();
console.log("");
*/


/*
/////////FUNCTION & FUNCTION OVERLOAD/////////
function add1(a: string, b: string): string;
function add1(a: number, b: number): number;
function add1(a: any, b: any): any {
  return a + b;
}

console.log(add1("Hello ", "Steve"));
console.log(add1(10, 20));
console.log(add1(10, 50));
console.log("");



//Traccia: Scrivi una funzione che prende due numeri e ritorna la loro somma.
function somma(x:number,y:number): number {
    return x + y;
}
console.log(somma(5,15));
console.log("");



//Traccia: Scrivi una funzione che riceve un numero e stampa se è pari o dispari.
function pariDisp(x:number): string {
    if(x % 2 == 0) {
        return "pari!";
    }
    else {
        return "dispari!";
    }
}
console.log("IL VALORE INSERITO E': " + pariDisp(10));
console.log("");



//Traccia: Scrivi una funzione che prende una stringa e la ritorna in maiuscolo.
function str1(a:string): string {
    return a.toUpperCase();
}
console.log(str1("prova"));
console.log("");



//Primo carattere di una stringa
//Traccia: Scrivi una funzione che ritorna il primo carattere di una stringa.
function str(a:string): string {
    return a[0];
}
console.log(str("prova"));
console.log("");



//Traccia: Scrivi una funzione che ritorna il numero di elementi in un array.
function arr(x:number[]): number {
    return x.length;
}
console.log(arr([10,20,30,40]));
console.log("");



//Somma elementi array
//Traccia: Scrivi una funzione che somma tutti i numeri in un array.
function arr1(y:number[]): number {
    let somma = 0;
    for(let i = 0; i < y.length; i++) {
        somma += y[i];
    }
    return somma;
}
console.log(arr1([10,20,30]));
console.log("");



//Traccia: Scrivi una funzione che ritorna il maggiore tra due numeri.
function valMax(x:number,y:number): number {
    if(x > y) {
        return x;
    }
    else {
        return y;
    }
}
console.log("IL VALORE PIU' GRANDE E': " + valMax(110,20));
console.log("");



//Traccia: Scrivi una funzione che conta quante vocali ci sono in una stringa.
function str2(a:string): string {
    return  a.replace(/[^aeiou]/gi, '').length + " vocali";
}
console.log("NUMERO VOCALI: " + str2("prova stringhe"));
console.log("");
//VERSIONE 2
function str3(a:string): number {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if("aeiouAEIOU".includes(a[i])) {
            count++;
        }
    }
    return count;
}
console.log("LA STRINGA CONTINENE: " + str3("prova stringhe") + " VOCALI!");
console.log("");
//VERSIONE 3
function contaVocali(testo) {
  let count = 0;
  const vocali = "aeiou";
  for (let c of testo.toLowerCase()) {
    if (vocali.includes(c)) {
      count++;
    }
  }
  return count;
}
console.log("VOCALI N°: " + contaVocali("Ciao"));
console.log("");



//Traccia: Scrivi una funzione che controlla se un valore è presente in un array.
function str4(a:number[]): boolean {
    let presente = false;
    for(let i = 0; i < a.length; i++) {
        if(a[i] == 10) {
            presente = true;
        }
    }
    return presente;
}
console.log("L VALORE 10 E' PRESENTE? " +  (str4([20,50,120,60]) ? "SI" : "NO"));
*/




/*
/////// ENUMERATORI //////////

//Crea un enum chiamato Giorno con i giorni della settimana. Stampa tutti i valori usando un ciclo for.
enum Giorno {Lunedì,Martedì,Mercoledì,Giovedì,Venerdì,Sabato,Domenica}
let giorni: Giorno = Giorno.Mercoledì;
console.log(giorni);



//Traccia: Crea un enum Stagione con quattro valori. 
// Usa switch per stampare un messaggio diverso per ogni stagione.
enum Stagione {
  Primavera = "Primavera",
  Estate = "Estate",
  Autunno = "Autunno",
  Inverno = "Inverno",
}
function descriviStagione(st: Stagione): void {
switch (st) {
    case Stagione.Primavera:
        console.log("Ci sono i fiori!");
        break;
    case Stagione.Estate:
        console.log("Fa caldo!");
        break;
    case Stagione.Autunno:
        console.log("Ci sono le figlie secche!");
        break;
    case Stagione.Inverno:
        console.log("Fa freddo!");
        break;
    default:
        break;
    }
}
let st: Stagione = Stagione.Inverno;
descriviStagione(st);
*/


/*
/////////   CUSTOM-TYPE     /////////

//Type alias con più campi
//Traccia: Definisci un tipo Persona con nome e età.
type Persona = {nome: string, età:number};
const mario: Persona = {nome: "Mario", età: 30}
console.log(mario);
console.log("");


//Tipo unione
//Traccia: Crea un tipo Risultato che può essere "success" o "error".
type Risultato = "success" | "error";
function res(x: Risultato): void {
    console.log("Esito: ", x);
}
res("success")
console.log("");

////////////////////////////////////////////////////////////////////
//Array tipizzato
//Traccia: Crea un tipo Studente e un array di studenti.
class Studente {
  nome: string = "";
  cognome: string = "";
  matricola: number | undefined;
  dataDiNascita: string = "";
  luogoDiNascita: string = "";

  constructor(
    nome: string,
    cognome: string,
    matricola: number,
    dataDiNascita: string,
    luogoDiNascita: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.dataDiNascita = dataDiNascita;
    this.luogoDiNascita = luogoDiNascita;
  }
  toString() {
    return JSON.stringify({
      nome: this.nome,
      cognome: this.cognome,
      matricola: this.matricola,
      data_di_nascita: this.dataDiNascita,
      luogo_di_nascita: this.luogoDiNascita
    });
  }
}

let studenti: Studente[] = [];
studenti.forEach((valore) => {
  console.log(valore.toString());
});
studenti.forEach((valore) => {
  console.log(JSON.parse(valore.toString()));
});
console.log("");
/////////////////////////////////////////////////////////////////////



//Tipo funzione
//Traccia: Crea un tipo che rappresenta una funzione somma(a,b).
type SommaFn = (a: number, b: number) => number;
const somma: SommaFn = (x, y) => x + y;
console.log(somma(5, 3));
console.log("");


//Tipo con union e oggetti
//Traccia: Crea un tipo Pagamento che può essere con carta o contanti.
type Carta = { tipo: "carta"; numero: string };
type Contanti = { tipo: "contanti"; importo: number };
type Pagamento = Carta | Contanti;
const p1: Pagamento = { tipo: "carta", numero: "1234-5678" };
const p2: Pagamento = { tipo: "contanti", importo: 50 };
console.log(p1, p2);
console.log("");
*/



/*
///// INTERSECTION-TYPE ///////
type Admin1={
  nome:string;
  grade:string[];
}
type Employ = {
  startDate: Date;
};
type Worker1={
  worker:string;
}
type Lavoratore=Admin1 &Worker1&Employ;
const lavor1:Lavoratore={
  nome:'Luca',
  grade:['Team Leader'],
  worker:'Developer',
  startDate:new Date(),
}
console.log("");



//Traccia: Unisci i tipi Persona e Contatti.






//Traccia: Crea un tipo Studente e uno Indirizzo, poi uniscili.
type Studente2 = {
    nome: string,
    corso: string;
}
type Indirizzo = {
    città: string,
    via: string;
}
function stud() {
    const g: Studente2 & Indirizzo = {
        nome: "mario",
        corso: "archeologia",
        città: "agrigento",
        via: "via roma 1"
    }
    console.log(g);
}
stud();
console.log("");



//Veicolo + Assicurazione
//Traccia: Aggiungi dati di assicurazione a un veicolo.
type Veicolo = {
    targa: string,
    tipo: string
}
type Assicurazione = {
    scadenza: string
    compagnia: string
}
function dati() {
    const d: Veicolo & Assicurazione = {
        targa: "AB 123 CD",
        tipo: "auto",
        scadenza: "15/12/25",
        compagnia: "generali"
    }
    console.log(d);    
}
dati();
console.log("");


//Persona + Lavoro + Hobby
//Traccia: Usa più di due tipi in un’intersezione
type Persona3 = {
    nome: string,
    età: number,
    email: string,
    telefono: number
}
type Lavoro = {
    azienda: string
    ruolo: string
}
type Hobby = {
    sport: string
}
function info() {
    const p: Persona3 & Lavoro & Hobby = {
        nome: "Riccardo",
        età: 39,
        email: "riccardo@casalanguida.it",
        telefono: 3293344333,
        azienda: "Generali",
        ruolo: "IT support",
        sport: "Ciclismo"
    }
    console.log(p);    
}
info();
console.log("");
//VERSIONE 2
type Persona4 = {
  nome: string;
  eta: number;
  email: string;
  telefono: number;
};
type Lavoro2 = {
  azienda: string;
  ruolo: string;
};
type Hobby2 = {
  sport: string;
};
let persona: Persona4 = {
  nome: "Mario",
  eta: 30,
  email: "mario@yopmail.com",
  telefono: 345111111111,
};
let lavoro: Lavoro2 = {
  azienda: "AAA srl",
  ruolo: "Manager",
};
let hobby: Hobby2 = {
  sport: "Basket",
};
type Unione = Persona4 & Lavoro2 & Hobby2;
let unione: Unione = {
  nome: persona.nome,
  eta: persona.eta,
  email: persona.email,
  telefono: persona.telefono,
  azienda: lavoro.azienda,
  ruolo: lavoro.ruolo,
  sport: hobby.sport,
};
console.log(unione);
*/






/*
//////////// GENERICS //////////
function test1<C>(val: C): C {
    return val;
}
let res = test1<number>(10);
let res1 = test1<string>("Hello World");
let res2 = test1<boolean>(true);
console.log(res);
console.log(res1);
console.log(res2);
console.log("");



//Array generico
//Traccia: Crea una funzione che accetta un array generico e ne restituisce la lunghezza.
function arrGen<A>(arrG: A[]): any {
    return arrG.length;
}
let arrG = [10,20,30];
let arrRes = arrGen<number>(arrG);
console.log(arrRes);
console.log("");



//Traccia: Crea un tipo generico Coppia<T, U> che contiene due valori.
type Coppia<T, U> = {nome: T, eta: U};
let coppia: Coppia<string, number> = {
  nome: "Mario",
  eta: 50,
};
console.log(coppia);
console.log("");



//Traccia: Crea una funzione che accetta un array di tipo generico e stampa ogni elemento.
function arrStampa<T>(arr: T[]) : void {
    for(let element of arr) {
        console.log(element);
    }
}
arrStampa([1, 2, 3, 4, 5, 6]);
console.log("");



//Traccia: Crea una funzione che combina due valori generici in una tupla.
function tuplaCombine<T, U>(a: T, b: U) : [T, U] {
    return [a, b];
}
console.log(tuplaCombine("mario", 36));
console.log("");



//Traccia: Crea un tipo generico Coppia<T, U> che contiene due valori.
function coppia1<T, U>(valA: T, valB: U): T {
    return valA;
}
let copp = coppia1<number, number>(10,20);
console.log(copp);
console.log("");


//Traccia: Crea una funzione che accetta un array generico e ne restituisce la lunghezza.
function arrNomi<T>(arr: T[]): any {
    return arr.length;
}
let arrNam = arrNomi<string>(["Mario","Lucia","Riccardo"]);
console.log(arrNam);
console.log("");
//////// DIVERSI MODI DI ASSEGNAZIONE VALRI ARRAY //////////////
function arrGen1<A>(arrG1: A[]): any {
    return arrG.length;
}
let arrG1 = [10,20,30];
let arrRes1 = arrGen1<number>(arrG);
console.log(arrRes1);
console.log("");


//Traccia: Crea una funzione che accetta un array di tipo generico e stampa ogni elemento.
function arrNumb<T>(arr: T[]): any {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrNumb<number>([10,20,30,40,50]);
console.log("");
//////// VERSIONE 2 ////////
function arrStamp<T>(arr: T[]) : void {
    for(let element of arr) {
        console.log(element);
    }
}
arrStamp([1, 2, 3, 4, 5, 6]);
console.log("");



//Generics con più parametri
//Traccia: Crea una funzione che combina due valori generici in una tupla.
function comb<T,U,V>(a:T, b:U, c:V): [T,U,V] {
    return [a,b,c];
}
console.log(comb("Riccardo","Casalanguida",39));
console.log("");



//Mapper generico
//Traccia: Crea una funzione che trasforma un array generico con map.
function mapArray<T, U>(arr: T[], transform: (item: T) => U) : U[] {
    return arr.map(transform);
}
const numeri = [1,2,3,4];
const double = mapArray(numeri, n => n*2);
console.log(double);
*/






/////////////// CLASSI ///////////////////
class BankAccount1 {
    private balance: number
    private firstDeposit: number
    private firstDraw: number
    private secondDeposit: number
    private secondDraw: number

    constructor(balance,firstDeposit,firstDraw,secondDeposit,secondDraw) {

            this.balance = balance
            this.firstDeposit = firstDeposit
            this.firstDraw = firstDraw
            this.secondDeposit = secondDeposit
            this.secondDraw = secondDraw
        }
    public getFirstDeposit(): number {
        return this.balance + this.firstDeposit
    }
    public getFirstDraw(): number {
        return this.getFirstDeposit() - this.firstDraw
    }
    public getSecondDeposit(): number {
        return this.getFirstDraw() + this.secondDeposit
    }
    public getTotalAccont(): number {
        return this.getSecondDeposit() - this.secondDraw
    }
}
let account1 = new BankAccount1(0,300,100,50,30);
console.log(`SALDO ATTUALE:                ${account1.getTotalAccont()}`);
console.log("");




class SonAccount {
    private static balance: number
    private static firstDeposit: number
    private static firstDraw: number
    private static secondDeposit: number
    private static secondDraw: number

    constructor(balance = 0,firstDeposit = 0,firstDraw = 0,secondDeposit = 0,secondDraw = 0) {

            SonAccount.balance = balance  /////// **STATIC** NEL COSTRUTTORE RICHIAMA ATTRIBUTI CON NOME CLASSE (NON CON this.)////
            SonAccount.firstDeposit = firstDeposit
            SonAccount.firstDraw = firstDraw
            SonAccount.secondDeposit = secondDeposit
            SonAccount.secondDraw = secondDraw
        }
    public static getFirstDeposit(): number {
        return SonAccount.balance + SonAccount.firstDeposit
    }
    public static getFirstDraw(): number {
        return this.getFirstDeposit() - SonAccount.firstDraw
    }
    public static getSecondDeposit(): number {
        return this.getFirstDraw() + SonAccount.secondDeposit
    }
    public static getTotalAccont(): number {
        return this.getSecondDeposit() - SonAccount.secondDraw
    }    
}
let accountSon = new SonAccount(0,500,100,200,100);
console.log(`SALDO ATTUALE:                ${SonAccount.getTotalAccont()}`);
console.log("");










/////// ASTRATTE + INTERFACCE ///////////
abstract class Professionista {
    abstract getUtileTasse(): number
}

interface IProfessionista {
    getTassaInps(): number
    getTassaIrpef(): number
}

class LavoratoriAutonomi extends Professionista implements IProfessionista{

    private redditoAnnuoLordo: number
    private coeffRedd: number
    private aliquotaInps: number
    private aluquoraIrpef: number

    constructor(redditoAnnuoLordo = 0,coeffRedd = 0,aliquotaInps = 0,aluquoraIrpef = 0) {
            super()
            this.redditoAnnuoLordo =redditoAnnuoLordo
            this.coeffRedd = coeffRedd
            this.aliquotaInps = aliquotaInps
            this.aluquoraIrpef = aluquoraIrpef
    }
    public getUtileTasse(): number {
        return this.redditoAnnuoLordo * this.coeffRedd / 100
    }
    public getTassaInps(): number {
        return this.getUtileTasse() * this.aliquotaInps / 100
    }
    public getTassaIrpef(): number {
        return this.getUtileTasse() * this.aluquoraIrpef / 100
    }
    public redditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef()) 
    }
}
let reddito = new LavoratoriAutonomi(85000,78,26,15)
console.log(`REDDITO NETTO:       ${reddito.redditoAnnuoNetto()}`);
console.log("");















//tsc && node test **(test.ts)**




