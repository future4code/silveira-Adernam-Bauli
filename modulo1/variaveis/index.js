/* Resposta 1:

10
10 5

Resposta 2:

10 10 10

Resposta 3:

O programa pergunta mostra um alerta ao usuário dizendo quanto ele ganha por hora baseado no valor/tempo;
A primeira variavel eu sugiro o nome "horasPorDia";
A segunda variavel eu sugiro o nome "valorPorDia";

*/

/*Exercício 1: */

/*a)*/let nome = null;
/*b)*/let idade = null;

/*c)*/
console.log(typeof nome);
console.log(typeof idade);

/*
d) Apareceu "object"1, por que eu não coloquei um valor
*/

/*e)*/
nome = "Adernam"
idade = 24

/*f)*/
console.log(typeof nome);
console.log(typeof idade);

/*
Agora apareceu os tipos correspondentes (string e number)
*/

/*g)*/
console.log("Olá", nome, "você tem", idade, "anos")

/*Exercício 2: */

const roupaAzul = prompt("Você está usando alguma roupa azul ?")
const calcado = prompt("Você está usando calçados ?")
const sentado = prompt("Você está sentado ?")

console.log("Você está usando alguma roupa azul ? -", roupaAzul)
console.log("Você está usando calçados ? -", calcado)
console.log("Você está sentado ? -", sentado)

/*Exercício 3: */

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10