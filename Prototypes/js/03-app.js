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

// Instancia Cliente

const pedro = new Cliente("Pedro", 6000);

console.log(pedro);

console.log(pedro.tipoCliente());

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CSJ = new Empresa("Codigo Juan", 4000, "Cursos en Línea");

