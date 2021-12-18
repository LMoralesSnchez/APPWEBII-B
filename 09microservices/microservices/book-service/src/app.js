const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Book service",
  arquitecture: "Microservice",
};

app.get("/api/v2/books", (req, res) => {
  response.data.push(
    "HTML en 24 Horas",
    "Javascript Patrones Solid",
    "Microservicios pratrones"
  );
  return res.send(response);
});

module.exports = app;
