var prompt = require('prompt-sync')();

/*  3 -  Faça um programa que receba um número inteiro do usuário e informe
 se este número é positivo ou negativo. */

 let numero = parseInt(prompt("Digite um numero "))

 if( numero >= 0 ){
    console.log("Este numero é positivo " + numero)
 }else{
    console.log("Este numero é negativo " + numero)
 }