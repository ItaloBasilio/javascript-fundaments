// Escreva um programa que imprima os números de 1 a 10 utilizando um loop.
// Escreva um programa que calcule a soma dos números de 1 a 100 utilizando um loop.


console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma dos números de 1 a 100 é:", soma);