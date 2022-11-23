// Constuctores

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function () {
  // En este caso sí se utiliza function porque quiero acceder a los datos del objeto

  /* Si es la opción:
        1 - Americano - Aumenta 1.15
        2 - Asiatico - Aumenta 1.05
        3 - Europeo - Aumenta en 1.35
    */

  let cantidad;
  const base = 2000;

  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }
  // Leer el año
  const diferencia = new Date().getFullYear() - this.year;
  // Cada año la diferencia es mayor el costo se reduce un 3% por año
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /*

    Si el seguro es básico se múltiplica por un 30% más 
    Si el seguro es completo se multiplica por un 50% más
  */

  if (this.tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  return cantidad;
};

function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(); // Toma el año actual
  const min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

// Prototype muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement("DIV");

  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }

  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  // Insertar en HTML
  const formulario = document.querySelector("#cotizar-seguro");

  // Se coloca el nuevo nodo y el nodo de referencia
  formulario.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

// Prototype para mostrar el resultado de la cotización
UI.prototype.mostrarResultado = (seguro, total) => {

  // Destructuring de seguro 

  const {marca,year,tipo} = seguro;

  let textoMarca;

  switch(marca){
    case '1':
        textoMarca = 'Americano';
        break;
    case '2':
        textoMarca = 'Asiatico';
        break;
    case '3':
        textoMarca = 'Europeo';
        break;
    default:
        break;
  }

  // Crear el resultado
  const div = document.createElement("div");

  
  div.classList.add('mt-10');
  div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
    <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">${total}</span></p>
  `

  const resultadoDiv = document.querySelector('#resultado')
  
  // Mostar el spinner
  const spinner = document.querySelector('#cargando');
  spinner.style.display = 'block';
  
  setTimeout(()=>{
      spinner.style.display = 'none';
      resultadoDiv.appendChild(div);
  },3000);
  
};


// Instanciar UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); // Llena el select con los años
});

eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  // Leer la marca seleccionada
  const marca = document.querySelector("#marca").value;

  // Leer el año
  const year = document.querySelector("#year").value;

  // Leer el tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    return;
  }

  ui.mostrarMensaje("Cotizando...", "correcto");

  // Ocultar las cotizaciones previas

  const resultados = document.querySelector('#resultado div'); // Seleccionamos el div dentro de resultado

  if(resultados !== null){
    resultados.remove()
  }

  // Instanciar el seguro
  const seguro = new Seguro(marca, year, tipo);

  // Utilizar el prototype que va a cotizar
  const total = seguro.cotizarSeguro();

  ui.mostrarResultado(seguro,total);
}
