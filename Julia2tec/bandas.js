const bandas = [
  "Slipknot",
  "Green Day",
  "Queen",
  "Black Sabbath",
  "Iron Maiden",
  "Nirvana",
];

console.log("A primeira banda é:", bandas[0]);
console.log("A segunda banda é:", bandas[1]);
console.log("A terceira banda é:", bandas[2]);
console.log("A quarta banda é:", bandas[3]);
console.log("A quinta banda é:", bandas[4]);
console.log("A sexta banda é:", bandas[5]);

console.log("O array tem", bandas.length, "bandas."); // Saída: O array tem 6 bandas

bandas.push("Kiss");
console.log("O array agora é:", bandas);

console.log("\nLista de bandas:");
for (let i = 0; i < bandas.length; i++) {
  console.log(bandas[i]);
}
