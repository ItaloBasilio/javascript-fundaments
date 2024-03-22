
// Crie uma função que recebe dois números como parâmetros e retorna a soma deles.

function soma (a , b){
    return a + b;
}

let num1 = 5;
let num2 = 10;
let resultado = soma(num1,num2);
console.log("A soma de",num1, "e" , num2, "é igual a:", resultado );


// Escreva uma função que recebe um array de números como parâmetro e retorna o maior número do array.

function encontrarMaiorNumero (array){
    if(array.length === 0){
        return undefined;
        // retorna undefinded se o array estiver vazio
    }

    let maior = array[0]; //Assume que o primeiro elemento é maior


    //percorre o array ate encontrar o maior numero

    for (let i = 0; i < array.length; i++) {
        if(array[i]> maior){
            maior = array[i]
        }
    }

    return maior;
}


let numeros = [254,954,123,145,258,741,258,963];
let maiorNumb = encontrarMaiorNumero(numeros);
console.log("O maior numero no array é:", maiorNumb );