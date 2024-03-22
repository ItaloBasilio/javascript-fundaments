// Crie um array com diferentes tipos de dados.
// Acesse elementos individuais de um array e os modifique.
// Itere sobre um array utilizando loops.

const clientes = ['Italo', '19974030169', 'italo@email.com', 'Rua 75']
let i = 0;

console.log("Iterando sobre o array usando um loop while:");
while (i < clientes.length) {
    console.log("Elemento na posição", i, ":", clientes[i]);
    i++;
}

console.log(clientes[0])

clientes[0] = 'Eunice';
console.log(clientes[0])
