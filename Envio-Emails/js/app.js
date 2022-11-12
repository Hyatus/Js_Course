// Ejecuta el código luego de que se haya cargado todo nuestro HTML

document.addEventListener("DOMContentLoaded", function () {
  //Seleccionar los elementos de la interfaz

  const inputEmail = document.querySelector("#email");

  const inputAsunto = document.querySelector("#asunto");

  const inputMensaje = document.querySelector("#mensaje");

  const formulario = document.querySelector('#formulario')

  // Asignar Eventos

  inputEmail.addEventListener("blur", validar);

  inputAsunto.addEventListener("blur", validar);

  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    // console.log("Desde validar");
    console.log("Entrada: ", e.target.value);
    if (e.target.value.trim() === "") {
      mostrarAlerta();
    } else {
      console.log("Hay algo ");
    }
  }

  function mostrarAlerta() {
    // Generar la alerta con HTML

    const error = document.createElement("P");

    error.textContent = `
        Hubo un error...
    `;

    error.classList.add('bg-red-600','text-white','p-2','text-center');
    
    // Inyectar el error al formulario 
    formulario.appendChild(error);

    console.log(error);
  }
});
