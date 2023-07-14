/* Exercício 4: Verificação de idade
Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não. */

var prompt = require('prompt-sync')();

let ano = prompt("Digite seu ano de nascimento no formato XXXX ")

if(ano < 2005 ){
    console.log("Vc e maior de idade")

}else{
    console.log("vc e um bb")
}