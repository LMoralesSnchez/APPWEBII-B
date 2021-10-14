function saludar(nombre) {
  return `Como se llamais 1 ${nombre}`;
}
const saludar2 = function (nombre) {
  return `Como se llamais 2 ${nombre}`;
};
const saludar3 = (nombre) => {
  return `Como se llamais 3 ${nombre}`;
};
// console.log(saludar2("jhon"));

function mostrarSaludoPorConsola(fn, parametro) {
  console.log(fn(parametro));
}
mostrarSaludoPorConsola(saludar2, "Pato");
