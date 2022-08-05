// Escreva uma função que receba um array de strings e retorne o maior prefixo comum entre **todas** as strings.

// O prefixo é definido pelo começo até uma posição qualquer de uma string. Por exemplo, na string `"arvore"`, `"a"` seria um prefixo, e `"arvor"` também.

// Caso não exista um prefixo comum, retorne uma string vazia (`""`).


function longestCommon(strs) {
    if (strs.length === 0) return "";

    let commonPrefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];
        let areAllCharsSame = true;

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return commonPrefix;
            };
        };

        if (currentChar) {
            commonPrefix += currentChar
        };
    };

    return commonPrefix;
};