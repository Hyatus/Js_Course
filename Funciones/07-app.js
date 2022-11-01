// Cómo se comunican las funciones entre sí

function iniciarApp() {
  console.log("INICIANDO APP...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda Función");
  usuarioAutenticado()
}

function usuarioAutenticado(){
    console.log('Usuario autenticado exitosamente')
}

iniciarApp();


