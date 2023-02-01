const suma = function(a,b){
    /* First class function */
    return a + b;
}

/* Asignar una función como si fuera un valor*/
const resultado = suma;

console.log(resultado(10,20));