var prompt = require('prompt-sync')();

/* Faça um programa que receba um número do usuário e continue
a pedir o número se o numero for diferente de 0. */
let n ;
do {
    n = prompt("Digite um numero: ")
}while(n != 0);