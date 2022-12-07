/** MAP **/

// Un objeto con llave y valor y puede ser cualquier tipo de dato

const cliente = new Map();

cliente.set("nombre", "Cristian");
cliente.set("tipo", "premium");
cliente.set("saldo", 3000);
cliente.set(true, true);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has("nombre"));

// Obtener un valor
console.log(cliente.get("nombre"));

cliente.delete("saldo");

console.log("Tiene saldo?", cliente.has("saldo"));

cliente.clear(); // Elimina todos los elementos

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

console.log(paciente);
