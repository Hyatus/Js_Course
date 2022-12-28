(function () {

  let DB;
  let idCliente;

  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const telefonoInput = document.querySelector('#telefono');
  const empresaInput = document.querySelector('#empresa');

  const formulario = document.querySelector('#formulario');

  document.addEventListener("DOMContentLoaded", () => {

        conectarDB();

        // Verificar el id de la url 
        const parametrosURL = new URLSearchParams(window.location.search);

        idCliente = parametrosURL.get('id');
        console.log(idCliente);
    
        // Actualiza el registro
        formulario.addEventListener('submit',actualizarCliente);

        if(idCliente){
            setTimeout(()=>{
                obtenerCliente(idCliente);
            },1000);
        }
  });

  function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value === '' || empresaInput.value === '' ||telefonoInput.value === '' || emailInput.value === ''){
            imprimirAlerta('Todos los campos son obligatorios','error')
            return;
        }

        // Actualizar cliente

        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,   
            telefono: telefonoInput.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'],'readwrite')
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = function(){
            imprimirAlerta('Editado correctamente')
            setTimeout(()=>{
                window.location.href = 'index.html';
            },2000);
        }

        transaction.onerror = function(){
            imprimirAlerta('Hubo un error','error')
        }

  }


  function obtenerCliente(id){
    console.log(id)

    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');

    const cliente = objectStore.openCursor();
    cliente.onsuccess = function(e){
        const cursor = e.target.result;

        if(cursor){
            //console.log(cursor.value);
            if(cursor.value.id === Number(id)){
                //console.log(cursor.value)
                llenarFormulario(cursor.value)
            }
            cursor.continue();
        }

    }

    //console.log(objectStore);

  }

  function llenarFormulario(datosCliente){
    const {nombre,email,telefono,empresa} = datosCliente;

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    emailInput.value = email;
  }

  function conectarDB(){
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = function () {
      console.log("Hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;
    };
  }


})();
