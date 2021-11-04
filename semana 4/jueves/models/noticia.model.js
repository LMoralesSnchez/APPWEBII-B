const Mongoose = require("mongoose");

const { Schema, Mongoose } = require("mongoose");

const NoticiaSchema = new Schema(
  {
    titulo: {
      type: String,
    },
    enlace: {
      type: String,
    },
  },
  {
    timestamps: { createAt: true, updateAt: true },
  }
);
module.exports = Mongoose.model("Noticias", NoticiaSchema);
