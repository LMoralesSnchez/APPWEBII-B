const express = require("express");
const app = express();

const response = {
  data: [],
  services: "User service",
  arquitecture: "Microservice",
};

app.get("/api/v2/users", (req, res) => {
  response.data.push("Victor", "Alex", "Luis");
  return res.send(response);
});

module.exports = app;
