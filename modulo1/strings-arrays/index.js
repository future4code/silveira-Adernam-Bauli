// Exercícios de interpretação de código

// 1)

//a. undefined

//b. null

//c. 11

//d. 3

//e. array = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//f. 9

// 2) SUBI NUM ÔNIBUS EM MIRROCOS

// Exercícios de escrita de código

// 1)

const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu email ?")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario, "!")

// 2)

//a.

array = ['Churrasco', 'Hamburguer', 'Pizza', 'Strogonoff', 'Sushi']

console.log(array)

console.log("Essas são minhas comidas preferidas?")
console.log(array[0], ",")
console.log(array[1], ",")
console.log(array[2], ",")
console.log(array[3], ",")
console.log(array[4], ".")

const comidaUsuario = prompt("Qual duas comida preferidas ?")

array[1] = comidaUsuario

console.log(array)


// 3)

//a.

let listaDeTarefas = [];


//b.

listaDeTarefas[0] = prompt("Escreve uma tarefa que você precisa fazer hoje:")
listaDeTarefas[1] = prompt("Escreve mais uma tarefa que você precisa fazer:")
listaDeTarefas[2] = prompt("Escreve agora uma última tarefa:")

//c.

console.log(listaDeTarefas)

//d.

let removerTarefa = 0

removerTarefa = prompt("Diga uma tarefa que você ja realizou: 0, 1 ou 2 ?")

//e.

listaDeTarefas.splice(removerTarefa, 1)

//f.

console.log(listaDeTarefas)