class Cliente {
  // Hace la propiedad privada
  #nombre;
  // Class declaration
  constructor(nombre, saldo) {
    this.#nombre = nombre,
    this.saldo = saldo;
  }


  setNombre(nombre){
    this.#nombre = nombre;
  }
  
  getNombre(){
    return this.#nombre;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre} Saldo: ${this.saldo}`;
  }

  static bienvenida() {
    // Propiedades estáticas
    // Pertenece a la clase y no al objeto
    return `Bienvenido al cajero`;
  }
}

// Herencia

class Empresa extends Cliente {

  #nombre // Hace la propiedad privada
  // Sólo se puede acceder desde la clase
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  //Sobreescribir método estático
  static bienvenida(){
    return `Bienvenido al cajero empresas`
  }


}


const juan = new Cliente("Juan", 400);
console.log(juan.getNombre)
console.log(Cliente.bienvenida());
console.log(juan.mostrarInformacion());

const empre = new Empresa("Carlos", 500);
console.log(Empresa.bienvenida())
console.log(empre.mostrarInformacion());



