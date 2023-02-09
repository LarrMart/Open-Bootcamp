function Pelicula(titulo, director, fecha) {
    this.titulo = titulo;
    this.director = director;
    this.fecha = fecha;
}

function mostrarDatos(...arg) {
    arg.forEach(el => console.table(el));
}

const lista = ["milanesas", "pasta de diente", "papas", "alfajores", "chocolates"];
lista.push("Aceite de girasol");
lista.pop("Aceite de girasol");

const listaPeliculas = [
    new Pelicula("Matrix", "Hermanas Wachowski", new Date(1999, 0)),
    new Pelicula("Avatar", "James Cameron", new Date(2009,0)),
    new Pelicula("Joker", "Todd Phillips", new Date(2016,0))
]

const listaFiltrada = listaPeliculas.filter(pel => pel.fecha > new Date(2010, 0, 1)); 
const listaDirectores = listaPeliculas.map(pel => pel.director);
const listaTitulos = listaPeliculas.map(pel => pel.titulo);
const listaDirectoresYTitulos = listaDirectores.concat(listaTitulos);
const listaPropagacion = [...listaDirectores, ...listaTitulos];

mostrarDatos(listaPeliculas, listaFiltrada,
     listaDirectores, listaTitulos, listaDirectoresYTitulos, listaPropagacion);