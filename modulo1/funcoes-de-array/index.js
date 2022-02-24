// Exercícios de interpretação de código

// a. Cria um novo array baseado nos dados do antigo, e imprime cada item do novo array mostrando os valores de dentro e os indices;

// 2)

// a. Cria um novo array baseado no antigo, e imprime somente os nomes;

// 3)

// a. Cria um novo array basedo no antigo, e imprime apenas os apelidos que forem diferente de "Chijo";



// Exercícios de escrita de código

// 1)

//a. 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const petsNomes = pets.map((item, index, array) => {
//     return item.nome
//  })
//   console.log(petsNomes)

// b.

// const petsNomes = pets.map((item, index, array) => {
//         if (item.raca == "Salsicha"){
//             return item
//         }
//      })

//      console.log(petsNomes)

// c.

// const petsPoodle = pets.filter((item) => {
//         if (item.raca == "Poodle"){
//             console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
//         }
// })


// 2)

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 // a.


//  const produtosNomes = produtos.map((item, index, array) => {
//      return item.nome    
//  })
//  console.log(produtosNomes)


// b.


// const prod = produtos.map((item) => {
//     const objeto1 = {nome: item.nome, preco: item.preco * 0.95}
//     return objeto1
// })
// console.log(prod)

// c.

//  const bebidas = produtos.filter((item) => {
//     if (item.categoria == "Bebidas"){
//         return true
//     }
//  })
//  console.log(bebidas)


// d.


//  const ype = produtos.filter((item) => {
//     if (item.nome.includes("Ypê")){
//         return true
//     }
//  })
//  console.log(ype)

// e.

// const compreYpe = produtos.filter((item) => {
//         if (item.nome.includes("Ypê")){
//             console.log(`Compre ${item.nome} por ${item.preco}`)
//         }
// })

