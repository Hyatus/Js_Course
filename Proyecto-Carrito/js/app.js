const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  // Cuando agregas un curso presionando agregar
  listaCursos.addEventListener("click", agregarCurso);

  // Elimina cursos del carrito 
  carrito.addEventListener("click",eliminarCurso);

  // Vaciar el carrito 

  vaciarCarritoBtn.addEventListener('click',()=>{
    articulosCarrito = [];
    limpiarHTML();
    console.log('Vaciando Carrito')
  })
}

// Funciones

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        // Elimina del arreglo por el data-id 

        articulosCarrito = articulosCarrito.filter(curso=>curso.id !== cursoId);

        console.log(articulosCarrito)

        carritoHTML();

    }
    
}

function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target.parentElement.parentElement);
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del html al que dimos click y extrae la información del curso

function leerDatosCurso(curso) {
  //console.log(curso)
  // Crear un objeto con el contenido del curso actual

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  // Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(curso => curso.id === infoCurso.id )

  if(existe){
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map(curso=>{
        if(curso.id === infoCurso.id){
            curso.cantidad += 1;
            return curso; // retorna el objeto actualizado
        }else{
            return curso; // retorna los objetos que no son duplicados pero siguen siendo importantes para el carrito de compras
        }
    })
    articulosCarrito = [...cursos]
  }else{
    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);
  carritoHTML();
  // console.log(infoCurso)
}

function carritoHTML() {
  // Limpiar al HTML 
    limpiarHTML();
  
  // recorre el carrito y genera el HTML 
  articulosCarrito.forEach((curso) => {

    const {titulo,precio,cantidad,id} = curso;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
           <img src="${curso.imagen}" width="100"> 
        </td>
         <td>${titulo}</td>
         <td>${precio}</td>
         <td>${cantidad}</td>
         <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>  
         </td>
        `;

    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// Elimina los cursos del table body

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        // Si el contenedor tiene al menos un elemento se sigue ejecutando 
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    // Forma lenta 
    // contenedorCarrito.innerHTML = ' ';
}
