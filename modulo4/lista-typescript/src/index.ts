// 1 -

//     function frase(nome: string, data: string): any {
//         const dataFinal = data.split("/")
//         const dia = dataFinal[0]
//         const mes = dataFinal[1]
//         const ano = dataFinal[2]

//         return (`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
//     }

// console.log(frase("Adernam", "24/01/1998"))

// 2 -

//     function typeOf(bananinha: any): void {
//         console.log(typeof bananinha)
//     }

// typeOf("lalala")

// 3 -

// enum GENERO {
//     ACAO = "ação",
//     DRAMA = "drama",
//     COMEDIA = "comédia",
//     ROMANCE = "romance",
//     TERROR = "terror"
// }


// function film(titulo: string, ano: number, genero: string, nota?: number) {

//     let gen: string = genero.toUpperCase()
//     let gene = GENERO






//     const genFilter: any(genero: string) => {
//         if (genero.toUpperCase() === GENERO) {
//             return genero
//         }
//     }
// }


// 4 -

// enum SETORES {
//     FINANCEIRO = "financeiro",
//     MARKETING = "marketing",
//     VENDAS = "vendas"
// }

// const arrayPessoas = [
//     { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
//     { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
//     { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
//     { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
//     { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
//     { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
//     { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
// ]


// type Person = {
//     nome: string,
//     salário: number,
//     setor: SETORES,
//     presencial: boolean
// }

// function(arr:Person[]):Person[] {

// }

// 5-

// const arrayPessoas = [
//     { name: "Rogério", email: "roger@email.com", role: "user" },
//     { name: "Ademir", email: "ademir@email.com", role: "admin" },
//     { name: "Aline", email: "aline@email.com", role: "user" },
//     { name: "Jéssica", email: "jessica@email.com", role: "user" },
//     { name: "Adilson", email: "adilson@email.com", role: "user" },
//     { name: "Carina", email: "carina@email.com", role: "admin" }
// ]

// type Pessoa = {
//     name: string,
//     email: string,
//     role: string
// }


// function retornAdmins(array: Pessoa[]) {
//     const novoArray = arrayPessoas.filter((pessoa) => {
//         if (pessoa.role == "admin") {
//             return pessoa
//         }
//     })
//     console.log(novoArray)
// }

// retornAdmins(arrayPessoas)

// 6-

// type Conta = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: number[]
// }


// const contas:Conta[] = [
//     { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
//     { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
//     { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
//     { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
//     { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
//     { cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]


// function clientesNegativos(arr: Conta[]) {
//     const clientesDevendo = contas.filter((conta) => {
//         let total = 0
//         for (let i = 0; i < conta.debitos.length; i++) {
//             total += conta.debitos[i]
//         }
//         conta.saldoTotal = conta.saldoTotal - total

//         if (conta.saldoTotal < 0) {
//             return conta
//         }
//     })

//     return clientesDevendo
// }

// console.log(clientesNegativos(contas))

// 7-

// type Produto = {
//     nome: string,
//     quantidade: number,
//     valorUnitario: any
// }


// const arrayProdutos: Produto[] = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
// ]



// function precoAjustado(produtos: Produto[]) {
//     const ajustaPreco = (preco: number): string => {
//         const valorAjustado: string = preco.toFixed(2).replace('.', ',')
//         return "R$ " + valorAjustado
//     }

//     const novoPreco = arrayProdutos.map((prod) => {
//         prod.valorUnitario = ajustaPreco(prod.valorUnitario)

//         return prod
//     })

//     return novoPreco
// }

// console.log(precoAjustado(arrayProdutos))

// function fatorial (num:any) {
//     let fator:number = num
//     let atual:number = 0;
//     for(let i = fator; i > 0; i-- ) {
//         let anterior = fator - 1
//         atual = fator * anterior
        // if (i > 0) {
        //     atual = i * (i-1)
        // }
    //     return i
    // }
    // while (fator > 0) {
    //     let anterior = fator - 1
    //     atual = fator * anterior
    // }
//     console.log(atual)
// }

// fatorial(3)

// 10-

// 11-