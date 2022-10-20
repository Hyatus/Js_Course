// Contar los espacio en blanco 

const producto = '  Television de 24 pulgadas  ';

// Eliminar espacios en blanco 
console.log(producto)
console.log(producto.length);

console.log(producto.trimStart()); // Elimina los espacios al Inicio
console.log('-'+producto.trimEnd()+'-'); // Elimina los espacios al final 

console.log('+'+producto.trimStart().trimEnd()+'+'); // Encadenamos las funciones 