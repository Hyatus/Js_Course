// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  formulario.addEventListener("submit", agregarGasto);
}

// Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    //console.log(this.gastos)
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id); // Traemos todos menos el que estamos tratando de elminar
    this.calcularRestante(); // Recalcula el restante
  }
}

class UI {
  insertarPresupuesto(Presupuesto) {
    const { presupuesto, restante } = Presupuesto;

    // Agregar al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    // Crear el div

    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // Agregando el Mensaje
    divMensaje.textContent = mensaje;

    // Insertar en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    // Quitar el mensaje

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  mostrarGastos(gastos) {
    //console.log(gastos)

    //Limpiamos el HTML
    this.limpiarHTML();

    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      // crear el li

      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center"; // reporta las clases que hay
      // nuevoGasto.setAttribute('data-id',id);
      nuevoGasto.dataset.id = id; // data-id = id

      //console.log(nuevoGasto)

      // Agregar el html del gasto
      nuevoGasto.innerHTML = `
                    ${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

      // Botón para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.innerHTML = `Borrar  &times`;
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };

      nuevoGasto.appendChild(btnBorrar);

      // Agregar al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(Presupuesto) {
    const { presupuesto, restante } = Presupuesto;

    const restanteDiv = document.querySelector(".restante");

    // Comprobar 25%

    if (presupuesto / 4 > restante) {
      // Ya gastamos más del 75%
      console.log("Ya gastaste el 75%");
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      console.log("Gastaste más de la mitad");
      restanteDiv.classList.remove("alert-success", "alert-danger");
      restanteDiv.classList.add("alert-warning");
    } else {
      restanteDiv.classList.remove("alert-warning", "alert-danger");
      restanteDiv.classList.add("alert-success");
    }

    // Si el total es 0 o menor
    if (restante <= 0) {
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
    }else{
        formulario.querySelector('button[type="submit"]').disabled = false;
    }
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }
}
const ui = new UI(); // Instanciamos UI

//  variable para el objeto presupuesto
let presupuesto;

// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("Cuál es tu presupuesto?");

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

// Añade Gastos
function agregarGasto(e) {
  e.preventDefault();

  // Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  // Validar

  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Formato cantidad inválido", "error");
    return;
  }

  // Generar un objet literal 'gasto'

  const gasto = { nombre, cantidad, id: Date.now() };

  // Añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);

  // Envía mensaje de todo OK!
  ui.imprimirAlerta("Gasto agregado correctamente", "correcto");

  //Imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  // Actualizar el restante
  ui.actualizarRestante(restante);

  //Comprobar el presupuesto
  ui.comprobarPresupuesto(presupuesto);

  // Reinicia el formulario
  formulario.reset();
}

function eliminarGasto(id) {
  // Elimina los gastos de la clase
  presupuesto.eliminarGasto(id);

  const { gastos, restante } = presupuesto;
  // Elimina los gastos del HTML
  ui.mostrarGastos(gastos);

  // Volvemos a actualizar el restante

  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
}
