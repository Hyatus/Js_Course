// Eliminar los elementos del DOM

const primerEnlace = document.querySelector('a')

console.log(primerEnlace)

// Elimnar un elemento por si mismo 
//primerEnlace.remove();

// Elmiminar un elemento desde el padre
const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)

navegacion.removeChild(navegacion.children[2])