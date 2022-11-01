function sumar(a, b) {
  return a + b; // Retorna un valor
}

const resultado = sumar(2, 3);



let total = 0;
function agregarCarrito(precio){
    return total+=precio;
}

function calcularImpuest(total){
    return total * 1.15;

}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);


const totalPagar = calcularImpuest(total);


console.log(total)
console.log('El total a pagar es de: ',totalPagar)