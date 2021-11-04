const axios = require("axios").default;
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const cron = require("node-cron");

const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");

cron.schedule("* * * * *", async () => {
  // TODO:
  // Conectar la base de datos
  // console.log(respuestaConexion);

  try {
    const respuestaConexion = await mongoose.connect(MONGO_URI);
    // Obtener el HTML de la PG de CNN
    const html = await axios.get("https://cnnespanol.cnn.com/");
    // console.log(html.data);
    // Obtenr la Noticia Utilizando Cheerio
    const $ = cheerio.load(html.data);

    const titulos = $(".news__title");
    console.log(titulos);
    let arregloNoticias = [];
    // Recorrer los nodos para irlos agregando en la base de datos
    titulos.each((index, element) => {
      const Noticia = {
        titulo: $(element).text().toString(),
        enlance: $(element).children().attr("href"),
      };
      arregloNoticias = [...arregloNoticias, Noticia];
    });
    // Agregar en la base de datos
    await Noticias.create(arregloNoticias);
  } catch (err) {
    console.log(err);
  }
});
