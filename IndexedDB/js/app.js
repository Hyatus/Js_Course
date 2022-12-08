let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(()=>{
    crearCliente();
  },5000);


});

function crmDB() {
  // Crear base de datos v.1.0

  let crmDB = window.indexedDB.open("crm", 1.1);

  // Si hay error

  crmDB.onerror = function () {
    console.log("Hubo un error al crear");
  };
  // Si se creo bien

  crmDB.onsuccess = function () {
    console.log("Base de datos creada");

    DB = crmDB.result;
    console.log(DB);
  };

  // Configuración de la base de datos

  crmDB.onupgradeneeded = function(e) {
    // el evento que se va a correr tomamos la base de datos
    let db = e.target.result;

    // definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
    // keypath es de donde se van a obtener los indices
    let objectStore = db.createObjectStore('crm', { keyPath: 'crm',  autoIncrement: true } );

    //createindex, nombre y keypath, 3ro los parametros, keypath esn este caso sera el indice para poder realizar busquedas
    objectStore.createIndex('nombre', 'nombre', { unique: false } );
    objectStore.createIndex('email', 'email', { unique: true } );
    objectStore.createIndex('telefono', 'telefono', { unique: false } );

    console.log('DB creada y lista');
  }
}

function crearCliente() {

    // Crear un nuevo registro

    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(event) {
        console.log('Transacción Completada');
    };
    
    transaction.onerror = function(event) {
        console.log('Hubo un error en la transacción')
        console.log(event)
    };

    let objectStore = transaction.objectStore('crm');
    console.log(objectStore);

    const nuevoCliente = {
        nombre : "Juan",
        email: "correo@correo.com",
        telefono: 1020912
    }


    let peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}

