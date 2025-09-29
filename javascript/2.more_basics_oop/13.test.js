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


