var prompt = require('prompt-sync')();

/* 1 - Faça um programa que receba o nome, cargo e salário de um
funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
desse funcionário. */

let nome = prompt("Digite seu nome: ")
let cargo = prompt("Digite seu cargo: ")
let salario = parseInt(prompt("Digite seu salario: "))

if (salario < 1000){
    let salA = (salario * 1.10);
    console.log( "O " + cargo +" "+ nome + " tem o salario de " + salA)
}else {
    onsole.log( "O " + cargo +" "+ nome + " tem o salario de " + salario )
}
