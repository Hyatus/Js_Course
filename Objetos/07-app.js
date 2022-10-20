
// Utilizando el modo estricto  "use estrict"
"use estrict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

producto.imagen = "imagen.jpg"
console.log(producto)


// Prevenir que un objeto se modificado 

Object.freeze(producto);

producto.disponible = false;
producto.pais = 'USA';
console.log(producto);


