document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); // Muestra los automoviles al cargar

  llenarSelect(); // Llena las opciones de años
});

//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear(); // Año actual
const min = max - 10; // Año mínimo Actual - 10

// Generar un objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// ------- Event Listener para los select de búsqueda --->

marca.addEventListener("change", (e) => {
  datosBusqueda["marca"] = e.target.value;
  // console.log(datosBusqueda)

  filtrarAuto();
});
year.addEventListener("change", (e) => {
    datosBusqueda["year"] = e.target.value;
    // console.log(datosBusqueda)
    filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda["minimo"] = e.target.value;
  // console.log(datosBusqueda)
   filtrarAuto();
});
maximo.addEventListener("change", (e) => {
    datosBusqueda["maximo"] = e.target.value;
    // console.log(datosBusqueda)
    filtrarAuto();
});
puertas.addEventListener("change", (e) => {
    datosBusqueda["puertas"] = e.target.value;
    // console.log(datosBusqueda)
    filtrarAuto();
});
transmision.addEventListener("change", (e) => {
    datosBusqueda["transmision"] = e.target.value;
    // console.log(datosBusqueda)
    filtrarAuto();
});
color.addEventListener("change", (e) => {
    datosBusqueda["color"] = e.target.value;
    // console.log(datosBusqueda)
    filtrarAuto();
});

// ------ Funciones ------>

// Llenando los años del select
function llenarSelect() {
  for (let i = max; i > min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

function mostrarAutos(autos) {
  
  limpiarHTML();
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
            ${marca} - ${modelo} - ${year}- ${puertas} Puertas - Transmision: ${transmision}- Precio: ${precio} - Color: ${color}    
            `;

    // Insertar en el html
    resultado.appendChild(autoHTML);
  });
}

// Funcion que filtra en base a la búsqueda

function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca)
                         .filter(filtrarYear)
                         .filter(filtrarMinimo)
                         .filter(filtrarMaximo)
                         .filter(filtrarPuertas)
                         .filter(filtrarTransmision)
                         .filter(filtrarColor);

  
  if(resultado.length){
      mostrarAutos(resultado);                        
  }else{
    noResultado();
  }                       
  console.log(resultado)
}


function noResultado(){
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'NO HAY RESULTADOS :(';
    limpiarHTML();
    resultado.appendChild(noResultado);

}
function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (datosBusqueda.marca) {
    return auto.marca === marca;
  }
   return auto; // Trae todos los elementos de regreso no filtrados
}

function filtrarYear(auto){
    const { year } = datosBusqueda;
    if (year) {
      return parseInt(auto.year) === parseInt(year);
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if (minimo) {
      return parseInt(auto.precio) >= parseInt(minimo);
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if (minimo) {
      return parseInt(auto.precio) >= parseInt(minimo);
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}
function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if (maximo) {
      return parseInt(auto.precio) <= parseInt(maximo);
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}
function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if (puertas) {
      return parseInt(auto.puertas) === parseInt(puertas);
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if (transmision) {
      return auto.transmision === transmision;
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if (color) {
      return auto.color === color;
    }
     return auto; // Trae todos los elementos de regreso no filtrados
}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}



