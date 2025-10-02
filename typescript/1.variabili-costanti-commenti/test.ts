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


//ESERCIZI
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
