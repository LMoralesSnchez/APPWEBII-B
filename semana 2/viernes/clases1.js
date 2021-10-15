let prueba = "555";
const persona = {
  nombre: "Jose",
  apellido: "zambrano",
  esEstudiante: true,
  prueba: prueba,
  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  geolocalizacion: {
    lat: 14.123,
    lng: 11.235,
  },
};
// console.log(persona);
// persona.nombre = "Steven";
const estudiante = { ...persona };
estudiante.nombre = "Steven";
// console.log(persona);
// console.log(estudiante);

function mostrarDatos({ nombre, geolocalizacion: { lat, lng } }) {
  console.log(nombre), console.log(lat), console.log(lng);
}
mostrarDatos(persona);
