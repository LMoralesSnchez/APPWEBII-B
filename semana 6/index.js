const fs = require("fs");
const http = require("http");

const express = require("express");

const PUERTO = 3000;

const indice = fs.readFileSync("./index.html");
const acercade = fs.readFileSync("./About.html");
const error = fs.readFileSync("./error.html");

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
