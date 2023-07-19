/* 5. Imprimir os primeiros 10 números da sequência de Fibonacci. */

var prompt = require('prompt-sync')();
/* 
let fibonacci = [0, 1];

for (let n = 2; n <= 10; n++) {
  fibonacci[n] = fibonacci[n - 1]  + fibonacci[n - 2] ;
}

console.log("Sequência de Fibonacci: " + fibonacci) ; */


let numAtual = 1;
let numAnterior = 0;

console.log(numAnterior);
console.log(numAtual);


for(let n = 1; n < 9 ;n ++){
  
  proximo = numAnterior + numAtual;
  console.log(proximo)

  numAnterior = numAtual
  numAtual = proximo
}