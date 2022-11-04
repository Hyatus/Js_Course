//.Every 

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Mouse", precio: 500 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Audifonos", precio: 500 },
  ];


const resultado = carrito.every(producto => producto.precio<1000); // Se cumple sólo si todos son menores a mil

const resultado2 = carrito.some(producto => producto.precio < 1000); // Si alguno cumple con la condición es true 

console.log(resultado)

