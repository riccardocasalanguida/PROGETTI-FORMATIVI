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
const mario = { nome: "Mario", età: 30 };
console.log(mario);
console.log("");
function res(x) {
    console.log("Esito: ", x);
}
res("success");
console.log("");
////////////////////////////////////////////////////////////////////
//Array tipizzato
//Traccia: Crea un tipo Studente e un array di studenti.
class Studente {
    constructor(nome, cognome, matricola, dataDiNascita, luogoDiNascita) {
        this.nome = "";
        this.cognome = "";
        this.dataDiNascita = "";
        this.luogoDiNascita = "";
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
let studenti = [];
studenti.forEach((valore) => {
    console.log(valore.toString());
});
studenti.forEach((valore) => {
    console.log(JSON.parse(valore.toString()));
});
console.log("");
const somma = (x, y) => x + y;
console.log(somma(5, 3));
console.log("");
const p1 = { tipo: "carta", numero: "1234-5678" };
const p2 = { tipo: "contanti", importo: 50 };
console.log(p1, p2);
console.log("");
const lavor1 = {
    nome: 'Luca',
    grade: ['Team Leader'],
    worker: 'Developer',
    startDate: new Date(),
};
console.log("");
function stud() {
    const g = {
        nome: "mario",
        corso: "archeologia",
        città: "agrigento",
        via: "via roma 1"
    };
    console.log(g);
}
stud();
console.log("");
function dati() {
    const d = {
        targa: "AB 123 CD",
        tipo: "auto",
        scadenza: "15/12/25",
        compagnia: "generali"
    };
    console.log(d);
}
dati();
console.log("");
function info() {
    const p = {
        nome: "Riccardo",
        età: 39,
        email: "riccardo@casalanguida.it",
        telefono: 3293344333,
        azienda: "Generali",
        ruolo: "IT support",
        sport: "Ciclismo"
    };
    console.log(p);
}
info();
console.log("");
let persona = {
    nome: "Mario",
    eta: 30,
    email: "mario@yopmail.com",
    telefono: 345111111111,
};
let lavoro = {
    azienda: "AAA srl",
    ruolo: "Manager",
};
let hobby = {
    sport: "Basket",
};
let unione = {
    nome: persona.nome,
    eta: persona.eta,
    email: persona.email,
    telefono: persona.telefono,
    azienda: lavoro.azienda,
    ruolo: lavoro.ruolo,
    sport: hobby.sport,
};
console.log(unione);
//{id: number; nome: string; età: number} = {id: 1, nome: "Riccardo", età: 39};
//let arr1: number[] = [5,15,10,20,10,25];
//tsc && node test
//# sourceMappingURL=test.js.map