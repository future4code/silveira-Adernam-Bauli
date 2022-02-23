// Exercícios de interpretação de código

// 1)

// a. Testa se a resposta do usuário é um número par ou ímpar;

// b. Números pares;

// c. Números ímpares;

// 2)

// a. Para mostrar po preço das frutas do supermercado;

// b. 2.25

// c. 5.5

// 3)

// a. Criando uma variável com um prompt que pede um valor para o usuário e considera ele como número.

// b. Nos dois casos daria erro.

// c. Sim pois a variável está num escopo que não pode ser acessado se a resposta for diferente da condição de "if".


// Exercícios de escrita de código

// 1)

// a. const idade = prompt("Quantos anos você tem ?")

// b.

// const idade = +prompt("Quantos anos você tem ?")

// c.

// if (idade >= 18){
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir.")
// }

// 2)

// const periodo = prompt("Qual período você estuda ? M/V/N")

// if (periodo === "m"){
//     console.log("Bom Dia!")
// } else if (periodo === "v") {
//     console.log("Boa Tarde!")
// } else if (periodo === "n") {
//     console.log("Boa Noite!")
// }

// 3)

// const periodo = prompt("Qual período você estuda ? M/V/N")
// let saudacao
// switch (periodo) {
//     case "M":
//         saudacao = "Bom Dia!"
//         break;
//     case "V":
//         saudacao = "Boa Tarde!"
//         break;
//     case "N":
//         saudacao = "Boa Noite!"
//         break;
// }
// console.log(saudacao)

// 4) Vou usar os dois métodos;

// const genero = prompt("Qual o gênero do filme ?")
// const ingresso = +prompt("Qual o valor do ingresso ?")


// let generoCerto;
// let ingressoCerto;

// switch (genero) {
//     case "fantasia":
//         generoCerto = true;
//         break;
//     default: false;
// }
// if (ingresso >= 15){
//     ingressoCerto = true;
// }
// if (generoCerto && ingressoCerto){
//     console.log("Bom filme!");
// } else {
//     console.log("Escolha outro filme :(");
// }

// Desafio

// 1)

// const genero = prompt("Qual o gênero do filme ?")
// const ingresso = +prompt("Qual o valor do ingresso ?")


// let generoCerto;
// let ingressoCerto;
// let lanche

// switch (genero) {
//     case "fantasia":
//         generoCerto = true;
//         break;
//     default: false;
// }
// if (ingresso >= 15){
//     ingressoCerto = true;
// }
// if (generoCerto && ingressoCerto){
//     let lanche = prompt("Qual lanche você vai querer ?")
//     console.log("Bom filme, e aproveite o/a", lanche, "!" );
// } else {
//     console.log("Escolha outro filme :(");
// }

// 2)

const dados = {
    nomeCompleto: prompt("Nome completo"),
    tipoJogo: prompt("Tipo jogo: IN(internacional) DO(Domestico)"),
    etapa: prompt("SF(Semi Final), DT(Decisao terceiro) ou FI(Final)"),
    categoria: prompt("1, 2, 3 ou 4"),
    qunatidadeIngresso: prompt("Quantidade de ingressos")
}

