const producto = 'Monitor de 20 Pulgadas';

// Reemplazar un texto de una cadena

console.log(producto);
console.log(producto.replace('Pulgadas','"'));

console.log(producto.replace('Monitor','Monitor Curvo'))

// Slice permite cortar una parte de una cadena de texto 

console.log(producto.slice(0,10));
console.log(producto.slice(10));// Desde la posición hasta el final 
console.log(producto.slice(2,1)); // No nos devuelve nada porque el primero es mayor al segundo 

// Substring es una alternativa a Slice
console.log(producto.substring(0,10)); // Tiene el mismo comportamiento, pero la diferencia es que si hacemos 2,1 les da la vuelta

console.log(producto.substring(2,1)); // Lo modifica a 1,2

// Tomar un caracter de una cadena de texto 
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

