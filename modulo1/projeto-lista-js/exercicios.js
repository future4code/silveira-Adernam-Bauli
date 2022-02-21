// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const ret1 = +prompt("Altura")
  const ret2 = +prompt("Largura")

  console.log(ret1 * ret2)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let ano = +prompt('Digite o ano em que estamos:')
  let nascimento = +prompt('Digite seu ano de nascimento:')
  
  console.log(ano - nascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome ?")
  const idade = prompt("Qual a sua idade ?")
  const email = prompt("Qual o seu email ?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Primeira cor:")
  const cor2 = prompt("Segunda cor:")
  const cor3 = prompt("Terceira cor:")

  array = [cor1, cor2, cor3]

  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
//ex: array[a, b, c]
//indice   [0  1  2]

  let ar1 = array[0]
//    ar1 = a
  array[0] = array[array.length-1]
//array[0(a)] = c
  array[array.length-1] = ar1
//array[3-1 = 2] = ar1 = a
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  // const s1Low = string1.toLowerCase()
  // const s2Low = string2.toLowerCase()

  // return s1Low === s2Low
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  // const anoAtual = +prompt("Ano atual:")
  // const anoNascimento = +prompt("Ano nascimento:")
  // const anoCarteira = +prompt("Ano carteira:")

  // let anoRenovacao = 0
  
  // if (anoAtual - anoNascimento =< 20) anoRenovacao = 5
  // if (anoAtual - anoNascimento > 20) anoRenovacao = 10
  // if (anoAtual - anoNascimento > 50) anoRenovacao = 15


//vou fazer esses depois

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}