var prompt = require('prompt-sync')();

/* 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
while. */
let contador= 1
let soma=0
while (contador <= 100) {
    contador ++;
    soma = contador + soma;
   
}

console.log(soma);