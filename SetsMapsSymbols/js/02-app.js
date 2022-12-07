/** WEAK SET - SET DÉBILES **/

const weakSet = new WeakSet();

// Aquí sólo podemos pasar objetos

const cliente = {
  nombre: "Cristian",
  saldo: 500,
};

weakSet.add(cliente);

weakSet.delete(cliente);

// No tiene un size, no se puede saber su extensión y no son iterables

console.log(weakSet.has(cliente));
