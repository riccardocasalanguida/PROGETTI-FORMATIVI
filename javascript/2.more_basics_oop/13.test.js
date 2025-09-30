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











