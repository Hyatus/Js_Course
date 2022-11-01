// Destructuring de Arrays

const producto = {
    nombre:"Monitor de 32 pulgadas",
    precio: 300,
    disponible: true
}


const {nombre,precio,disponible} = producto; // Haciendo destructuring de un objeto 
console.log(nombre)

carrito = [];

// Destructuring con arreglos 

const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros; // A diferencia de los objetos se puede colocar cualquier nombre a la variable 

console.log(primero) // Accediendo al primero valor
