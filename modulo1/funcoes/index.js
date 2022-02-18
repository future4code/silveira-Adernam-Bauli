// Exercicios de interpretação

// 1)

// a. 10, 50;

// b. Não aconteceria nada, o comando funcionaria normalmente só não seria impresso;

// 2)

// a. essa função vai pedir um texto ao usuario, depois vai colocar todas as letras em minusculo, 
//    e verificar se no texto contém a palavra "cenoura";
//    depois vai imprimir a resposta, sendo true ou false;

// b. A função considera todas as letras em minpusculo, mesmo que escritas em caixa alta. Dessa forma independente de como
//    o usuário escrever vai dar certo, e também por que o 'includes' não necessita da palavbra inteira mas só uma parte dela.
//    Nesse caso todos vão ser true.
// i--- true;
// ii-- true;
// iii- true;

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// 1)

// a.

function funcaoFrase(){

    console.log("Eu me chamo Adernam, tenho 24 anos, moro em Alta Floresta e sou estudante")

    
    
}

funcaoFrase()

// b.

function funcaoFrase(nome, idade, cidade, estudandoSimNao) {

    let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudandoSimNao}.`

    console.log(frase)

    return frase
}

funcaoFrase("Adernam", 24, "Alta Floresta", "sou estudante")

// 2)

function somar(a, b){
    const soma = a + b
    return soma

}

console.log(somar(10, 20))



// Não consegui fazer o resto