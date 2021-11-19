const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  estado: {
    type: Boolean,
    default: true,
    require: true,
  },
  precio: {
    type: Number,
    default: true,
  },
  costo: {
    type: Number,
    default: true,
  },
  minimo: {
    type: Number,
    default: 0,
  },
});

ProductoSchema.methods.toJSON = function () {
  const { __v, estado, ...data } = this.toObject();
  return data;
};

module.exports = model("Producto", ProductoSchema);
