var prompt = require('prompt-sync')();

/* 2 - Uma empresa decide dar aumento de 30% aos funcionários cujo
salário é inferior a 500 reais. Escreva um programa que receba o
salário de um funcionário e imprima o valor do salário reajustado ou
uma mensagem caso o funcionário não tenha direito a aumento.*/

 let salario = parseInt(prompt("Digite seu salario: "))

 if (salario < 500){
    let novo = (salario * 1.30 )
    console.log("O seu novo salario é " + novo)
 }else {
    console.log("No momento voce nao recebera aumento")
 }
