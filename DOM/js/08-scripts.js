// Recorrer el DOM - Traversing the DOM


const navegacion = document.querySelector('.navegacion')
console.log(navegacion.childNodes) // Los espacios en blanco son considerados elementos también 

console.log(navegacion.children) // este solo selecciona los elementos sin espacios, elementos html 


// Recorrer desde los padres a los hijos

console.log(navegacion.children[0].nodeName)
console.log(navegacion.children[0].nodeType)


const card = document.querySelector('.card');

console.log(card.children)

card.children[1].children[1].textContent = 'Nuevo Heading'

console.log(card.children[1].children[1].textContent)

card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0])


// Recorrer desde los hijos a los padres
console.log(card.parentElement.parentElement);


console.log(card.nextElementSibling) // Selecciona a los elementos hermanos

console.log(card.nextElementSibling.nextElementSibling) // Selecciona a los elementos hermanos

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling)
// Selecciona el nodo hermano de adelante hacia atrás


console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)

