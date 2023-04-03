//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


let auto = {
    color: 'rojo',
    marca: 'ferrari',
    modelo: '488 GTB',
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log("El ferrari se prendio");
      } else {
        console.log("Ya habias prendido el ferrari");
      }
    },
 
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log("El ferrari se apago");
      } else {
        console.log("Ya habias apagado el ferrari");
      }
    }
  }
  

  auto.encender();
  auto.apagar(); 
  