/** GENERADORES **/

// Es una función que retorna un iterador

// Se le coloca asterisco
function *crearGenerador(){
    // valores ques se pueden iterar
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}


// Acceder a los valores

const iterador = crearGenerador();


console.log(iterador) // -> Devuelve Suspended
console.log(iterador.next().value) // -> Itera y luego regresa a suspended
console.log(iterador.next().done) // -> Devuelve false


function *generadorCarrito(carrito){
    for(let i=0; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3','Producto 4'];


const iteradorC = generadorCarrito(carrito);

console.log(iteradorC.next())

