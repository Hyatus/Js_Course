

/** WEAK MAP **/

// Sirven para mantener una serie de datos privados

const producto  = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto,'Monitor')

console.log(weakmap.has(producto))


// Sólo imprimirá Monitor
console.log(weakmap.get(producto))

// No se puede iterar
// No se puede obtener el size o extensión

// Eliminar un elemento
console.log(weakmap.delete(producto))

