const mongoose = require("mongoose");
const { Schema } = mongoose;
const UsuariosSchema = new Schema(
  {
    nombre: { type: String },
    nick: { type: String },
  },
  {
    timestamps: { createAt: true, updateAt: true },
  }
);

module.exports = mongoose.model("Usuarios", UsuariosSchema);
