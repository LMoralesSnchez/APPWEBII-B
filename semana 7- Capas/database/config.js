const mongoose = require("mongoose");

const dbConnecion = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Base de datos corriendo.....");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};
module.exports = {
  dbConnecion,
};
