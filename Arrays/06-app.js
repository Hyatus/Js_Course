// Spread operator
const carrito = []; // Carrito de compras

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 1200,
};

const producto3 = {
  nombre: "Teclado",
  precio: 3000,
};

let resultado = [...carrito, producto];


console.table(resultado)

resultado = [...resultado,producto2, producto3]

console.table(resultado)

