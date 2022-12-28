(function () {
  /** Las variables y funciones que declaremos en este archivo se quedan de forma local **/

  /* Variable global para la base de datos**/
  let DB;
  const listadoClientes = document.querySelector('#listado-clientes');

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();

    if(window.indexedDB.open('crm',1)){
        // Si logra abrir con éxito la base de datos 
        obtenerClientes();
    }

    listadoClientes.addEventListener('click',eliminarRegistro);

  });


  // Crea la base de datos de IndexDB
  function crearDB(){
    /* Abrimos una conexión que se llamará crm */
                    /** Nombre de la db, version**/ 
    const crearDB = window.indexedDB.open('crm',1);

    crearDB.onerror = function(){
        console.log('Hubo un error')
    }

    crearDB.onsuccess = function(){
        /* En caso de que la conexión se haya abierto correctamente le asignamos el resultado a la variable DB */
        DB = crearDB.result;
    }

    crearDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm',{keyPath:'id',autoIncrement:true});

        /* Creamos los diferentes campos **/
                        /* nombre, keyPath, unique **/
        objectStore.createIndex('nombre','nombre',{unique:false});
        objectStore.createIndex('email','email',{unique:true});
        objectStore.createIndex('telefono','telefono',{unique:false});
        objectStore.createIndex('empresa','empresa',{unique:false});
        objectStore.createIndex('id','id',{unique:true});

        /** Todo Correcto **/
        console.log('DB Lista y Creada')
    }
  }

  function obtenerClientes(){
    const abrirConexion = window.indexedDB.open('crm',1);
    abrirConexion.onerror = function(){
      console.log('Hubo un error')
    }

    abrirConexion.onsuccess = function(){
      DB = abrirConexion.result;

      const objectStore = DB.transaction('crm').objectStore('crm');

      objectStore.openCursor().onsuccess = function(e){
        const cursor = e.target.result;
        if(cursor){
            //console.log(cursor.value)
            const {nombre,empresa,email,telefono,id} = cursor.value;
            
            listadoClientes.innerHTML += `
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
              </td>
            </tr>
            `
            cursor.continue();
        }else{
          console.log('No hay más registros')
        }
      }
    }
  }

  function eliminarRegistro(e){
        // Si el elemento al que yo le estoy dando click tiene la clase 'eliminar' quiere decir que le estoy dando al botón eliminar 
    //console.log(e.target.classList)

    if(e.target.classList.contains('eliminar')){
      //console.log('boton eliminar')
      const idEliminar = Number(e.target.dataset.cliente);
      //console.log(idEliminar)

      const confirmar = confirm('Deseas eliminar este cliente?');

      if(confirmar){
         const transaction = DB.transaction(['crm'],'readwrite');
         const objectStore = transaction.objectStore('crm');


         objectStore.delete(idEliminar);

         transaction.oncomplete = function(){
              console.log('eliminado')
              e.target.parentElement.parentElement.remove()
         }

         transaction.onerror = function(){
              console.log('Hubo un error')
         }




      }
    }

  }
})();
