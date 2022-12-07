/** SYMBOLS **/

// Permite crear una propiedad única

const sym = Symbol();

const sym2 = Symbol();

if (sym === sym2) {
  console.log("Son iguales");
} else {
  // Ningún Symbol es igual
  console.log("Son diferentes");
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido

persona[nombre] = "Juan";
persona[apellido] = "Pérez";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);
// Se debe usar corchete
console.log(persona[nombre]);

// Las propiedades que utilizan Symbol no son iterables



// Definir una descripción del Symbol
const nombreCliente = Symbol("Nombre del cliente");

const Cliente = {};


Cliente[nombreCliente] = 'Pedro';

console.log(Cliente)