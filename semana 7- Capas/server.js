/// CREAR SERVIDORR EXPRESS
const express = require("express");
const cors = require("cors");

const { dbConnecion } = require("./database/config");

class Server {
  constructor() {
    this.app = express.Router();
    this.router = express.Router();
    this.port = process.env.PORT;

    this.paths = {
      productos: "/api/productos",
      grupos: "/api/productos",
      categorias: "/api/categorias",
    };
    this.conectarDB();
    this.middlewares();
    this.routes();
    this.router.use("/v1/pruebas", this.app);

    this._express = express().use(this.router);
  }
  /// ASOCIAR RUTAS, MIDDKEWARES, LEVANTAR BASE DE DATOS
  async conectarDB() {
    await dbConnecion();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.paths.productos, require("./routes/producto.routers"));
    this.app.use(this.paths.categorias, require("./routes/categoria.routers"));
  }
  listen() {
    this._express.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
module.exports = Server;
