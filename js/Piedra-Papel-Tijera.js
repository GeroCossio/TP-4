//Crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.

function juego() {

    let movimientoUsuario = prompt("¿Piedra, papel o tijera?").toLowerCase();
    
    if (movimientoUsuario !== "piedra" && movimientoUsuario !== "papel" && movimientoUsuario !== "tijera") {
      alert("Mmm no, eso no vale");
      juego();
      return;
    }

    let movimientosPosibles = ["piedra", "papel", "tijera"];
    let movimientoPC = movimientosPosibles[Math.floor(Math.random() * 3)];
    
    let resultado;
    if (movimientoUsuario === movimientoPC) {
      resultado = "Empatamos";
    } else if (
      (movimientoUsuario === "piedra" && movimientoPC === "tijera") ||
      (movimientoUsuario === "papel" && movimientoPC === "piedra") ||
      (movimientoUsuario === "tijera" && movimientoPC === "papel")
    ) {
      resultado = "Ganaste";
    } else {
      resultado = "Perdiste";
    }
    alert(`Elegiste ${movimientoUsuario}. La PC eligió ${movimientoPC}. ${resultado}!`);
    
    let jugarDeNuevo = confirm("Queres jugar de nuevo?");
    if (jugarDeNuevo) {
      juego();
    } else {
      alert("Gracias por jugar loco");
    }
  }
  
//Incicio de juego
  juego();
  