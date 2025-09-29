/*let nome = "Riccardo";
let cognome = "Casalnguida";
var eta = 39;
console.log(nome + "\n" + cognome + "\n" + eta);

const a = 2025;
console.log(a);


let numA = -3;
if (numA > 0) {
    console.log(numA + " è positivo!")
} else {
    console.log(numA + " è negativo!")
}


let numB = 5;
if (numB % 2 == 0) {
    console.log(numB + " è pari!")
} else {
    console.log(numB + " è dispari!")
}

//Controlla se un utente è maggiorenne (>=18 anni).
let eta2 = 16;
if (eta2 >= 18) {
    console.log("L'Utente è maggiorenne")
} else {
    console.log("Utente Minorenne")
}

//Dato un numero, verifica se è multiplo di 5.
let numC = 11;
if (numC % 5 == 0) {
    console.log(numC + " è multiplo di 5")
} else {
    console.log(numC + " non è multiplo di 5")    
}

//Dato un carattere, controlla se è una vocale o una consonante.
let lettera = "e";
if (lettera == "a" || lettera == "e" || lettera == "i" || lettera == "o" || lettera == "u") {
    console.log("'" + lettera + "' è una vocale!")
} else {
    console.log("'" + lettera + "' è una consonante!")
}



//Controlla se un numero è compreso tra 10 e 100.
let numD = 180;
if (numD >= 10 && numD <= 100) {
    console.log(numD + " è compreso tra 10 e 100!")
} else {
    console.log(numD + " non è compreso tra 10 e 100!")
}

//Dato il voto di uno studente, stampa "promosso" se >= 6, altrimenti "bocciato".
let voto = 5;
if (voto >= 6) {
    console.log("STUDENTE PROMOSSO")
} else {
    console.log("STUDENTE BOCCIATO")
}

//Verifica se due numeri sono uguali.
let num1 = 6;
let num2 = 5;
if (num1 == num2) {
    console.log("I NUMERI SONO UGUALI")
} else {
    console.log("I NUMERI SONO DIVERSI")
}
//Stabilisci il maggiore tra due numeri interi.
if (num1 > num2) {
    console.log(num1 + " è maggiore di " + num2)
} else {
    console.log(num2 + " è maggiore di " + num1)
}

//Verifica se una stringa è vuota.
let città = "";
if (città.length == 0) {
    console.log("STRINGA VUOTA")
} else {
    console.log("STRINGA PIENA: " + città)
}


//Scrivi un programma che stampa i numeri da 1 a 10 usando un ciclo for.

for(i = 1; i <= 10; i++)
    console.log(i);


//Scrivi un programma che calcola la somma dei numeri da 1 a 100 usando un ciclo for.

let somma = 0;
for(i = 1; i <= 100; i++) {
    somma = somma + i;
}
console.log(somma);


//Scrivi un programma che stampa la tabellina del 7 (da 1×7 a 10×7).
let tab = 7;
for (let i = 0; i <= 10; i++) {
    console.log(tab + " x " + i + " = " + (tab * i))
}
   
    
//Scrivi un programma che stampa i numeri pari da 2 a 20.
let x = 2;
for (x = 2; x <= 20; x = x + 2) {
    console.log(x);
} 


//Stampa il quadrato di ogni numero da 1 a 10 
let num;
for (num = 1; num <= 10; num++) {
    console.log(num + " ^2= " + num * num)
}


//Calcola e stampa la somma dei primi n numeri dispari (es. n = 5 → 1 + 3 + 5 + 7 + 9 = 25).
let n = 5;
let somma = 0;
let numero = 1;
for (i = 1; i <= n; i++) {
  somma += numero;
  numero += 2;
}
console.log("Somma primi " + n + " numeri dispari " + somma);



//Dato base = 2 ed esponente = 5, calcola 2 elevato a 5





//Scrivi un programma che stampa tutti i numeri primi da 2 a 100 usando solo for.
for(let num = 2; num <= 100; num++) {
    let primo = true;
    for(let i = 2; i <= num/2; i++) {
        if(num % i == 0) {
            primo = false;
            break;
        }
    }
    if(primo) {
        console.log(num + "")
    }
}
*/
/*
//Scrivi un programma che stampa i numeri da 1 a 10 usando un ciclo while.
let numero = 1;
while (numero <= 10) {
    console.log(numero)
    numero++;
}

/*
//Scrivi un programma che calcola la somma dei numeri da 1 a 100 usando while.
let num = 1;
let somma = 0;
while(num <= 100) {
    somma = somma + num;
    num++;   
}
console.log(somma);


//Scrivi un programma che stampa tutti i numeri pari da 2 a 20 usando while.
let int = 1
while(int <= 20) {
    if(int % 2 == 0)
    console.log(int)
}
int++;
*/

/*
//Scrivi un programma che calcola il fattoriale di 5 usando while.
let num=  5;
let fatt = 1;
let i = num;

while(i >= 1) {
    fatt = fatt * i;
    i--;   
} 
console.log("Il fattoriale di " + num + " è " + fatt);
*/





//Stampa la tabellina del 4 da 1×4 a 10×4 usando while.
/*let i = 1;

while(i <= 10){
    console.log(i + " x 4 = " + i*4);
    i++;
}
*/




//Scrivi un programma che calcola quante cifre ha un numero intero positivo 
//(es. numero = 3456 ha 4 cifre)
/*
let numeroB = 3456;
let count = 0;

while(numeroB > 0){
    numeroB = Math.floor(numeroB/10);
    count++;
}

console.log("Il numero: " + numeroB + " ha " + count + " cifre.");
*/




/*      ///////////////////////////////////////////////
//Scrivi un programma che calcola la somma delle cifre di un numero intero positivo.
let num = 123;
let somma = 0;
while(num > 0) {
    num = Math.
}
*/     //////////////////////////////////////////////



/*
//Scrivi un programma che inverte un numero intero positivo. Esempio: 1234 → 4321
let numero = 1234;
let invertito = 0;
while (numero > 0) {
  let cifra = numero % 10;
  invertito = invertito * 10 + cifra;
  numero = parseInt(numero / 10);
}
console.log(invertito);
*/




/*
//Scrivi un programma che stampa tutti i divisori di un numero intero positivo.
//Esempio: n = 12 → 1 2 3 4 6 12
let num = 12;
let count = 0;
while(count <= num) {
    if(num % count == 0) {
        console.log(count);
    }
    count++;
}
*/

/*
//Scrivi un programma che verifica se 
//un numero intero maggiore di 1 è primo (divisibile solo per 1 e sé stesso).
let num = 25;
let count = 2;
let primo = true;
while(count <= num/2) {
    if(num % count == 0) {
        primo = false;
        break;
    }
    count++;
}
if (primo) {
    console.log(num + " è primo!")
} else {
    console.log(num + " non è primo!")
}                   //////NON FUNZIONA/////
*/
/*
let num = 11;
let count = num;
let primo = true;
while (count > 2) {
  count--;
  if (num % count == 0) {
    primo = false;
    break;
  }
}
if (primo) {
  console.log(num + " è primo.");
} else {
  console.log(num + " non è primo.");
}
*/


/*
//Scrivi un programma che stampa i numeri da 1 a 10 usando do-while.
let i = 1;
do {
    console.log(i);
    i++;
}
while(i<=10);
*/



/*
//Scrivi un programma che somma i numeri da 1 a 100 usando do-while.
let i = 1;
let somma = 0;
do {    
    somma = somma + i;
    i++;
}
while(i <= 100);
console.log(somma);
*/


/*
//Scrivi un programma che stampa la tabellina del 5 da 1×5 a 10×5.
let i = 1;
let tab = 5;
let res = 0;
do{
    res = tab * i;
    console.log(tab + " x " + i + " = " + res)
    i++;
}
while(i <= 10)
*/


/*
//Scrivi un programma che stampa i numeri pari da 2 a 20 usando do-while.
let i = 2;
do {
    if(i % 2 === 0) {
    console.log(i);
    }
    i++;
}
while(i<=20);
*/


//Scrivi un programma che conta quante cifre ha 
// un numero intero positivo, ad esempio n = 12345 ha 5 cifre.


//Scrivi un programma che somma tutte le cifre di un numero intero positivo.
//Esempio: 456 → 4 + 5 + 6 = 15.


/*
//Usa uno switch per stampare il giorno della settimana dato un numero da 1 a 7.
let day = 5;
switch (day) {
    case 1:
        console.log("Lunedì")
        break;
    case 2:
        console.log("Martedì")
        break;
    case 3:
        console.log("Mercoledì")
        break;
    case 4:
        console.log("Giovedì")
        break;
    case 5:
        console.log("Venerdì")
        break;
    case 6:
        console.log("Sabato")
        break;
    case 7:
        console.log("Domenica")
        break;
    default:
        break;
}
*/


/*
//Simula un menu di un ristorante (switch per scegliere tra 3 piatti).
let menu = 3;
    switch(menu) {
        case 1:
            console.log("Pasta")
            break;
        case 2:
            console.log("Carne")
            break;
        case 3:
            console.log("Pesce")
            break;
        default:
        break;            
    }
*/


/*
//Simula una calcolatrice base con switch (+, -, *, /).
let numA = 5;
let numB = 3;
let calc = 3;
switch(calc) {
    case 1:
        console.log(numA + numB)
        break;
    case 2:
        console.log(numA - numB)
        break;
    case 3:
        console.log(numA * numB)
        break; 
    case 4:
        console.log(numA / numB)
        break;
    default:
        break;       
}
*/

/*
//Dato un codice prodotto, usa uno switch per mostrare nome e prezzo.
let cod = "A003";
    switch(cod) {
        case "A001":
            console.log("Tastiera €70")
            break;
        case "A002":
            console.log("Mouse €40")
            break;
        case "A003":
            console.log("Monitor € 150");
            break;
        default:
            break;    
            
}
*/


/*
//Scrivi un programma che usa if per verificare l'età, 
// e switch per decidere il tipo di biglietto (es. junior, adulti, senior).
let eta = 15;
let biglietto;
if (eta <= 18) {
    biglietto = "junior";    
} else if (eta <= 50) {
    biglietto = "adulto";
} else {
    biglietto = "senior";
}

switch(biglietto) {
    case "junior":
        console.log("Biglietto junior: €5.99");
        break;
    case "adulto":
        console.log("Biglietto adulto: €10.50");
        break;
    case "senior":
        console.log("Biglietto senior: €7.99");
    default:
        console.log("Biglietto non valido");
}


//Usa uno switch per stampare il nome del mese e con if stampa se ha 31 o 30 giorni.
let mese = 7;
switch (mese) {
    case 4: case 6: case 9: case 11:
        console.log("Il mese ha 30 giorni!");
        break;
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("Il mese ha 31 giorni!");
        break;
    default:
        console.log("Il mese è Febbraio");
    break;
}


//Dato un voto in lettere (A, B, C, ecc.), stampa con switch il valore numerico equivalente.
let voto = "C"
switch (voto) {
    case "A":
        console.log("IL VOTO " + voto + " corrisponde a: 10");
        break;
    case "B":
        console.log("IL VOTO " + voto + " corrisponde a: 8");
        break;
    case "C":
        console.log("IL VOTO " + voto + " corrisponde a: 6");
        break;
    case "D":
        console.log("IL VOTO " + voto + " corrisponde a: 5");
        break;
    case "F":
        console.log("IL VOTO " + voto + " corrisponde a: 3");
        break;           
    default:
        break;
}


//Crea una simulazione bancomat: con if verifica il PIN, con switch scegli l’operazione.
let pin = 1234;
let pinInserito = 1234;
if (pin === pinInserito) {
    console.log("PIN CORRETTO");
    let operazione = 2;
    switch(operazione) {
        case 1:
            console.log("Saldo: € 1.500,00");
            break;
        case 2:
            console.log("Prelievo: € 100,00");
            break;
        case 3:
            console.log("Deposito: € 200,00");
            break;
        default:
            console.log("Operazione non valida");
            break;        
    }
} else {
    console.log("PIN ERRATO")
}           
let saldo = 6000;
let pin = 1234;
let ope = 2;
let cifra;
let ultima_operazione = 2;

if (pin == 1234) {
  switch (ope) {
    case 1:
      console.log("hai scelto prelievo");
      cifra = 50;
      saldo -= cifra;
      ultima_operazione = 1;
      console.log(`saldo: ${saldo}`);
      if (ultima_operazione != 0) {
        if (ultima_operazione == 1) {
          console.log("ultima operazione: prelievo");
        } else {
          console.log("ultima operazione: deposito");
        }
      }
      break;

    case 2:
      console.log("hai scelto deposito");
      cifra = 100;
      saldo += cifra;
      ultima_operazione = 2;
      console.log(`saldo: ${saldo}`);
      if (ultima_operazione != 0) {
        if (ultima_operazione == 1) {
          console.log("ultima operazione: prelievo");
        } else {
          console.log("ultima operazione: deposito");
        }
      }
      break;

    case 3:
      console.log(`saldo: ${saldo}`);
      if (ultima_operazione != 0) {
        if (ultima_operazione == 1) {
          console.log("ultima operazione: prelievo");
        } else {
          console.log("ultima operazione: deposito");
        }
      }

    default:
      break;
  }
} else {
  console.log("pin non valido!");
}




//Dato un segno zodiacale ("Ariete", "Toro", ecc.), 
// usa switch per stampare il mese corrispondente.
let segno = "Cancro"; 
switch (segno) {
    case "Ariete":
        console.log("Ariete: 21 marzo – 19 aprile");
        break;
    case "Toro":
        console.log("Toro: 20 aprile – 20 maggio");
        break;
    case "Gemelli":
        console.log("Gemelli: 21 maggio – 20 giugno");
        break;
    case "Cancro":
        console.log("Cancro: 21 giugno – 22 luglio");
        break;
    case "Leone":
        console.log("Leone: 23 luglio – 23 agosto");
        break;
    case "Vergine":
        console.log("Vergine: 24 agosto – 23 settembre");
        break;
    case "Bilancia":
        console.log("Bilancia: 24 settembre – 23 ottobre");
        break;
    case "Scorpione":
        console.log("Scorpione: 24 ottobre – 22 novembre");
        break;
    case "Sagittario":
        console.log("Sagittario: 23 novembre – 21 dicembre");
        break;
    case "Capricorno":
        console.log("Capricorno: 22 dicembre – 20 gennaio");
        break;
    case "Acquario":
        console.log("Acquario: 21 gennaio – 19 febbraio");
        break;
    case "Pesci":
        console.log("Pesci: 20 febbraio – 20 marzo");
        break;
    default:
        console.log("Segno non riconosciuto");
}
        */










