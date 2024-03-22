try {
    // Tentativa de executar um código que pode lançar uma exceção
    let resultado = 10 / 0; // Isso vai lançar uma exceção de divisão por zero
    console.log("O resultado da divisão é:", resultado); // Esta linha nunca será executada devido à exceção
} catch (erro) {
    // Captura qualquer exceção lançada dentro do bloco try e executa este bloco
    console.log("Ocorreu um erro:", erro.message); // Exibe a mensagem de erro
} finally {
    // Este bloco será sempre executado, independentemente de ocorrer uma exceção ou não
    console.log("O bloco finally sempre é executado.");
}

console.log("O programa continua após o bloco try...catch."); // Esta linha é executada após o bloco try...catch
