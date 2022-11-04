// Modificar elementos

const encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

encabezado.innerText; // Trae texto visible
encabezado.textContent; // Trael el texto aunque en CSS la visibilty sea hidden
encabezado.innerHTML; // Trae el HTML

const nuevoHeading = "Nuevo Heading";
document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

const image = document.querySelector(".card img");
image.src = "img/hacer2.jpg";
console.log(image);



