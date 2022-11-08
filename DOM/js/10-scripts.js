// Como crear HTML desde Javascript

// Crear un nuevo enlace en el navbar

const enlace = document.createElement("a");

enlace.textContent = "Nuevo enlace";
console.log(enlace);

// Añadiendo el href

enlace.href = "/nuevo-enlace";
enlace.target = "_blank";
enlace.setAttribute("data-enlace", "nuevo-enlace");
enlace.classList.add("alguna-clase");
console.log(enlace);

enlace.onclick = miFuncion;

// Lo vamos a agregar al navbar

const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(enlace) // -> Se agrega de último
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]); // Aquí tenemos el control de dónde queremos agregar el elemento

function miFuncion() {
  alert("Diste Click");
}

// Crear un card de forma dinámica

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);

// Crear un DIV con la clase de info

const info = document.createElement("div");
info.classList.add("info");

info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

console.log(info)

// Crear la imagen 
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
imagen.classList.add('img-fluid') // La hace responsive


console.log(imagen)

// Crear el card 

const card = document.createElement('div')
card.classList.add('card')

// Asignar la imagen 

card.appendChild(imagen)
card.appendChild(info)

console.log(card)

// Insertar en el HTML 

const contenedor = document.querySelector('.hacer .contenedor-cards')

// contenedor.appendChild(card)
contenedor.insertBefore(card,contenedor.children[0])

