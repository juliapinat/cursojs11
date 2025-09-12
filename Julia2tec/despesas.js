// --- Registro das Despesas ---

let moradia = 1200;      // Valor do aluguel/prestação da casa
let alimentacao = 850;   // Gasto com supermercado e feira
let transporte = 300;    // Combustível, transporte público, etc.
let lazer = 450;         // Passeios, cinema, etc.
let contas = 600;        // Luz, água, internet, telefone
let educacao = 200;      // Mensalidade escolar, cursos

console.log("--- Despesas Familiares Registradas ---");
console.log(`Moradia: R$ ${moradia}`);
console.log(`Alimentacao: R$ ${alimentacao}`);
console.log(`Transporte: R$ ${transporte}`);
// --- Cálculo do Total de Despesas ---

let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao;

console.log(`Total de Despesas: R$ ${totalDespesas}`);

// --- Cálculo da Média de Despesas ---

// Para calcular a média, precisamos saber quantas "categorias" de despesas temos.
let numeroDeCategorias = 6;
let mediaDespesas = totalDespesas / numeroDeCategorias;

console.log(`Média de Despesas por Categoria: R$ ${mediaDespesas.toFixed(2)}`); // .toFixed(2) formata para 2 casas decimais
