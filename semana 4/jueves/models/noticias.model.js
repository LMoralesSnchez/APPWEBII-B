const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoticiaSchema = new Schema(
  {
    titulo: { type: String },
    enlance: { type: String },
  },
  {
    timestamps: { createAp: true, updateAt: true },
  }
);

module.exports = mongoose.model("Noticias", NoticiaSchema);
