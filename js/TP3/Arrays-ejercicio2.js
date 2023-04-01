/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = [];

while (true) {
  let ciudad = prompt("Introduce el nombre de la ciudad ");

  if (ciudad === null) {
    break; 
  }

  ciudades.push(ciudad);
}

console.log(ciudades);

console.log("La longitud del arrays es de "+ ciudades.length + "elementos");

document.write("La primera ciudad es ${ciudades[0]}<br>");
document.write("La tercera ciudad es ${ciudades[2]}<br>");
document.write("La última ciudad es ${ciudades[ciudades.length-1]}<br>");

ciudades.push("Paris");

console.log("La ciudad en segunda posición es " + ciudades[1]);

ciudades.splice(1, 1, "Barcelona");

console.log(ciudades);
