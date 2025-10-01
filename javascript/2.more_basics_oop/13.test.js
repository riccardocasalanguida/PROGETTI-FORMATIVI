/*
let stringa = "Ciao";
console.log(stringa.length);


let str = "hello, world!";
console.log(str.toUpperCase());
let str2 = "HELLO, WORLD!";
console.log(str2.toLowerCase());
*/

/*
let str1 = "Hello ";
let str2 = "World";
console.log(str1.concat(str2));

let str3 = str2.replace("World", "Riccardo");
console.log(str3);
*/

/*
let num = -123;
console.log(Math.abs(num)); 

let num2 = 2;
console.log(Math.pow(num2, 5));

let num3 = 49;
console.log(Math.sqrt(num3));

console.log(Math.round(3.6));

console.log(Math.max(15, 27));

console.log(Math.floor(3.7));

console.log(Math.ceil(3.7));

console.log(Math.min(23, 12));

let n1 = 20;
let n2 = 35;
console.log(Math.abs(n1 - n2));
*/

/*
let data = new Date();
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getDay());

let oggi = new Date();
oggi.setDate(oggi.getDate());
console.log(oggi);

let cinque = new Date();
cinque.setDate(cinque.getDate() + 5);
console.log(cinque);

let dataOld = new Date("December 21, 2012 18:30:00");
console.log(dataOld);
dataOld.setDate(dataOld.getDate() + 7);
console.log(dataOld);
*/

/*
let prod = ["monitor", "mouse", "tastiera"];
console.log(prod);
console.log(prod[1]);
console.log(prod.length);
for (let i = 0; i < prod.length; i++) {
  console.log(prod[i]);
}
*/


/*
let frutta = ["mela", "banana", "pera"];
console.log(frutta);
frutta.push("kiwi");
frutta.push("fragola", "melone");
console.log(frutta);
frutta.pop();
console.log(frutta);
frutta.pop();
console.log(frutta);
frutta.unshift("ananas");
console.log(frutta);
frutta.splice(3, 0, "ciliegia", "albicocca");
console.log(frutta);



//elimina 2 valori a partire dall'indice 2 nell'array
let numeri = [10,10,20,30,30,40,50];
numeri.splice(2,2);
console.log(numeri);


//rimuovo i valori duplicati
let numeri2 = [10,10,20,30,30,40,50];
let set = new Set(numeri2);
console.log(set);

//ciclare array
let numeri3 = [10,10,20,30,30,40,50];
numeri3.forEach(function(item, index) {
  console.log(item + " " + index);
});



let numeri4 = [10,20,30,40,50];
let somma = 0;
numeri4.forEach(function(item) {
  somma = somma + item;
});
console.log(somma/numeri4.length);



let numeri5 = [10,20,30,40,50];
let max = numeri5[0];
for (let i = 0; i < numeri5.length; i++) {
  if (numeri5[i] > max) {
    max = numeri5[i];
  }  
}
console.log("VALORE MASSIMO: " + max);
let min = numeri5[0];
for (let a = 0; a < numeri5.length; a++) {
  if (numeri5[a] < min) {
    min = numeri5[a];
  }
}
  console.log("VALORE MINIMO: " + min);





let numeri6 = [11,20,30,40,50];
let pari = [];
for (let i = 0; i < numeri6.length; i++) {
  if (numeri6[i] % 2 === 0) {
    pari.push(numeri6[i]);
  }
}  
console.log("VALORI PARI: " + pari);





let numeri7 = [10,20,30,40,50];
let presente = false;
for (let i = 0; i < numeri7.length; i++) {
  if (numeri7[i] === 10) {
    presente = true;
  }
}
console.log("IL VALORE 10 E' PRESENTE? " + presente);

let max10 = [];
for (let i = 0; i < numeri7.length; i++) {
  if (numeri7[i] > 10) {
    max10.push(numeri7[i]);
  }
}
console.log("VALORI MAGGIORI DI 10: " + max10);



let numeri9 = [10,20,30,40,50];
let newArr = [];
for (let i = 0; i < numeri9.length; i++) {
  newArr.push(numeri9[i]);  
}
console.log("NUOVO ARRAY: " + newArr);



//Dato un array, calcola la differenza tra il valore massimo e minimo.
let numeri10 = [10,20,30,40,50];
let valMax = numeri10[0];
let valMin = numeri10[0];
for (let i = 0; i < numeri10.length; i++) { 
  if(numeri10[i] > valMax) {
    valMax = numeri10[i];
  }
  if(numeri10[i] < valMin) {
    valMin = numeri10[i];
  } 
}
console.log("DIFFERENZA: " + (valMax - valMin));
*/

/*
//Scrivi un programma che trova la posizione del numero 9 nell’array.
let num = [10,20,9,30,40,50];
let presente = false;
let posiz = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] === 9) {
    presente = true;
  }
    posiz = num[i];
}

console.log("IL VALORE 9 E' PRESENTE ALLA POSIZIONE: " + posiz);
*/


//Stampa solo gli elementi dispari presenti in un array.



/*
//Calcola la somma dei numeri pari e quella dei numeri dispari separatamente.
let numA = [10,20,30,11,33,55];
let sumPari = 0;
let sumDisp = 0;
for(let i = 0; i < numA.length; i++) {
  if(numA[i] % 2 === 0) {
    sumPari += numA[i]; 
  }
  else {
    sumDisp += numA[i]; 
  }
}
console.log("SOMMA PARI: " + sumPari + " SOMMA DISPARI: " + sumDisp);
*/

/*
//Crea una matrice 2x3 e stampa tutti i suoi elementi.
let matrice = [["Riccardo", 39, "Pescara"],["Mario", 35, "Roma"]];
for (let i = 0; i < matrice.length; i++) {
  for (let a = 0; a < matrice[i].length; a++) {
       console.log(matrice[i][a]);
  }   
}



//Somma tutti gli elementi di una matrice 3x3.
let mat = [[1,2,3],
          [4,5,6],
          [7,8,9]]
let somma = 0;
for (let x = 0; x < mat.length; x++) {
  for (let y = 0; y < mat[x].length; y++) {
    somma += mat[x][y];        
  }
}
console.log("LA SOMMA DI TUTTI I VALORI DELLA MATRICE E': " + somma);
//Stampa la seconda riga di una matrice 3x3.
let a = 1;
for (let x = 0; x < mat[a].length; x++) {
    console.log(mat[a][x] + " "); 
}
//Stampa la terza colonna di una matrice 3x3.
let b = 2;
for (let x = 0; x < mat.length; x++) {
    console.log(mat[x][b] + " "); 
}
//Calcola la somma di ogni riga in una matrice 3x3.
for (let x = 0; x < mat.length; x++) {
  let somma = 0;
  for (let y = 0; y < mat[x].length; y++) {
    somma += mat[x][y];        
  }
  console.log("LA SOMMA DELLA RIGA " + x + " E' " + somma);  
}
//Calcola la somma di ogni colonna in una matrice 3x3.
for (let x = 0; x < mat.length; x++) {
  let somma = 0;  
  for (let b = 0; b < mat[x].length; b++) {    
    somma += mat[b][x];
  }
    console.log("LA SOMMA DELLA COLONNA " + x + " E' " + somma); 
}
for (let col = 0; col < mat[0].length; col++) {
  let somma = 0;
  for (let riga = 0; riga < mat.length; riga++) {
    somma += mat[riga][col];
  }
    console.log("(ver.2)LA SOMMA DELLA COLONNA " + col + " E' " + somma);
}




//Trova il valore massimo in una matrice 3x3 e stampa la sua posizione 
// (riga e colonna).
//Trova la riga con la somma più alta e stampa l’indice della riga.
let m = [];
m.push([1,2,3]); //0
m.push([1,1,1]); //1
m.push([7,8,9]); //2

let maxValue = 0;
let indexRigaValue = 0;
let indexColonnaValue = 0;

let rigaSommaMaxIndex = -1;
let rigaSommaMaxValue = 0;

m.forEach(function(e, i) {
    let rigaIesimaIndex = i;
    let sommaRigaIesima = 0;
    e.forEach(function(h, j) {
        if (rigaSommaMaxIndex != rigaIesimaIndex) {
            sommaRigaIesima += h;
        }
        if (h > maxValue) {
            maxValue = h;
            indexRigaValue = i;
            indexColonnaValue = j;
        }
    }); // e = riga
    if (rigaSommaMaxValue < sommaRigaIesima) {
        rigaSommaMaxIndex = rigaIesimaIndex;
        rigaSommaMaxValue = sommaRigaIesima;
    }
}); // h = elemento della riga

console.log("il valore dell'elemento max è ".concat(maxValue));
console.log("la riga dell'elemento max è ".concat(indexRigaValue));
console.log("la colonna dell'elemento max è ".concat(indexColonnaValue));
console.log("***********************");
console.log(rigaSommaMaxIndex);
console.log(rigaSommaMaxValue);        
*/

/*
//FUNZIONI
function dati(nome, cognome) {
  return nome + " " + cognome;
}
console.log(dati("Riccardo","Casalanguida"));

function dati2(nome, cognome) {
  return "Riccardo" + " " + "Casalanguida";
}
console.log(dati2());


//Traccia: Scrivi una funzione che prende due numeri e ritorna la loro somma.
function numeri(numA, numB) {
  return numA + numB;
}
console.log("LA SOMMA DEI NUMERI DELLA FUNZIONE E': "+ numeri(5,10));


//Traccia: Scrivi una funzione che dato un numero ritorna il suo quadrato.
function square(numC) {
  return numC * numC;
}
console.log("IL QUADRATO E' " + square(3));

//Traccia: Scrivi una funzione che riceve un numero e stampa se è pari o dispari.
function pariDis(numD) {
  if (numD % 2 === 0) {
    return "Pari!";
  } else {
    return "Dispari!"
  }
}
console.log("IL NUMERO DATO E': " + pariDis(4));


//Traccia: Scrivi una funzione che prende una stringa e la ritorna in maiuscolo.
function str(strMaiusc) {
  return strMaiusc.toUpperCase();
}
console.log(str("stringa di prova"));


//Traccia: Scrivi una funzione che ritorna il primo carattere di una stringa.
function str2(strFirst) {
  return strFirst.charAt(0);
}
console.log(str2("stringa test"));


//Traccia: Scrivi una funzione che ritorna l’ultimo carattere di una stringa.
function str3(strLast) {
  return strLast[strLast.length - 1];
}
console.log(str3("prova stringa finale"));


//Traccia: Scrivi una funzione che somma tutti i numeri in un array.
//let val = [2,3,4];
function getSommaArray(func) {
    let somma = 0;
    for (let i = 0; i < func.length; i++) {
        somma += func[i];
    }
    return somma;
}
console.log(getSommaArray([2,3,4])); //L'ARRAY SI PUO' INIZIALIZZARE 
                  //PRIMA DELLA FUNZIONE E RICHIAMARLO NEL LOG 
                  //CON IL SUO NOME (in questo caso: val) 


//Traccia: Scrivi una funzione che ritorna il numero di elementi in un array.
function arr(arr1) {
  let numArr = 0;
  for (let i = 0; i < arr1.length; i++) {
        numArr++;
    }
    return numArr;
}
console.log(arr([1,2,3,4,5]));

function arrA(arr2) {
  return arr2.length;
}
console.log(arrA([1,2,3,4,5]));


//Traccia: Scrivi una funzione che somma tutti i numeri in un array (foreach).
function arrB(arr) {
  let somma = 0;
  arr.forEach(element => {
        somma += element;
  });
  return somma;
}
console.log(arrB([1,2,3,4,5]));


//Traccia: Scrivi una funzione che ritorna il maggiore tra due numeri.
function max(a,b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(4,5));


//Traccia: Scrivi una funzione che ritorna la stringa al contrario.
function str(strBase) {
  let strInv = [];
  for (let i = strBase.length - 1; i >= 0; i--) {
    strInv.push(strBase[i]);
  }
  return strInv.join("");
}
console.log(str("HELLO WORLD"));
*/


//Traccia: Scrivi una funzione che calcola il fattoriale di un numero.

//Traccia: Scrivi una funzione che conta quante vocali ci sono in una stringa.

//Traccia: Scrivi una funzione che controlla se un numero è primo.

//Traccia: Scrivi una funzione che stampa la tabellina di un numero fino a 10.

//Traccia: Scrivi una funzione che controlla se un valore è presente in un array.



/*
//OGGETTI JAVASCRIPT
let astuccio = {
    matita: 2,
    gommaPerCancellare: 1,
    temperino: 1,
    colore: "nero",
    penna: 2,
    lista: function() {
        console.log(this.matita + " matita/e " + this.gommaPerCancellare + " gomma/e per cancellare " 
            + this.temperino + ",colore astuccio: " + this.colore + " penna/e " + this.penna);
    }
}
astuccio.evidenziatore = "giallo";
console.log(astuccio.evidenziatore);
astuccio.lista();
console.log("");
console.log(astuccio);



let cellulare = {
  schedaSim: 1,
  batteria: 1,
  memoryCard:1,
  fotocamera: 3,
  cuffie: 1,
  accessori : function(){
    return  this.batteria + this.cuffie + this.schedaSim + this.memoryCard +this.fotocamera
    }
} 
console.log( cellulare);







let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 35,
  residenza: "Milano",
  annoNascita: 1990,
  indirizzo: function() {
    return (this.nome + " " + this.cognome + " " + this.via + " " + this.residenza);
  }
};
persona.via = "Via Roma 1"
console.log(persona);
console.log(persona.indirizzo);
console.log(persona.annoNascita);
*/



/*
//ECCEZIONI
function dividi(a, b){
    try{
        if(b === 0){
            console.log("Divisione per 0 non consentita");
        }
        return a / b;
    } catch(error) {
        return "Errore " + error;
    }
}
console.log(dividi(2,0));
*/

/*
try {
  let arr = [1,2,3,4,5,6]
  let val = arr[6].toString;///////
} catch (error) {
  console.log("ERRORE: " + error.message);  
}


try {
    throw new Error;
} catch(e) {
    console.error(e);
}
throw new Error;
*/
/*
//****************nullpointer exception********************

let stringa = "prova";
//let stringa = null;
//let stringa = undefined;

try {
    if (stringa == null && stringa == undefined) {
        throw new Error("nullpointer exception");
    }
    console.log(stringa);
} catch (error) {
    console.log(error);
} finally {
    console.log("eccezione gestita");
}
*/


/*
///////////// OOP //////////////
class Studente {

  nome = ""
  cognome = ""
  età = 0

  constructor(nome,cognome,età) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
  } 
  getNome() {
    return this.nome;
  }
  getCognome() {
    return this.cognome;
  }
  getEtà() {
    return this.età;
  }
}

let scuola = new Studente("Mario", "Rossi", 25);
let studente = scuola.getNome();
let cognome = scuola.getCognome();
let età = scuola.getEtà();
console.log(studente);
console.log(cognome);
console.log(età);
console.log(scuola);
*/

/*
class BankAccount {
  balance = 0
  firstDeposit = 0
  firstDraw = 0
  secondDeposit = 0
  secondDraw = 0
  canoneAnnuo = 0

  constructor(balance,firstDeposit,firstDraw,secondDeposit,secondDraw,canoneAnnuo) {
    this.balance = balance;
    this.firstDeposit = firstDeposit;
    this.firstDraw = firstDraw;
    this.secondDeposit = secondDeposit;
    this.secondDraw = secondDraw;
    this.canoneAnnuo = canoneAnnuo;
  }
  getFirstDeposit() {
    return this.balance + this.firstDeposit;
  }
  getFirstDraw() {
    return this.getFirstDeposit() - this.firstDraw;
  }
  getSecondDeposit() {
    return this.getFirstDraw() + this.secondDeposit;
  }
  getSecondDraw() {
    return this.getSecondDeposit() - this.secondDraw;
  }
  getCanoneAnnuo() {
    return (this.getSecondDraw() * this.canoneAnnuo)/ 100;
  }
  getTotalAccount() {
    return this.getSecondDraw() - this.getCanoneAnnuo();
  }
}
let banca = new BankAccount(1000,100,100,80,30,5);
//let account = banca.getTotalAccount();
console.log(banca.getTotalAccount());
//console.log(account);
*/

/*
//EREDITARIETA'
class SonAccount {
  balance = 0
  firstDeposit = 0
  firstDraw = 0
  secondDeposit = 0
  secondDraw = 0

  constructor(balance,firstDeposit,firstDraw,secondDeposit,secondDraw) {
    this.balance = balance;
    this.firstDeposit = firstDeposit;
    this.firstDraw = firstDraw;
    this.secondDeposit = secondDeposit;
    this.secondDraw = secondDraw;
  } 
  getFirstDeposit() {
    return this.balance + this.firstDeposit;
  }
  getFirstDraw() {
    return this.getFirstDeposit() - this.firstDraw;
  }
  getSecondDeposit() {
    return this.getFirstDraw() + this.secondDeposit;
  }
  getTotalAccount() {
    return this.getSecondDeposit() - this.secondDraw;
  }
}
let account = new SonAccount(0,500,200,100,50);
console.log(account.getTotalAccount());





class MotherAccount extends SonAccount {
  canoneAnnuo = 0
  
  constructor(balance,firstDeposit,firstDraw,secondDeposit,secondDraw,canoneAnnuo) {
    
    super(balance,firstDeposit,firstDraw,secondDeposit,secondDraw);

    this.canoneAnnuo = canoneAnnuo;
  } 
  getFirstDeposit() {
    return this.balance + this.firstDeposit;
  }
  getFirstDraw() {
    return this.getFirstDeposit() - this.firstDraw;
  }
  getSecondDeposit() {
    return this.getFirstDraw() + this.secondDeposit;
  }
  getSecondDraw() {
    return this.getSecondDeposit() - this.secondDraw;
  }
  getCanoneAnnuo() {
    return (this.getSecondDraw() * this.canoneAnnuo) / 100;
  }
  getTotalAccount() {
    return this.getSecondDeposit() - this.getCanoneAnnuo();
  }
}
let mother = new MotherAccount(0,600,200,100,300,5);
console.log(mother.getTotalAccount());





class BankAccount {

  getFirstDeposit(balance = 0, firstDeposit = 500) {
    return balance + firstDeposit;
  }
  getFirstDraw(firstDraw = 200) {
    return this.getFirstDeposit() - firstDraw;
  }
  getSecondDeposit(secondDeposit = 100) {
    return this.getFirstDraw() + secondDeposit;
  }
  getTotalAccount(secondDraw = 50) {
    return this.getSecondDeposit() - secondDraw;
  }
}
let banca = new BankAccount();
console.log(account.getTotalAccount());
*/













/*
class Professionista {
  redditoAnnuoLordo = 0
  coeffReddito = 0
  aliquotaInps = 0
  aliquotaIrpef = 0

  constructor(redditoAnnuoLordo,coeffReddito,aliquotaInps,aliquotaIrpef) {
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.coeffReddito = coeffReddito;
    this.aliquotaInps = aliquotaInps;
    this.aliquotaIrpef = aliquotaIrpef;
  }
  getUtileTasse() {
    return (this.redditoAnnuoLordo * this.coeffReddito) / 100;
  }
  getInps() {
    return (this.getUtileTasse() * this.aliquotaInps) / 100;
  }
  getIrpef() {
    return (this.getUtileTasse() * this.aliquotaIrpef) / 100;
  }
  getRedditoNetto() {
    return (this.redditoAnnuoLordo - (this.getInps() + this.getIrpef()));
  } 
}
let netto = new Professionista(86000,78,26,15)
console.log(netto.getRedditoNetto());
*/








/*
class Psicologa {
  redditoAnnuoLordo = 0
  coeffReddito = 0
  aliquotaInps = 0
  aliquotaIrpef = 0

  constructor(redditoAnnuoLordo,coeffReddito,aliquotaInps,aliquotaIrpef) {
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.coeffReddito = coeffReddito;
    this.aliquotaInps = aliquotaInps;
    this.aliquotaIrpef = aliquotaIrpef;
  }
  getUtileTasse() {
    return (this.redditoAnnuoLordo * this.coeffReddito) / 100;
  }
  getInps() {
    return (this.getUtileTasse() * this.aliquotaInps) / 100;
  }
  getIrpef() {
    return (this.getUtileTasse() * this.aliquotaIrpef) / 100;
  }
  getRedditoNetto() {
    return (this.redditoAnnuoLordo - (this.getInps() + this.getIrpef()));
  } 
}
let nettoPsicologa = new Psicologa(50000,78,26,15);
console.log("REDDITO ANNUO NETTO PSICOLOGA: " + nettoPsicologa.getRedditoNetto());






class Artigiano extends Psicologa {
  importoEccedente = 0;
  costoFissoInps = 0;

  constructor(redditoAnnuoLordo,coeffReddito,aliquotaInps,aliquotaIrpef,importoEccedente,costoFissoInps) {
    super(redditoAnnuoLordo, coeffReddito, aliquotaInps, aliquotaIrpef);
    this.importoEccedente = importoEccedente;
    this.costoFissoInps = costoFissoInps;
  }

  getInps() {
    return (this.getUtileTasse() * this.aliquotaInps + this.getUtileTasse() * this.aliquotaIrpef);
  }

  getUtileEccedente() {
    return (
      ((this.redditoAnnuoLordo - this.importoEccedente) * this.coeffReddito) / 100
    );
  }

  getInps() {
    return (this.getUtileEccedente() * this.aliquotaInps) / 100;
  }

  getRedditoNetto() {
    console.log("annuo lordo Artigiano: " + this.redditoAnnuoLordo);
    console.log("ral Artigiano: " + this.coeffReddito);
    return (this.redditoAnnuoLordo - (this.getIrpef() + this.getInps() + this.costoFissoInps));
  }
}
let artigiano = new Artigiano(90000, 67, 24, 15, 15000, 3500);
console.log("REDDITO ANNUO NETTO ARTIGIANO: " + artigiano.getRedditoNetto());



class Avvocato extends Psicologa {
  
  constructor(redditoAnnuoLordo,coeffReddito,aliquotaInps,aliquotaIrpef) {
    super(redditoAnnuoLordo, coeffReddito, aliquotaInps, aliquotaIrpef);
  }
  getUtileTasse() {
    return (this.redditoAnnuoLordo * this.coeffReddito) / 100;
  }
  getInps() {
    return (this.getUtileTasse() * this.aliquotaInps) / 100;
  }
  getIrpef() {
    return (this.getUtileTasse() * this.aliquotaIrpef) / 100;
  }
  getRedditoNetto() {
    return (this.redditoAnnuoLordo - (this.getInps() + this.getIrpef()));
  } 
}
let nettoAvvocato = new Avvocato(80000,78,26,15);
console.log("REDDITO ANNUO NETTO AVVOCATO: " + nettoAvvocato.getRedditoNetto());




class Elettricista extends Artigiano{           ////////////DA RIVEDERE (SISTEMARE PRIMA CLASSE ARTIGIANO)//////
  
  constructor(redditoAnnuoLordo,coeffReddito,aliquotaInps,aliquotaIrpef,importoEccedente,costoFissoInps) {
    super(redditoAnnuoLordo, coeffReddito, aliquotaInps, aliquotaIrpef,importoEccedente,costoFissoInps);
  }
  getInpsIrpef(aliquotaInps = 24, aliquotaIrpef = 15) {
    return (this.getUtileTasse() * aliquotaInps + this.getUtileTasse() * aliquotaIrpef); 
  }

  getUtileEccedente(redditoAnnuoLordo = 70000,importoEccedente = 15000,coeffReddito = 67) {
    return (((redditoAnnuoLordo - importoEccedente) * coeffReddito) / 100);
  }

  getInps(aliquotaInps = 24) {
    return (this.getUtileEccedente() * aliquotaInps) / 100;
  }

  getRedditoNetto(redditoAnnuoLordo = 70000,costoFissoInps = 3500) {
    return (redditoAnnuoLordo - (this.getIrpef() + this.getInps() + costoFissoInps));
  }
}
let nettoElettricista = new Elettricista();
console.log("REDDITO ANNUO NETTO ELETTRICISTA: " + nettoElettricista.getRedditoNetto());
*/







/*
/*Scrivere la classe Motorino che ha i seguenti attributi 
colore: una stringa indicante il colore del motorino, 
velocità: un numero con la virgola indicante la velocità in Km/h che possiede il motorino, 
tipo: una stringa indicante la marca e il modello del motorino es. “Piaggio scarabeo”, 
l’attributo antifurto un boolean che indica se è stato inserito l’antifurto (ha un valore iniziale pari a false). 
Il costruttore ha come parametri una stringa per il colore, 
una stringa per il tipo, 
un numero con la virgola per la velocità 
ed assegna opportunamente i valori dei parametri agli attributi. 
Scrivere il metodo getVelocità che restituisce la velocità del motorino, 
scrivere inoltre il metodo accelera che ha come parametro un numero con la virgola indicante i Km/h 
che si vogliono aggiungere alla velocità, 
il metodo verifica il valore dell’attributo antifurto se è false 
aggiunge il valore del parametro all’attributo velocità, altrimenti non fa nulla. 
Scrivere il metodo inserisciAntifurto che assegna un valore true all’attributo antifurto.*/
/*
class Motorino{
    colore = "Nero";
    velocità = 50.4;
    tipo = "Piaggio Scarabeo";
    antifurto = false;

    constructor(colore, tipo, velocità, antifurto){
        this.colore = colore;
        this.tipo = tipo;
        this.velocità = velocità;
        this.antifurto = antifurto;
    }
    getVelocità() {
        return this.velocità;
    }
    accelera(kmAggiunti) {
        if(!this.antifurto){
            this.velocità += kmAggiunti;
        } else {
            console.log("Non è consentito accelerare");
        }
    }
    inserisciAntifurto() {
        this.antifurto = true;
    }
}
let motorino = new Motorino("Nero", "Piaggio Scarabeo", 50.4, false);
console.log("Velocità iniziale: ", motorino.getVelocità());
motorino.accelera(20.4);
console.log("Velocità raggiunta con l'accelerazione: " + motorino.getVelocità());
motorino.inserisciAntifurto();
motorino.accelera(20.4);
console.log("Inserito l'antifurto, il motorino non accelera, la velocità è: " + motorino.getVelocità());

/*•Scrivere la classe MotorinoImmatricolato sottoclasse della classe Motorino che ha in più 2 attributi: 
maxVelocità un numero con la virgola (coerente con la scelta fatta per l’attributo velocità) 
indicante la velocità massima in Km/h che il motorino può raggiungere; 
targa una stringa indicante la targa del motorino 
(ad entrambi gli attributi viene assegnato un valore nel costruttore). 
Aggiungere il metodo getMax il metodo stampa il valore dell’attributo maxVelocità. 
Ridefinire il metodo accelera in modo che prima di modificare la velocità 
effettui un controllo sulla velocità massima raggiunta. 
Il metodo definisce una variabile s (dello stesso tipo di velocità) 
ed assegna ad s la somma tra il valore del parametro del metodo ed il valore dell’attributo velocità; 
se s è minore del valore dell’attributo maxVelocità assegna il valore di s all’attributo velocità 
altrimenti assegna all’attributo velocità il valore dell’attributo maxVelocità.*/
/*
class MotorinoImmatricolato extends Motorino{
  maxVelocità = 100;
  targa = "AD2334AD";

  constructor(colore, tipo, velocità, antifurto, maxVelocità, targa){
    super(colore, tipo, velocità, antifurto);
      this.maxVelocità = maxVelocità;
      this.targa = targa;
    }
    getMax(){
    return this.maxVelocità;
    }
    accelera(kmAggiunti){
      if(!this.antifurto){
        let s = this.velocità + kmAggiunti;
            if(s < this.maxVelocità){
              this.maxVelocità = s;
            } else {
              this.velocità = this.maxVelocità;
            }
        } else {
        console.log("Impossibile accelerare, l'antifurto è stato inserito. ");
        }
      }
    }
    let motorino1 = new MotorinoImmatricolato("Nero", "Piaggio Scarabeo", 50.4, false, 100, "AD2334AD");
    console.log("Velocità attuale: " + motorino1.getVelocità());
    console.log("Velocità massima consentita: " + motorino1.getMax());
    motorino1.accelera(51);
    console.log("Velocità dopo la prima accelerazione: " + motorino1.getVelocità());
    motorino1.inserisciAntifurto();
    motorino1.accelera(10);
    console.log("Velocità dopo la seconda accelerazione: " + motorino1.getVelocità());
*/




/*
//Scrivere la classe Dipendente che ha i seguenti attributi 
// matricola: una stringa indicante il numero di matricola del dipendente, 
// stipendio: un numero con la virgola indicante lo stipendio base che possiede il dipendente, 
// straordinario: un numero con la virgola indicante l’importo dovuto 
// per ciascuna ora di straordinario effettuata dal dipendente.
// Il costruttore ha come parametri una stringa per la matricola, 
// un numero con la virgola per lo stipendio 
// ed un numero con la virgola per lo straordinario 
// ed assegna opportunamente i valori dei parametri agli attributi.
// Scrivere il metodo getStipendio che restituisce il valore dell’attributo stipendio, 
// scrivere inoltre il metodo paga che ha come parametro 
// un numero intero indicante il numero di ore di straordinario effettuate dal dipendente, 
// il metodo restituisce il valore ottenuto sommando all’attributo stipendio 
// il risultato del prodotto tra il parametro del metodo e l’attributo straordinario. 
// Scrivere il metodo stampa che stampa il valore degli attributi della classe

class Dipendente {
  matricola = ""
  stipendio = 0
  straordinario = 0
  constructor(matricola,stipendio,straordinario) {
    this.matricola = matricola;
    this.stipendio = stipendio;
    this.straordinario = straordinario;
  }
  getStipendio() {
    return this.stipendio;
  }
  getPaga(oreExtra = 10) {
    return (this.getStipendio() + (oreExtra * this.straordinario));
  }
}
let dipendente = new Dipendente("DP00155",1500.50,10.5);
console.log("STIPENDIO BASE: " + dipendente.getStipendio());
console.log("STIPENDIO NETTO DIPENDENTE: " + dipendente.matricola + " = €" + dipendente.getPaga());

//Scrivere la sottoclasse DipendenteA della classe Dipendente che ha in più l’attributo 
// malattia: un numero intero indicante i giorni di malattia presi che viene inizializzato a zero. 
// Aggiungere il metodo prendiMalattia che ha come parametro un numero intero indicante i giorni di malattia presi, 
// il metodo modifica il valore dell’attributo malattia aggiungendogli il valore del parametro. 
// Ridefinire il metodo paga in modo che prima definisce una variabile p 
// a cui assegna il valore ottenuto richiamando il metodo paga della superclasse, 
// poi se l’attributo malattia è uguale a zero il metodo restituisce il valore di p 
// altrimenti restituisce il valore ottenuto sottraendo a p il valore del prodotto tra malattia e 15,0. 
// Definire un metodo stampaMalattia che stampa il valore dell’attributo malattia

class DipendenteA extends Dipendente {
  malattia = 0
  constructor(matricola,stipendio,straordinario,malattia) {
    super(matricola,stipendio,straordinario) 
    this.malattia = malattia;
  }
  getPrendiMalattia(giorniPresi = 5)  {
    return this.malattia += giorniPresi;    
  }
  getPagaEffettiva(p = this.getPaga()) {
    if (this.malattia === 0) {
      return p;
    }
    else {
      return (p - (this.malattia * 15.0));
    }
  }
  getStampaMalattia() {
    return this.getPrendiMalattia();
  }
}
let dipendenteA = new DipendenteA("DP00155",1500.50,10.5,0);
console.log("GIORNI DI MALATTIA: " + dipendenteA.getStampaMalattia());
console.log("STIPENDIO EFFETTIVO CON STRAORDINARI E MALATTIE: €" + dipendenteA.getPagaEffettiva() + " DIPENDENTE: " + dipendenteA.matricola);
*/



//Scrivere la classe TipoCapoAbigliamento che ha i seguenti attributi 
// marca:una stringa indicante la marca, 
// modello: una stringa indicante il modello, 
// costo:un numero con la virgola indicante il costo in euro. 
// Il costruttore ha come parametri una stringa per la marca, 
// una stringa per il modello, 
// un numero con la virgola per il costo ed assegna opportunamente 
// i valori dei parametri agli attributi. 
// Scrivere il metodo getCosto che stampa il valore dell’attributo costo. 
// Scrivere inoltre il metodo applicaSconto che ha come il parametro 
// un numero con la virgola indicante la percentuale di sconto che si vuole applicare, 
// il metodo restituisce il costo del capo di abbigliamento scontato 
// ossia il risultato della sottrazione tra costo e costo moltiplicato il valore del parametro 
// diviso 100. 
// Scrivere il metodo modificaCosto che ha come parametro un numero con la virgola 
// (dello stesso tipo di costo) indicante il nuovo costo 
// ed assegna all’attributo costo il valore del parametro.
/*
class TipoCapoAbigliamento {
  marca = ""
  modello = ""
  costo = 0
  
  constructor(marca,modello,costo) {
    this.marca = marca;
    this.modello = modello;
    this.costo = costo;
  }
  getCosto() {
    return this.costo;
  }
  getApplicaSconto(valSconto = 10) {
    return (this.costo - ((this.costo * valSconto) / 100));
  }
  getModificaCosto(nuovoCosto = 25.50) {
    return this.costo = nuovoCosto;
  }
}
let capo = new TipoCapoAbigliamento("Adidas","T-Shirt",35.50);
console.log("PREZZO CAPO: €" + capo.getCosto());
console.log("PREZZO CAPO SCONTATO: €" + capo.getApplicaSconto());
console.log("NUOVO PREZZO CAPO: €" + capo.getModificaCosto());

//Scrivere la classe CapoAbbigliamento sottoclasse della classe TipoCapoAbbigliamento 
// che ha in più 3 attributi: taglia un numero intero che indica la taglia; 
// quantitàAcquistata un numero intero indicante il numero di pezzi acquistati, 
// quantitàDisponibile un numero intero indicante il numero di pezzi disponibili 
// (agli attributi viene assegnato un valore del costruttore). 
// Scrivere il metodo venduto avente come parametro 
// un numero intero indicante il numero di capi venduti, 
// il metodo se quantitàDisponibile è maggiore del risultato della sottrazione 
// tra quantitàDisponibile ed il parametro, 
// modifica il valore dell’attributo quantitàDisponibile sottraendogli il valore del parametro. 
// Scrivere il metodo getDettagli che stampa tutti gli attributi della classe.

class CapoAbbigliamento extends TipoCapoAbigliamento {
  taglia = 0
  quantitàAcquistata = 0
  quantitàDisponibie = 0
  constructor(marca,modello,costo,taglia,quantitàAcquistata,quantitàDisponibie) {
    super(marca,modello,costo) 
    this.taglia = taglia;
    this.quantitàAcquistata = quantitàAcquistata;
    this.quantitàDisponibie = quantitàDisponibie;
  }
  getVenduto(capiVenduti = 5) {
    
  }



}

*/

