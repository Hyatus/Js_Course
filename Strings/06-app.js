// Repeat y Split

const producto = "Monitor de 20 pulgadas";

// .repeat permite repetir una cadena de texto
// Si le colocamos decimales al valor la función redondea el valor
const texto = "En promocion".repeat(3);
console.log(texto);

console.log(`${producto} ${texto} !!!`);

// Split divide un string

const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" ")) // Que las divida por espacios, devuelve un array 

const hobbies = 'Leer,caminar,escuchar música, escribir, aprender a programar';

console.log(hobbies.split(','));
const  tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split('#'));