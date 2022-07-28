// 1 -
// a) Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente.
const function1a = (num: number) => {
    if (num >= 0) {
        function1a(num - 1);
        console.log(num);
    };
};

// b) Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente.
const function1b = (num: number) => {
    if (num >= 0) {
        console.log(num);
        function1b(num - 1);
    };
};

// 2 - Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n.
const function2 = (num: number, acc: number = 0): number => {
    if (num === 0) {
        return acc;
    };

    return function2(num - 1, acc + num);
};

console.log(function2(5));

// 3 - Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
export const function3 = (num: number): number => {
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        sum += i;
    };

    return sum;
};

console.log(function3(5));

// 4 - Escreva uma função recursiva que consiga imprimir todos os elementos de um array.
const function4 = (array: number[], index: number = array.length - 1) => {
    if (index >= 0) {
        function4(array, index - 1);
        console.log(`Elemento ${index}: `, array[index]);
    };
};

const array = [1, 2, 3, 4];

function4(array);

// 5 - Escreva uma função recursiva que determine a quantidade de digitos de um número.
const function5 = (num: number, acc: number = 1): number => {
    if (num < 10) {
        return acc;
    };

    return function5(num / 10, acc + 1);
};

console.log(function5(10));

// 6 - Escreva uma função recursiva que determine o maior valor de um array que contenha somente números positivos .
const function6 = (
    array: number[],
    index: number = 0,
    largest: number = 0
): number => {
    let largestAux = largest;
    if (array[index] > largest) {
        largestAux = array[index];
    };

    if (index === array.length - 1) {
        return largestAux;
    };

    return function6(array, index + 1, largestAux);
};

console.log(function6([2, 10, 8, 5, 4]));

// 7 - Escreva uma função recursiva que determine o primeiro caractere maiúsculo de uma string.
const function7 = (
    string: string,
    character: string = ""
): string => {
    if (character && character.toUpperCase() === character) {
        return character;
    };

    return function7(string.substring(1), string[0]);
};

// 8 - Calcule a complexidade do seguinte algoritmo.
function function8 (a: number, b: number): number {
    if (b < 0) {
        return 0; // Erro
    } else if (b === 0) {
        return a;
    } else {
        return a * function8(a, b - 1);
    };
};

// Resposta:
// O(b)

// 9 - Calcule a complexidade do seguinte código.
function allFib(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log(`i: ${fib(i)}`);
    };
};

function fib(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    };

    return fib(n - 1) + fib(n - 2);
};

// Resposta:
// O(2^n)