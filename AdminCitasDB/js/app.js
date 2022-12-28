// Variable global para la base de datos
let DB;
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

  imprimirCitas(){

    this.limpiarHTML();

    // Leemos lo que tenemos en la base de datos
    const objectStore = DB.transaction('citas').objectStore('citas');      
     

    objectStore.openCursor().onsuccess = function(e){
            // cursor se va a ubicar en el registro indicado para accede ra los datos
            const cursor = e.target.result;

            if(cursor) {

                const {mascota, propietario, telefono, fecha, hora, sintomas, id } = cursor.value;

                const divCita = document.createElement('div');
                divCita.classList.add('cita', 'p-3');
                divCita.dataset.id = id;

                // scRIPTING DE LOS ELEMENTOS...
                const mascotaParrafo = document.createElement('h2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.innerHTML = `${mascota}`;

                const propietarioParrafo = document.createElement('p');
                propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

                const telefonoParrafo = document.createElement('p');
                telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

                const fechaParrafo = document.createElement('p');
                fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

                const horaParrafo = document.createElement('p');
                horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

                const sintomasParrafo = document.createElement('p');
                sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

                // Agregar un botón de eliminar...
                const btnEliminar = document.createElement('button');
                btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
                btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
                btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

                // Añade un botón de editar...
                const btnEditar = document.createElement('button');
                btnEditar.onclick = () => cargarEdicion(cursor.value);

                btnEditar.classList.add('btn', 'btn-info');
                btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

                // Agregar al HTML
                divCita.appendChild(mascotaParrafo);
                divCita.appendChild(propietarioParrafo);
                divCita.appendChild(telefonoParrafo);
                divCita.appendChild(fechaParrafo);
                divCita.appendChild(horaParrafo);
                divCita.appendChild(sintomasParrafo);
                divCita.appendChild(btnEliminar)
                divCita.appendChild(btnEditar)

                contenedorCitas.appendChild(divCita);

            }// fin de if


        }// Fin de función de cursor...

  }

  limpiarHTML(){
    while(contenedorCitas.firstChild){
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }

}

const administrarCitas = new Citas();
const ui = new UI();

document.addEventListener('DOMContentLoaded',()=>{
  //console.log('Documento Listo');
  eventListeners();
  crearDB();
  
})


// Registrar Eventos
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



    // Insertar registro en indexDB
    const transaction = DB.transaction(['citas'], 'readwrite');

    // Habilitar el ObjectStore
    const objectStore = transaction.objectStore('citas');


    // Insertar en la base de datos
    const peticion = objectStore.add(citaObj);    //-> Guarda el objeto
    
    transaction.oncomplete = (e) =>{
        console.log('Cita Agregada');
        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente','correcto');
    }

    transaction.onerror = () => {
        console.log('Hubo un error')
    }

  }
  

  

  // Reinicia los valores del formulario
  formulario.reset();
  // Reiniciar el objeto para la validación
  reiniciarObjeto();

  //Mostar el HTML de las citas
  // ui.imprimirCitas(administrarCitas);
  ui.imprimirCitas();
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
  ui.imprimirCitas();

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

function crearDB(){
  // La base de datos en versión 1.0

  const crearDB = window.indexedDB.open('citas',1);


  // Si hay un error
  crearDB.onerror = function(e){
    console.log('Hubo un error')
  }

  // Si todo sale bien 
  crearDB.onsuccess = function(e){
    console.log('Base de datos creada')

    DB = crearDB.result;
    console.log(DB);

  }

  // Definir el schema
  crearDB.onupgradeneeded = function(e){
    const db = e.target.result;

    const objectStore = db.createObjectStore('citas',{
      keyPath: 'id',
      autoIncrement: true
    });


    //Definir todas las columnas 
    //                       nom-col   keypath
    objectStore.createIndex('mascota','mascota',{unique:false});
    objectStore.createIndex('propietario','propietario',{unique:false});
    objectStore.createIndex('telefono','telefono',{unique:false});
    objectStore.createIndex('fecha','fecha',{unique:false});
    objectStore.createIndex('hora','hora',{unique:false});
    objectStore.createIndex('sintomas','sintomas',{unique:false});
    objectStore.createIndex('id','id',{unique:true});


    console.log('DB creada y lista!')
    
  }

}