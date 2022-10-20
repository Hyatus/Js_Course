// Object Literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Agregando más propiedades a nuestro objeto
producto.imagen = "imagen.jpg";

console.log(producto)

// Eliminar propiedad
delete producto.disponible;

console.log(producto)

