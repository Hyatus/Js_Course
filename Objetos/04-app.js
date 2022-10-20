// Asignar valores a un objeto y asignarlos a una variable

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto.nombre)

const name = producto.nombre;

// Destructuring

const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);



