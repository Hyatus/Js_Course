// Ejecuta el código luego de que se haya cargado todo nuestro HTML

document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  //Seleccionar los elementos de la interfaz

  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  // Asignar Eventos
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  btnReset.addEventListener("click", (e) => {
    //e.preventDefault();
    // Reiniciar el objeto
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();

    comprobarEmail();
  });
  formulario.addEventListener("submit", enviarEmail);

  function validar(e) {
    // console.log("Desde validar");
    //console.log('Parent Element',e.target.parentElement)
    //console.log("Entrada: ", e.target.id);
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio! `,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail(mensaje);
      return; // Mostramos la alerta y detenemos la ejecución del código
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta(`El email no es válido! `, e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    //console.log('Después del IF')
    limpiarAlerta(e.target.parentElement);

    // Asignar los valores

    email[e.target.name] = e.target.value.trim().toLowerCase();

    // Comprobar email

    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      // De cada div busca si hay un elemento con la clase bg-red-600
      alerta.remove();
    }
    // Generar la alerta con HTML
    const error = document.createElement("P");

    error.textContent = `${mensaje}`;

    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Inyectar el error al formulario

    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    // console.log('Desde limpiar alerta')
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      // De cada div busca si hay un elemento con la clase bg-red-600
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    // console.log(email)
    const vacio = Object.values(email).includes(""); // Devuelve un arregllo únicamente con los valores del objeto

    if (vacio) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      // Reiniciar el objeto
      email.email = "";
      email.asunto = "";
      email.mensaje = "";

      formulario.reset();

      comprobarEmail();

      // Alerta 

      const alertaExito = document.createElement('P');
      alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10','font-bold','text-sm','uppercase');

      alertaExito.textContent = 'Mensaje enviado correctamente'

      formulario.appendChild(alertaExito);


      setTimeout(()=>{
        alertaExito.remove();
      },3000);


    }, 3000);
  }
});
