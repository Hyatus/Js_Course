// Hacer una copia de un objeto
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};



console.log(producto);
console.log(medidas);

// Unir 2 objetos
const resultado = Object.assign(producto, medidas);

console.log(resultado);

// Spread Operator

const res2 = { ...producto, ...medidas };
console.log(res2);
