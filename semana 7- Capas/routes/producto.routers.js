const { Router } = require("express");
const { check } = require("express-validator");

const {
  crearProducto,
  actualizarProducto,
  borrarProducto,
  obtenerProducto,
  obtenerProductos,
} = require("../controllers").Producto;

const { validarCampos } = require("../middlewares");

const router = Router();
/// htpp://localhost:3000/api/v1    /productos    /5443525
router.get("/", obtenerProductos);
router.get(
  "/:id",
  [check("id", "Su id de mongo no es Valido").isMongoId()],
  obtenerProducto
);
router.post(
  "/",
  [
    check("nombre", "El nombre es Obligatorio").not().isEmpty(),
    check("precio", "El dato debe ser obligatorio").isNumeric(),
    validarCampos,
  ],
  crearProducto
);
router.put("/:id", actualizarProducto);
router.delete(
  "/:id",
  [check("id", " No es Valido este ID").isMongoId()],
  borrarProducto
);

module.exports = router;
