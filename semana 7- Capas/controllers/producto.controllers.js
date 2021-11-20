const { Producto } = require("../models");
const { response } = require("express");

/// GET http://localhost:3000/api/productos ?limite=100?desde=0
const obtenerProductos = async (req, res = response) => {
  const { limite = 10, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, productos] = await Promise.all([
    Producto.countDocuments(query),
    Producto.find(query).skip(desde).limit(limite),
  ]);

  res.json({
    total,
    productos,
  });
};
/// GET http://localhost:3000/api/productos/44343
const obtenerProducto = async (req, res = response) => {
  const { id } = req.params;
  const producto = await Producto.findById(id);
  res.json(producto);
};
/// POST http://localhost:3000/api/productos/  body{ nombre, precio, costo}
const crearProducto = async (req, res = response) => {
  const { estado, ...body } = req.body;

  const existeProducto = await Producto.findOne({ nombre: body.nombre });
  if (existeProducto) {
    return res.status(400).json({
      msg: `El producto con nombre ${existeProducto} ya existe`,
    });
  }

  const data = {
    ...body,
    nombre: body.nombre,
  };

  const producto = new Producto(data);
  const productoNuevo = await producto.save();
  res.status(200).json(productoNuevo);
};
/// PUT http://localhost:3000/api/productos/4354354
/// body {nombre, precio}
const actualizarProducto = async (req, res = response) => {
  const { id } = req.params;
  const { estado, ...data } = req.body;
  const productoModificado = await Producto.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.json(productoModificado);
};
/// DELETE http://localhost:3000/api/productos/4354354
const borrarProducto = async (req, res = response) => {
  const { id } = req.params;
  const productoBorrado = await Producto.findByIdAndUpdate(
    id,
    { estado: false },
    {
      new: true,
    }
  );
  res.json(productoBorrado);
};

module.exports = {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  borrarProducto,
};
