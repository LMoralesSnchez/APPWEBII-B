/// traer datos de configuraacion PUERTO
require("dotenv").config();
const Server = require("./server");
/// crear una instancia de servidor y levantarlo
const server = new Server();
/// LEVANTAR EL SERVIDOR
server.listen();
