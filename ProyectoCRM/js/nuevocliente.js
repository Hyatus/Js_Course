(function () {
  let DB;
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();
    formulario.addEventListener('submit',validarCliente)
  });



  function validarCliente(e){
    e.preventDefault();
    console.log('Validando')
    // Leer todos los inputs 
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if(nombre === '' || email === '' ||telefono === '' || empresa === ''){
        imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    // Crear un objeto con la información
    const Cliente = {
        nombre,
        email,
        telefono,
        empresa,
        id: Date.now()
    }

    crearNuevoCliente(Cliente);


  }

  function crearNuevoCliente(Cliente){
        const transaction = DB.transaction(['crm'],'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(Cliente);

        transaction.onerror = function(){
            console.log('Hubo un error')
            imprimirAlerta('Error al agregar cliente','error')
        }

        transaction.oncomplete = function(){
            console.log('Cliente Agregado');
            imprimirAlerta('El cliente se agregó correctamente')

            /* Cambiarnos a otra página **/

            setTimeout(()=>{
                window.location.href = 'index.html'
            },3000);
        }        
  }
})();
