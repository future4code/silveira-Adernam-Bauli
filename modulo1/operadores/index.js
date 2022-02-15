// Exercícios Interpretação

//  1)
//    a. false
//    b. false
//    c. true
//    d. boolean

//  2) O que é escrito no prompt fica como string e não Number.

//  3) Colocar o sinal de mais (+) antes do prompt;

// let primeiroNumero = +prompt("Digite um numero!")
// let segundoNumero = +prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)




// Exercícios de Escrita


//  1)

let idade = +prompt("Qual a sua idade ?");
let idadeAmigo = +prompt("Qual a idade do seu melhor amigo(a) ?");

let diferenca = idade - idadeAmigo

console.log("Sua idade é maior que a do seu amigo(a) ?", idade > idadeAmigo );

console.log("Diferença de idade:", diferenca);



//  2)
// a.
let numPar = +prompt("Digite um numero Par:");

let resultado = numPar % 2

// b.
console.log(resultado)

// c. Sim, todo número par não terá sobra quando dividido por 2.

// d. Caso seja inserido um número ímpar, terá uma sobra a ser apresentada no console.



//  3)

let idade = +prompt("Qual a sua idade ?");

let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idadeDias * 24

console.log("Sua idade em meses é:", idadeMeses)
console.log("Sua idade em dias é:", idadeDias)
console.log("Sua idade em horas é:", idadeHoras)


//  4)

let num1 = +prompt("Digite um número:");
let num2 = +prompt("Digite mais um número:");

console.log("O primeiro numero é maior que o segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 == num2)
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 == 0)
console.log("O segundo numero é divisível pelo primeiro?",num2 % num1 == 0)