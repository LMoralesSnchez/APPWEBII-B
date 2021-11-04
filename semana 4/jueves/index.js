const axios = require("axios").default;
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const cron = require("node-cron");
const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");

// mongoose.connect(MONGO_URI).then((respuesta) => {
//   console.log(respuesta);
// });
const funcionx = async () => {
  const respuestaConexion = await mongoose.connect(MONGO_URI);
  //obtenet el html de la pagina cnn
  const html = await axios.get("https://cnnespanol.cnn.com/");
  // console.log(html);
  const $ = cheerio.load(html.data);
  const titulos = $("news__title");
  // console.log(titulos);
  titulos.each((index, element) => {
    const Noticia = {
      titulo: $(element).text().toString(),
      enlace: $(element).children().attr("href"),
    };
    Noticias.create(Noticia);
  });
};
