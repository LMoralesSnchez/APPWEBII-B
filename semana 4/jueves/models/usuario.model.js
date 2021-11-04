const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const UsuariosSchema = new Schema(
  {
    nombre: { type: String },
    nick: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = Mongoose.model("Usuarios", UsuariosSchema);
