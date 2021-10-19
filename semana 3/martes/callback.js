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
    descripcion: "PerU",
  },
];
function busquedaPaisporID(id, callback) {
  const pais = paises.find((pais) => {
    return pais.id === id;
  });
  if (!pais) {
    const error = new Error();
    error.message = "Pais no Encontrado";
    return callback(error);
  }
  return callback(null, pais);
}
function busquedaAutorporId(id, callback) {
  const autor = autores.find((autor) => {
    return autor.id === id;
  });
  if (!autor) {
    const error = new Error();
    error.message = "Autor no Encontrado";
    return callback(error);
  }
  return callback(null, autor);
}
function busquedaLibroporId(id, callback) {
  const libro = libros.find((libro) => libro.id === id);
  if (!libro) {
    const error = new Error();
    error.message = "Libro no Encontrado";
    return callback(error);
  }
  return callback(null, libro);
}
busquedaLibroporId(1, (err, libro) => {
  if (err) {
    console.log(err.message);
    return;
  }
  busquedaAutorporId(libro.idActor, (err, autor) => {
    if (err) {
      return console.log(err.message);
    }
    busquedaPaisporID(libro.idPais, (err, pais) => {
      if (err) {
        return console.log(err.message);
      }
      libro.pais = pais;
      libro.autor = autor;
      delete libro.idPais;
      console.log(libro);
    });
    // libro.autor = autor;
    // delete libro.idActor;
    // console.log(libro);
  });
  // console.log(libro);
});
