const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

// Método para agregar al final 
meses.push('Agosto');

console.table(meses)

const carrito = []; // Carrito de compras

const producto = {
    nombre:'Monitor 32 pulgadas',
    precio: 400
}

carrito.push(producto)

console.log(producto)

const producto2 = {
    nombre:'Celular',
    precio:1200
}

// Agrega el elemento al inicio del arreglo 
carrito.unshift(producto2);

console.log(carrito)

