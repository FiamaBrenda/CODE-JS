var prompt = require('prompt-sync')();

/* 6 - Faça um programa que receba 4 notas de um aluno, calcule e
imprima a média aritmética das notas e a mensagem de APROVADO
para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0. */

let n1 = parseInt(prompt("Digite a nota 1: "))
let n2 = parseInt(prompt("Digite a nota 2: "))
let n3 = parseInt(prompt("Digite a nota 3: "))
let n4 = parseInt(prompt("Digite a nota 4: "))

let media = (n1+ n2+ n3+ n4)/4;

if (media >= 7) {
    console.log("Parabens APROVADO, sua nota é " + media)
}else if (media >= 5 || media < 7 ) {
    console.log("Voce esta de RECUPERACAO, sua nota é " + media)
}else{
    console.log("Voce foi REPROVADO, sua nota é " + media + " Melhore") 
}