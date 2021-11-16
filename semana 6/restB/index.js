const express = require("express");
const cors = require("cors");
const { restart } = require("nodemon");

const app = express();
const PUERTO = 3000;
let estudiantes = [];

app.use("/public", express.static(__dirname + "/public"));
app.use(cors()).use(express.json());

// http://localhost:3000/public/apisextob/v1/estudiantes GET, POST, PATCH, PUT, DELETE
//  http://localhost:3000/

app.get("/", (req, res) => {
  res.status(200).send(estudiantes);
});

app.get("/:cedula", (req, res) => {
  const { cedula } = req.params;
  let filtrado = estudiantes.filter((p) => p.cedula === cedula);
  if (filtrado.length > 0) {
    res.status(200).send(filtrado)[0];
  }
  res.status(404).send({ mensaje: "No se encontro el estudiante" });
  // res.status(200).send(filtrado[0]);
});
app.post("/", (req, res) => {
  const { body } = req;
  estudiantes.push(body);
  res.status(200).send({
    mensaje: "El dato se inserto correctamente",
    respuesta: body,
  });
});
app.put("/", (req, res) => {
  const { cedula, nombre, curso } = req.body;
  let estudiante = estudiantes.filter((p) => p.cedula === cedula)[0];
  estudiante.nombre = nombre;
  estudiante.curso = curso;
  res.status(200).send({
    mensaje: "Se modifico Correctamente",
    respuesta: estudiante,
  });
});
app.delete("/:cedula", (req, res) => {
  // console.log(req.params);
  const { cedula } = req.params;
  estudiantes = estudiantes.filter((p) => p.cedula !== cedula);
  res.status(200).send({
    respuesta: "eliminado correctamente",
  });
});

app.listen(PUERTO, () => {
  console.log(`Servidor funcionando en http://localhost${PUERTO}`);
});
