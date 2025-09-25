const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Digite seu peso (kg):", (peso) => {
 rl.question("Digite sua altura (m): ", (altura) => {
  peso = parseFloat(peso);
  altura = parseFloat(altura);

let imc = peso / (altura + altura);
console.log(`Seu IMC é: ${Simc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Classificação: Abaixo do peso");
} else if (imc < 24.9) {
  console.log("Classificação: Peso normal");
}else if (imc < 29.9) {
  console.log("Classificação: Sobrepeso");
}else {
  console.log("Classificação: Obesidade");
}

   rl.close();
  });
 });
