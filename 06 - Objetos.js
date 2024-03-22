// Crie um objeto que represente uma pessoa com propriedades como nome, idade e profissão.

let clientes = [

    { 
        nome: 'Italo Basilio da Silva', 
        idade: 32,
        cidade: 'São Paulo',
        Profissão: 'Full Stack Engineer'

    },
    
];

// Acesse e modifique as propriedades de um objeto

// Acessando propriedades do objeto
console.log("Nome:", clientes[0].nome);
console.log("Idade:", clientes[0].idade);
console.log("Profissão:", clientes[0].Profissão);

// Modificando propriedades do objeto
clientes[0].idade = 33; // Alterando a idade para 33
clientes[0].cidade = 'Rio de Janeiro';

// Exibindo as propriedades modificadas
console.log("Nome:", clientes[0].nome);
console.log("Idade:", clientes[0].idade);
console.log("Cidade:", clientes[0].cidade);

