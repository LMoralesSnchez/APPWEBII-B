const mongoose = require("mongoose");

const conecion =
  "mongodb+srv://Expo_MongoDB:expo_mongoose@cluster0.svi74.mongodb.net/Producto?retryWrites=true&w=majority";

mongoose
  .connect(conecion)
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });
const Usuario = mongoose.model("usuario", {
  nombre: String,
});

const Usuario1 = new Usuario({
  nombre: "Leixer",
});

// Usuario1.save();

Usuario.find().then((respuesta) => {
  console.log(respuesta);
});
