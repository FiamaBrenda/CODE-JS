/* 4 - Faça um programa que receba um número do usuário e informe
se este número é par ou ímpar. */

var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número "));

let resto = numero % 2

if (resto == 0 ){

console.log("O número " + numero + " é Par")

} else {
    console.log("O número " + numero + " é Impar")
}