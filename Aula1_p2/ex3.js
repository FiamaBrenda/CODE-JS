var prompt = require('prompt-sync')();

/*  Exercício 3: Verificação de números em ordem crescente
Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
não. */

 let n1 = parseInt(prompt("Digite um numero "));
 let n2 = parseInt(prompt("Digite um numero "));
 let n3 = parseInt(prompt("Digite um numero "));

 if( n1 <= n2 && n2 <= n3){
    console.log("Ordem crescente" )
 }else{
    console.log("fora de ordem")
 }