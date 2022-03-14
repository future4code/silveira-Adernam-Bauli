
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return `No comparador de igualdade ${a}===${b} é ${a === b}`
// }
// console.log(checarIgualdade(1, 1))

// c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior (a, b) {
//     return a > b
// }

// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=         true
// b-) 1=='1'=          true
// c-) 'a'==='b'=       false
// d-) 'b'>'a'=         undefined
// e-) 0!==null=        false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = [];
//     let nomeDoUsuario = prompt("Digite seu Nome:");
//     let anoDeNascimento = +prompt("Digite seu ano de nascimento:");
//     let senhaDoUsuario = prompt("Digite sua senha:");
//     let nacionalidade = prompt("Você é brasileiro ? Sim/Não");
//     if (anoDeNascimento < 2004 && senhaDoUsuario.length >= 6 && nacionalidade == "sim") {
//     usuario.push(nomeDoUsuario);
//     usuario.push(anoDeNascimento);
//     usuario.push(senhaDoUsuario);
//     usuario.push(nacionalidade);
//     console.log(`Parabéns você foi cadastrado!`);
//     } else {
//         console.log(`Infelizmente você não pode realizar o seu cadastro.`)
//     }
// }
// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     const senhaDigitada = prompt("Digite sua senha:")
//     if (senhaDigitada == "labenu") {
//         console.log("Usuário Logado.")
//     } else {
//         console.log("Senha inválida.")
//     }
// }

// console.log(login());

//Desafio-------------------------------------------

// const login = () => {
//     const usuarios = [
//         {
//             nome: "Artur",
//             ano: 2000,
//             nacionalidae: "brasileiro",
//             senha: "123456",
//             vacina: "pfizer",
//             imunizacao: "incompleta"
//         },
//         {
//             nome: "Bárbara",
//             ano: 1984,
//             nacionalidae: "brasileira",
//             senha: "labenu",
//             vacina: "astrazenica",
//             imunizacao: "completa"
//         },
//         {
//             nome: "Carlos",
//             ano: 1999,
//             nacionalidae: "brasileiro",
//             senha: "123456",
//             vacina: "coronavac",
//             imunizacao: "incompleta"
//         }
//         ]
//         const nomeCadastro = prompt("Digite seu nome:");
//         const senhaCadastrada = prompt("Digite sua senha:");
//         if (nomeCadastro == "Artur" && senha == "123456") {
//             console.log("Bem vindo Artur!");
//         } else if (nomeCadastro == "Bárbara" && senha == "labenu") {
//             console.log("Bem vinda Barbara!");
//         } else if (nomeCadastro == "Carlos" && senha == "123456") {
//             console.log("Bem vindo Carlos!");
//         } else {
//             console.log("Usuário não encontrado.");
//         }
// }

// login()

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());