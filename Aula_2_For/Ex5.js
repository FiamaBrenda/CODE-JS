/* 5. Imprimir os primeiros 10 números da sequência de Fibonacci. */

var prompt = require('prompt-sync')();

let fibonacci = [0, 1];

for (let n = 2; n <= 10; n++) {
  fibonacci[n] = fibonacci[n - 1]  + fibonacci[n - 2] ;
}

console.log("Sequência de Fibonacci: " + fibonacci) ;