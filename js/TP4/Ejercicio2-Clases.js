/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
*/

let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
      this.saldo += cantidad;
    },

    extraer: function(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
      } else {
        console.log("No hay suficiente plata en la cuenta");
      }
    },

    informar() {
    return ("Titular: " + this.titular + ", Saldo: " + this.saldo);
    }
  };
  
  console.log(cuenta.informar());

  console.log(cuenta.ingresar(100));
  console.log(cuenta.informar());

  console.log(cuenta.extraer(50));
  console.log(cuenta.informar());

  console.log(cuenta.extraer(100));
  console.log(cuenta.informar());