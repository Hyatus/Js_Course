"use estrict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}
// Sellar el objeto a diferencia de Freeze no se pueden agregar ni quitar propiedades pero si se pueden modificar 
Object.seal(producto);

producto.disponible= false;

console.log(producto)


