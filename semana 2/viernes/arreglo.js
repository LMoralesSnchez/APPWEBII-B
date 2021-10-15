const platos = ["arroz con pollo", "chaulao", "encebollado", "ceviche"];
const otrosPlatos = ["triguillo", "bolon"];
// console.log(platos.includes("ceviche"));
const unionPlatos = [...platos, ...otrosPlatos];

// const unionPlatos = [`${platos} ${otrosPlatos}`];
console.log(unionPlatos);
