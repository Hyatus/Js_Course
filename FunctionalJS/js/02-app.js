// Funciones como argumentos 


const suma = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

/* Función como argumento */
const resultado = fn => fn(10,20);

console.log(resultado(multiplicar));
console.log(resultado(suma));

