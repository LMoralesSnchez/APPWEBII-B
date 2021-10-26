const libros = [
  {
    id: 1,
    titulo: "Node Js aplicacion distribuidos",
    idActor: 1,
    idPais: 1,
  },
  {
    id: 2,
    titulo: "Codigo limpio con JavaScript",
    idActor: 2,
    idPais: 2,
  },
  {
    id: 3,
    titulo: "Patrones de disenio con JavaScript",
  },
];
const autores = [
  {
    id: 1,
    nombre: "Luis Morales",
    idPais: 1,
  },
  {
    id: 2,
    nombre: "Anthony Carranza",
  },
  {
    id: 3,
    nombre: "Leixer Anchundia",
  },
];
const paises = [
  {
    id: 1,
    descripcion: "Ecuador",
  },
  {
    id: 2,
    descripcion: "Peru",
  },
];

function BuscarLibroPorID(id) {
  return new Promise((resolve, reject) => {
    const libro = libros.find((libro) => libro.id === id);
    if (!libro) {
      const error = new Error();
      error.message = `El Libro  no fue Encontrado`;
      reject(error);
    }
    resolve(libro);
  });
}
function BuscarAutuorPorID(id) {
  return new Promise((resolve, reject) => {
    const autor = autores.find((autor) => autor.id === id);
    if (!autor) {
      const error = new Error();
      error.message = "El Autor No encontrado";
      reject(error);
    }
    resolve(autor);
  });
}
function BuscarPaisPorID(id) {
  return new Promise((resolve, reject) => {
    const pais = paises.find((pais) => pais.id === id);
    if (!pais) {
      const error = new Error();
      error.message = "El Pais No encontrado";
      reject(error);
    }
    resolve(pais);
  });
}
BuscarLibroPorID(1)
  .then((libro) => {
    console.log(libro);
    return BuscarAutuorPorID(libro.idActor);
  })
  .then((autor) => {
    console.log(autor);
    return BuscarPaisPorID(autor.idPais);
  })
  .then((pais) => {
    console.log(pais);
  })
  .catch((error) => {
    console.log(error.message);
  });
