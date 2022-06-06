// 1-

// a)

// const minhaString:string = 1
// o vscode aponta o erro

// b)

// const meuNumero:number = 10

// fazendo um union type

// const meuNumero2:string | number = "aaaa"

// c)

// const pessoa: { nome:string, idade:number, corFavorita:string } = {
//     nome: "Adernam",
//     idade: 24,
//     corFavorita: "Preto"
// }

// type person = {
//     nome:string,
//     age:number,
//     corFavorita:string
// }

// enum CorFavorita {
//     PRETO = "Preto",
//     VERMELHO = "Vermelho",
//     AZUL = "Azul",
//     ROSA = "Rosa"
// }

// const pessoa2: { nome:string, idade:number, corFavorita:string } = {
//     nome: "Maria",
//     idade: 22,
//     corFavorita: CorFavorita.VERMELHO
// }

// const pessoa3: { nome:string, idade:number, corFavorita:string } = {
//     nome: "Joao",
//     idade: 20,
//     corFavorita: CorFavorita.AZUL
// }

// const pessoa4: { nome:string, idade:number, corFavorita:string } = {
//     nome: "Clara",
//     idade: 25,
//     corFavorita: CorFavorita.ROSA
// }

// 2-

// a) Entra uma quantidade de números, e retorna qual o número maior, o menor, e a média entre eles

// function obterEstatisticas(numeros:number[]):any {

//     const numerosOrdenados = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([10, 50]))

// b)

//maior numero, menor numero, e media entre eles
//todos são como any, pois retornam uma string dizendo se é maior menor ou media,
//retorna um número, que seria o resultado,
//e tudo dentro de um objeto, então é any

// c)

// type amostraDeDados = {
//     numeros:number[],
//     obterEstatisticas: () => any
// }

// 3-

// a)

// type Post = {
//     autor: string,
//     texto: string
// }

// const posts: Post[] = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]

// b) Entra o objeto post acima, e o auto que desejamos encontrar o texto,
//    e sai o objeto do autor filtrado, contendo o autor e seu texto.

// function buscarPostsPorAutor(posts:any, autorInformado:string):any {
//     return posts.filter(
//         (post:any) => {
//             return post.autor === autorInformado
//         }
//     )
// }

// console.log(buscarPostsPorAutor(posts, "Dobby"))