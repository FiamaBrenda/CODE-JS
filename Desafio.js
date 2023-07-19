var prompt = require('prompt-sync')();

let teste = parseInt(prompt("Digite o numero da questao: "))


switch (teste) {
    case 1:
        /* 1. Imprimir números de 1 a 10 utilizando o loop for */


        for (let contador = 1; contador <= 10; contador++) {

            console.log(contador);

        }
        break;
    case 2:
        /* 2. Imprimir números pares de 1 a 10. */

        for (let contador = 0; contador <= 10; contador += 2) {

            console.log(contador);

        }
        break;

    case 3:
        /* 3. Faça um programa que imprima os números ímpares de 0 a 50; */

        for (let contador = 1; contador <= 50; contador += 2) {

            console.log(contador);

        }
    case 4:
        let num = parseInt(prompt("Digite a tabuada que vc quer ver: "));

        for (let contador = 0; contador <= 10; contador++) {
            console.log(num + " x " + contador + " = " + (num * contador))


        }
        break;
    case 5:

        let numAtual = 1;
        let numAnterior = 0;

        console.log(numAnterior);
        console.log(numAtual);


        for (let n = 1; n < 9; n++) {

            proximo = numAnterior + numAtual;
            console.log(proximo)

            numAnterior = numAtual
            numAtual = proximo
        }
        break;
    case 6:
        let par = 0

        while (par < 20) {
            console.log(par);
            par += 2;

        }
        break;
    case 7:
        let contador = 1
        let soma = 0
        while (contador <= 100) {
            contador++;
            soma = contador + soma;

        }

        console.log(soma);
        break;
    case 8:
        let n;
        do {
            n = prompt("Digite sua idade ")
        } while (n < 18);
        console.log("Vc e maior de Idade")

        break;
    case 9:
         n = parseFloat(prompt("Digite um numero: "))

        while (n >= 0) {
            console.log(n--);
        }
        break;
    case 10:
        do {
            n = prompt("Digite um numero: ")
        } while (n != 0);
        break;
    default:
        //Instruções executadas quando o valor da expressão é diferente de todos os cases
        break;
}