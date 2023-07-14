/* Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
nome de usuário é admin e a senha é senha123. Exiba uma mensagem indicando se o login
foi bem-sucedido ou não.. */

var prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome de usuario: ")
let senha = prompt("Digite sua senha: ")

if( nome == "admin" && senha == "senha123"){
    console.log("Acesso permitido ");
}else{
    console.log("Acesso negado ");
}