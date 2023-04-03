//Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    ponerAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    ponerAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    Alto() {
      return this.alto;
    }
  
    Ancho() {
      return this.ancho;
    }
  
    calcularPerimetro() {
      return (this.alto + this.ancho) * 2;
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  