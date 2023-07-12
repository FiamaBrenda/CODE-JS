var prompt = require('prompt-sync')();

/*  5 - Faça um programa receba dois valores e imprima qual é o maior
número digitado. */

let a = parseInt(prompt("Digite um numero: "))
let b = parseInt(prompt("Digite outro numero: "))

if ( a > b){
    console.log(a)
}else if (a == b){
    console.log("Os numeros sao iguais")
}
else{
    console.log("O maior numero é " + b)
}
