const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Car service",
  arquitecture: "Microservice",
};

app.get("/api/v2/cars", (req, res) => {
  response.data.push("Kia Rio", "Vento", "Picanto");
  return res.send(response);
});

module.exports = app;
