class Estudiante {

    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos() {
        return {nombre: this.nombre, asignaturas: this.asignaturas};
    }

}

const bar = new Estudiante("Barbara", ["Javascript", "HTML", "CSS"]);
const will = new Estudiante("Guille", ["Matemática", "Lengua", "Inglés"]);
console.log(bar.obtenDatos(), will.obtenDatos());