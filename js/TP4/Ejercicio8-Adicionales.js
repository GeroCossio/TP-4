//Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
    
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre},tengo ${this.edad} añitos y soy ${this.profesion}.`);
    }
    
    despedirse() {
      console.log(`Nos vemoss :) `);
    }
  }
  
  const persona1 = new Persona("Gero", 20, "Programador FullStack");
  const persona2 = new Persona("Ricardo", 19, "Estudiante");
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
  