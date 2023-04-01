


let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

 
  resultados[dado1 + dado2 - 2]++;
}

for (let i = 0; i < resultados.length; i++) {
  console.log("La suma de ", (i + 2), "apareció ", resultados[i], " veces");
}
