var prompt = require('prompt-sync')();

/* Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */

let n = parseFloat(prompt("Digite um numero: "))

while( n >= 0){
    console.log(n--);
}