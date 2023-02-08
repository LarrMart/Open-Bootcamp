const misDatos = {
    nombre: "Guillermo",
    apellido: "Larroca",
    edad: 36,
    altura: 1.77,
    eresDesarrollador: true
};

const amigo1 = {
    nombre: "Matías",
    apellido: "García",
    edad: 29,
    altura: 1.65,
    eresDesarrollador: false,
};

const amigo2 = {
    nombre: "Tito",
    apellido: "Adlaber",
    edad: 32,
    altura: 1.67,
    eresDesarrollador: false,
};

let {edad} = misDatos;
const lista = [misDatos, amigo1, amigo2];

console.log(lista.sort((el1, el2) => el2.edad - el1.edad));
