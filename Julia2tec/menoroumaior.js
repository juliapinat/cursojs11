// Importa o módulo 'readline' para ler dados digitados pelo usuário no terminal
const readline = require("readline");

// Cria a interface de leitura (entrada e saída de dados)
const rl = readline.createInterface({
    input: process.stdin, // define que a entrada será o teclado
    output: process.stdout // define que a saída será o console
});

// Faz uma pergunta ao usuário
rl.question("Digite um número: ", (resposta) => {
    // Converte a resposta (que vem como texto) para número
     const numero= Number(resposta);

     // Estrutura if/else para verificar se é maior ou menor/igual a 5
    if (numero > 5) {
      console.log("O número é maior que 5");
    } else {
    console.log("O número é menor ou igual a 5");
}
// Fecha a interface de leitura (importante para encerrar o programa)
rl.close();

});
