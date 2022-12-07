/** SETS MAPS Y SUS CARACTERÍSTICAS **/

const carrito = new Set();

// No tienen valores repetidos
carrito.add("Camisa");
carrito.add("Disco 01");
carrito.add("Disco 03");
carrito.add("Camisa"); // -> no se toma en cuenta

// Tamaño del Set
console.log(carrito.size);


// Comprobar si tiene el valor
console.log(carrito.has('Camisa'))


// Eliminar un elemento, devuelve true si fuera un valor que no existe devuelve un false
carrito.delete('Disco 03')


// Eliminar todos los elementos del set

carrito.clear();


// Iterar sobre el set
carrito.add("Camisa");
carrito.add("Disco 01");
carrito.add("Disco 03");
carrito.add("Camisa");

carrito.forEach(elemento => console.log(elemento))

// En los set los índices son iguales a su valor



console.log(carrito)



// Ejemplo de uso 

// Del siguiente arreglo eliminar los duplicados

const numeros = [10,10,10,20,30,30,40,50]

const noDup = new Set(numeros);


console.log(noDup)

