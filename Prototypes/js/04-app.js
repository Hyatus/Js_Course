// Heredar un Prototype 


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  
  // Método Exclusivo del Cliente
  Cliente.prototype.tipoCliente = function () {
    // Function busca en los datos del mismo objeto
    console.log("Desde mi nuevo proto!! ");
    console.log(this.saldo);
    let tipo;
  
    if (this.saldo > 10000) {
      tipo = "Gold";
    } else if (this.saldo > 5000) {
      tipo = "Platino";
    } else {
      tipo = "Normal";
    }
  
    return tipo;
  };


  function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre,saldo); // Hereda nombre y saldo 
    this.telefono = telefono;

  }

 // Pasar el prototype de Cliente a Persona
// Se debe crear antes de la instancia
 Persona.prototype = Object.create(Cliente.prototype);


const juan = new Persona('Juan',400,232323);


console.log(juan.tipoCliente())