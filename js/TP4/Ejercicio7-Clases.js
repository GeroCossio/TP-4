/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

// Definimos la clase Contacto
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = new Array(tamano);
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log("Se te lleno la agenda");
            return;
        }
        for (let i = 0; i < this.contactos.length; i++) {
            if (!this.contactos[i]) {
                this.contactos[i] = contacto;
                break;
            }
        }
    }

    existeContacto(contacto) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i] && this.contactos[i].nombre === contacto.nombre) {
                return true;
            }
        }
        return false;
    }

    listarContactos() {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i]) {
                console.log(`Nombre: ${this.contactos[i].nombre}, Numero de telefono: ${this.contactos[i].telefono}`);
            }
        }
    }

    buscarContacto(nombre) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i] && this.contactos[i].nombre === nombre) {
                console.log(`Teléfono: ${this.contactos[i].telefono}`);
                return;
            }
        }
        console.log("");
    }

    eliminarContacto(contacto) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i] && this.contactos[i].nombre === contacto.nombre) {
                delete this.contactos[i];
                console.log("Contacto eliminado");
                return;
            }
        }
        console.log("No existe registro del contacto");
    }

    agendaLlena() {
        for (let i = 0; i < this.contactos.length; i++) {
            if (!this.contactos[i]) {
                return false;
            }
        }
        return true;
    }

    espaciosLibres() {
        let huecosLibres = 0;
        for (let i = 0; i < this.contactos.length; i++) {
            if (!this.contactos[i]) {
                huecosLibres++;
            }
        }
        return huecosLibres;
    }
}

const agenda = new Agenda();
while (true) {
    const opcion = prompt("1. Añadir contacto\n2. Verificar si existe contacto\n3. Listar contactos\n4. Buscar contacto\n5. Eliminar contacto\n6. Verificar si la agenda está llena\n7. Ver huecos libres\n8. Salir");
    switch (opcion) {
        case "1":
            const nombre = prompt("Ingresa el nombre del contacto:");
            const telefono = prompt("Ingresa el teléfono del contacto:");
            const contacto = new Contacto(nombre, telefono);
            agenda.aniadirContacto(contacto);
            break;
        case "2":
            const nombre2 = prompt("Ingresa el nombre del contacto:");
            const contacto2 = new Contacto(nombre2);
            if (agenda.existeContacto(contacto2)) {
                console.log("El contacto existe.");
            } else {
                console.log("El contacto no existe.");
            }
            break;
        case "3":
            agenda.listarContactos();
            break;
        case "4":
            const nombre3 = prompt("Ingresa el nombre del contacto:");
            agenda.buscarContacto(nombre3);
            break;
        case "5":
            const nombre4 = prompt("Ingresa el nombre del contacto:");
            const contacto4 = new Contacto(nombre4);
            agenda.eliminarContacto(contacto4);
            break;
        case "6":
            if (agenda.agendaLlena()) {
                console.log("La agenda esta llenita");
            } else {
                console.log("La agenda no esta llena");
            }
            break;
        case "7":
            console.log(`Hay ${agenda.espaciosLibres()} espacios libres.`);
            break;
        case "8":
            exit();
    }
}
