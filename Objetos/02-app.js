// Object Literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Acceder a los valores de un objeto 
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombre']);

// Un problema con los objetos, aunque el objeto es declarado como const sus propiedades si se pueden cambiar o eliminar

producto.disponible = false;

console.log(producto)




