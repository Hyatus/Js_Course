import Citas from './clases/citas.js';
import UI from './clases/ui.js';
import {mascotaInput,
        telefonoInput,
        propietarioInput,
        fechaInput,
        horaInput,
        sintomasInput, 
        formulario} from './selectores.js';


        
// UI
const ui = new UI();
const administrarCitas = new Citas();

let editando;

// Objetos con información del objeto
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

// Agrega datos al Objeto de cita
export function datosCita(e) {
  // Funcion que se llama cada vez que se escriba en el input
  //console.log(e.target.name)
  citaObj[e.target.name] = e.target.value;
  //console.log(citaObj)
}

//Valida y agrega una nueva cita a la clase de citas
export function nuevaCita(e) {
  e.preventDefault();

  // Extraer la información del objeto de cita

  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  // Validar
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    //console.log('Todos los campos son obligatorios')
    return;
  }

  if (editando) {
    console.log("Modo Edición");
    ui.imprimirAlerta("Editado correctamente", "correcto");

    // Pasar el objeto de la cita a edición
    administrarCitas.editarCita({ ...citaObj });

    // Cambiamos el botón de nuevo
    formulario.querySelector('button[type="submit"]').textContent =
      "Crear Cita";

    // reseteamos la variable editando
    editando = false;
  } else {
    console.log("Modo Nueva Cita");
    //Generando un Id único
    citaObj.id = Date.now();

    // Creando una nueva cita
    // Realizamos una copia y no le pasamos la referencia directa de citaObj
    administrarCitas.agregarCita({ ...citaObj });

    // Mensaje de agregado correctamente
    ui.imprimirAlerta("Se agregó correctamente", "correcto");
  }

  // Reinicia los valores del formulario
  formulario.reset();
  // Reiniciar el objeto para la validación
  reiniciarObjeto();

  //Mostar el HTML de las citas
  ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

export function eliminarCita(id) {
  // Elimina la cita
  administrarCitas.eliminarCita(id);

  // Muestra un mensaje

  ui.imprimirAlerta("La cita se eliminó correctamente", "correcto");

  // Refrescar las citas

  ui.imprimirCitas(administrarCitas);
}

// Carga los datos y el modo Edición
export function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

  // Llenar los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  // Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.hora = hora;
  citaObj.fecha = fecha;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  // Cambiar el texto del botón
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";

  // Habilitando el modo Edición
  editando = true;
}
