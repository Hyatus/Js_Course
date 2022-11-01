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

carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)

//  Eliminar el último elemento de un arreglo 

// carrito.pop()

// console.table(carrito)

//  Eliminar al inicio del arreglo 

// carrito.shift()

// console.table(carrito)

carrito.splice(1,1) // Eliminar un intervalo o hacer una copia en otra variable

console.table(carrito)


