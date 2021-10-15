class Persona {
  constructor(nombre, apellido) {
    (this.nombre = nombre), (this.apellido = apellido);
  }
  getNombrecompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}
const persona = new Persona("Maria", "Lucas");
// console.log(persona);
let nombrec = persona.getNombrecompleto();
console.log(nombrec);
