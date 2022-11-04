// Seleccionar elementos por su clase

let elemento;

const header = document.getElementsByClassName("header");

console.log(header);


const hero = document.getElementsByClassName("hero");
console.log(hero);

// Si las clases existen más de una vez 


const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores) // Trae múltiples elementos

const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste) // Devuelve un arreglo vacío

