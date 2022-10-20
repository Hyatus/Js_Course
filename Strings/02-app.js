// Métodos para los Strings 

const producto = "Monitor de 20 pulgadas";
console.log(producto);

// Lenght para saber la longitud de una cadena
console.log(producto.length);

// Nos devuelve el índice si es que la palabra 'Monitor' se encuentra dentro de la cadena
console.log(producto.indexOf('Monitor'));


// Método includes 
console.log(producto.includes('Tablet')) // -> Devuelve False porque la palabra no existe
console.log(producto.includes('Monitor')) // -> Devuelve True porque sí está dentro de la cadena

