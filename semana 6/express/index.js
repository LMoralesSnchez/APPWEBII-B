const fs = require("fs");
const http = require("http");
const path = require("path");

const express = require("express");
const cors = require("cors");

const PUERTO = 3000;

const indice = fs.readFileSync("./index.html");
const acercade = fs.readFileSync("./About.html");
const error = fs.readFileSync("./error.html");
const urlError = path.join(__dirname, "error.html");

const server = express();

server.use(cors()).use(express.json());

server.get("/", funcionx);

server.get("/About", (req, res) => {
  // res.write(acercade);
  // res.end();
  res.status(200).send({
    respesta: "Hola",
  });
});

server.use((req, res, next) => {
  res.status(400).sendFile(urlError);
});

function funcionx(req, res) {
  res.write(indice);
  res.end();
}

server.listen(PUERTO, () => {
  console.log(`Servidor corriendo http://localhost:${PUERTO}`);
});

// http
//   .createServer((req, res) => {
//     if (req.url === "/prueba") {
//       console.log("esto es prueba");
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(indice);
//     } else if (req.url === "/about") {
//       console.log("esto es acerca de");
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(acercade);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.write(error);
//     }
//     res.end();
//   })
//   .listen(PUERTO, () => {
//     console.log(`Se levanto el servidor http://localhost:${PUERTO}`);
//   });
