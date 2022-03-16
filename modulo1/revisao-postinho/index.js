
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

// const primeiraDose = () => {
//     let tempo = ""
//     let data = ""
//     const nomeUsuario = prompt("Digite seu nome:")
//     const vacinaTomada = prompt("Qual vacina você tomou:")
//     if (vacinaTomada == "coronavac") {
//         tempo = 28;
//         data = "11/04"
//     } else if (vacinaTomada == "astrazenica") {
//         tempo = 90;
//         data = "14/06"
//     } else if (vacinaTomada == "pfizer") {
//         tempo = 90;
//         data = "14/06"
//     }
//     console.log(`Olá ${nomeUsuario}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)

// }

// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     for(let pessoa of usuarios){
//         if(pessoa.nome === nomeDoUsuario && pessoa.imunizacao === "incompleta"){
//             pessoa.imunizacao = "completa"
//         }
//     }
//     return usuarios
// }


// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     let nomePessoa = prompt("Digite seu nome:")

//     for(let pessoa of usuarios){
//         if(nomePessoa === pessoa.nome && pessoa.imunizacao === "incompleta"){
//             return `Você precisa voltar ao posto para tomar a segunda dose!`
//         } else {
//             return `Parabéns você ja está vacionado(a).`
//         }
//     }


// }
// console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    let nomeDoUsuario = prompt("Digite seu Nome:");
    let anoDeNascimento = +prompt("Digite seu ano de nascimento:");
    let senhaDoUsuario = prompt("Digite sua senha:");
    let nacionalidade = prompt("Qual sua nacionalidade ?");
    let novaPessoa = {}
    if (anoDeNascimento < 2004 && senhaDoUsuario.length >= 6 && nacionalidade === "Brasileiro") {
            novaPessoa.nome = nomeDoUsuario,
            novaPessoa.ano = anoDeNascimento,
            novaPessoa.nacionalidade = nacionalidade,
            novaPessoa.senha = senhaDoUsuario
    }
    usuarios.push(novaPessoa)
    return usuarios
}

console.log(cadastroDesafio());

const loginDesafio = () => {
    const senhaDigitada = prompt("Digite sua senha:")
    let mensagem;
    for(let pessoa of usuarios){
    if (senhaDigitada == pessoa.senha) {
            mensagem = "Usuário Logado."
            return mensagem;
        }
    }
    if(mensagem === undefined){
        console.log("Senha inválida")
    }
}
console.log(loginDesafio())

const primeiraDoseDesafio = () => {
    let vacina = prompt("Qual vacina você tomou ?")
    let imunizacao = "incompleta"
    usuarios[usuarios.length-1] = {
        ...usuarios[usuarios.length-1],
        vacina: vacina,
        imunizacao: imunizacao
    }
    return usuarios
}
console.log(primeiraDoseDesafio())

// const segundaDoseDesafio = (nomeDoUsuario) => {
//     for(let pessoa of usuarios){
//         if(nomeDoUsuario == pessoa.nome){
//             pessoa.imunizacao = "completa"
//         }
//     }
//     return usuarios
// }
// console.log(segundaDoseDesafio("Carlos"));

// const avisoAosAtrasadosDesafio = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     const vacinaIncompleta = usuarios.filter((pessoa)=>{
//         return pessoa.imunizacao === "incompleta"
//     })

//     const mensagemIncompleta = vacinaIncompleta.map((pessoa)=>{
//         return `Olá ${pessoa.nome} você precisa voltar ao posto para tomar a segunda dose!`
//     })
//     return mensagemIncompleta
// }
// console.log(avisoAosAtrasadosDesafio());