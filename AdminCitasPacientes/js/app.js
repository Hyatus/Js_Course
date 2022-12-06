// Seleccionamos todos los inputs
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

// seleccionamos el formulario
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");


let editando;

// UI
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }

  eliminarCita(id){
    this.citas = this.citas.filter(cita => cita.id !== id);
  }

  editarCita(citaActualizada){
    // Utilizamos map porque queremos modificar un elemento, nos crea un nuevo arreglo por lo que sobreescribe todo

    // Itera en cada una de las citas y verifica si tiene el mismo id que la cita actualizada entonces retorna la cita actualizada, se reescribe,  caso contrario retorna la cita normal 
    this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    
  }


}

class UI {
  imprimirAlerta(mensaje, tipo) {
    // Crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    // Agregar clase en base al tipo
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // Mensaje
    divMensaje.textContent = mensaje;

    // Agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    // Quitar la alerta
    setTimeout(() => {
      divMensaje.remove();
    }, 5000);
  }

  imprimirCitas({citas}){

    this.limpiarHTML();

    citas.forEach(cita =>{
      const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
      
      const divCita = document.createElement('div');
      divCita.classList.add('cita','p-3');
      divCita.dataset.id = id; // Atributo perzonalizado

      // Scripting de los elementos de la cita

      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title','font-weight-bolder');
      mascotaParrafo.textContent = mascota;


      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `  
         <span className="font-weight-bolder">Propietario: </span>${propietario}
      `
      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `  
         <span className="font-weight-bolder">Teléfono: </span>${telefono}
      `
      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `  
         <span className="font-weight-bolder">Fecha: </span>${fecha}
      `
      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `  
         <span className="font-weight-bolder">Hora: </span>${hora}
      `
      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `  
         <span className="font-weight-bolder">Sintomas: </span>${sintomas}
      `

      // Boton para eliminar esta cita

      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn','btn-danger','mr-2')
      // Agregando Ícono de Heroicons
      btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>`;

      btnEliminar.onclick = () => eliminarCita(id);


      // Añade un botón para Editar 

      const btnEditar = document.createElement('button');3
      btnEditar.classList.add('btn','btn-info');
      btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
    `;
     btnEditar.onclick = () => cargarEdicion(cita);



      // Agregar los párrafos al divCita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      // Agregar las citas al HTML

      contenedorCitas.appendChild(divCita);

    })
  }

  limpiarHTML(){
    while(contenedorCitas.firstChild){
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }

}

const ui = new UI();
const administrarCitas = new Citas();
// Registrar Eventos
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);
  telefonoInput.addEventListener("input", datosCita);
  fechaInput.addEventListener("input", datosCita);
  horaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);

  formulario.addEventListener("submit", nuevaCita);
}

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
function datosCita(e) {
  // Funcion que se llama cada vez que se escriba en el input
  //console.log(e.target.name)
  citaObj[e.target.name] = e.target.value;
  //console.log(citaObj)
}

//Valida y agrega una nueva cita a la clase de citas

function nuevaCita(e) {
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

  if(editando){
    console.log('Modo Edición')
    ui.imprimirAlerta('Editado correctamente','correcto');

    // Pasar el objeto de la cita a edición
    administrarCitas.editarCita({...citaObj})
    
    
    // Cambiamos el botón de nuevo
    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

    // reseteamos la variable editando
    editando = false;

  }else{
    console.log('Modo Nueva Cita')
    //Generando un Id único
      citaObj.id = Date.now();

   // Creando una nueva cita
   // Realizamos una copia y no le pasamos la referencia directa de citaObj
       administrarCitas.agregarCita({...citaObj});

       // Mensaje de agregado correctamente
       ui.imprimirAlerta('Se agregó correctamente','correcto');
  }
  

  

  // Reinicia los valores del formulario
  formulario.reset();
  // Reiniciar el objeto para la validación
  reiniciarObjeto();

  //Mostar el HTML de las citas
  ui.imprimirCitas(administrarCitas);
}




function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


function eliminarCita(id){
  // Elimina la cita
  administrarCitas.eliminarCita(id);

  // Muestra un mensaje

  ui.imprimirAlerta('La cita se eliminó correctamente','correcto');

  // Refrescar las citas

  ui.imprimirCitas(administrarCitas);

}

// Carga los datos y el modo Edición
function cargarEdicion(cita){
  const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

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
  formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';


  // Habilitando el modo Edición
  editando = true;


}