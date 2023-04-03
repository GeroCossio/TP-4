//Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("Este animal emite un sonido.");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonidoPerro() {
      console.log("Guau guau");
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonidoGato() {
      console.log("Miau miau");
    }
  }
  
  let miPerro = new Perro("Pampa", 11);
  let miGato = new Gato("Chimuelo", 2);
  
  
  miPerro.emitirSonidoPerro();
  miGato.emitirSonidoGato();
  