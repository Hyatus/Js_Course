// querySelector

const card = document.querySelector('.card')

console.log(card) // retorna el primero que encuentra


// Podemos tener selectores especìficos como en CSS

const info = document.querySelector('.premium .info')

console.log(info)


// Segundo Card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')

console.log(segundoCard)


// Seleccionar id formulario 

const formulario = document.querySelector('#formulario')

console.log(formulario)

// Seleccionar elementos HTML

const navegacion = document.querySelector('nav')

console.log(navegacion)

