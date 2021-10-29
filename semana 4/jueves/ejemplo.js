const mongoose = require("mongoose");

const conecion =
  "mongodb+srv://Expo_MongoDB:expo_mongoose@cluster0.svi74.mongodb.net/Producto?retryWrites=true&w=majority";

// .then((respuesta) => {
//   console.log(respuesta);
// })
// .catch((error) => {
//   console.log(error);
// });
(async () => {
  const estado = await mongoose.connect(conecion);
  const Usuario = mongoose.model("usuario", {
    nombre: String,
  });
  const Usuario1 = new Usuario({
    nombre: "Majo",
  });

  const guardoUsuario = await Usuario1.save();
  const resultado = await Usuario.find();
  console.log(resultado);
})();

// .then((respuesta) => {
//   console.log(respuesta);
// });
