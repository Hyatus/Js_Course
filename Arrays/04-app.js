const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.table(meses);

meses[0] = "Nuevo Mes";
meses[7] = 'Ultimo mes'; // Agregando un nuevo mes

console.table(meses);


meses[10] = 'Ultimo';

console.table(meses);


