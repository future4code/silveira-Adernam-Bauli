// Exercícios de interpretação de código

// 1)

// a.
//    Matheus Nachtergaele
//    Virginia Cavendish
//    Canal: Globo, horario: 14h


// 2)

// a.
//   nome: Juca, idade: 3, raca: SRD
//   nome: Juba, idade: 3, raca: SRD
//   nome: Jubo, idade: 3, raca: SRD

// b. Ela cria uma cópia identica do obgjeto citado;

// 3)

// a.
//    false
//    undefined

// b. Sim, por que não existem informações de altura;




//  Exercícios de escrita de código

// 1)

// a.

const pessoa = {
    nome: "Luana",
    apelidos: ["Lu", "Luna", "Luzinha"]
}

function nomeApelido (string1) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)

}

nomeApelido(pessoa)

// b.

const pessoa = {
    nome: "Luana",
    apelidos: ["Lu", "Luna", "Luzinha"]
}

const novaPessoa = {
    ... pessoa,
    apelidos: ["Luh", "Lua", "Luaninha"]    
}

function nomeApelido (string1) {
    console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]} `)

}

nomeApelido(novaPessoa)

// 2)

// a.

const pessoa1 = {
    nome:"Adernam",
    idade:"24",
    profissao:"Desenvolvedor",
}

const pessoa2 = {
    nome:"Lucas",
    idade:"21",
    profissao:"Dentista",
}

// // b.


function listar (pessoa) {
    const array = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]

    return array
}

console.log(listar(pessoa1))
console.log(listar(pessoa2))


// 3)

// a.

const carrinho = []

// b.

const fruta1 = {
    nome:"Mamão",
    disponibilidade: true

}

const fruta2 = {
    nome:"Melão",
    disponibilidade: false

}

const fruta3 = {
    nome:"Laranja",
    disponibilidade: false

}

// c.

function adicionar (fruta) {
    carrinho.push(fruta)
}

adicionar(fruta1)
adicionar(fruta2)
adicionar(fruta3)

// d.

console.log(carrinho)