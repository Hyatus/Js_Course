// Recorrer un Array

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",'Julio'];

console.table(meses);

console.log(meses[0]);

// Cuánto mide el arreglo 
console.log(meses.length);

// Recorriendo el arreglo con un for 
for(let i=0; i < meses.length; i++){
    console.log(i + '-' + meses[i])
}

