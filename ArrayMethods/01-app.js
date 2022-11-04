const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

console.log(meses.includes("enero")); // Retorna True o False

// En un arreglo de objetos se utiliza .some

const carrito = [
  { nombre: "Monitor", precio: 500 },
  { nombre: "Mouse", precio: 500 },
  { nombre: "Teclado", precio: 500 },
  { nombre: "Audifonos", precio: 500 },
];

console.log(
  carrito.some((producto) => {
    // Itera sobre cada elemento, devuelve true o false
    return producto.nombre === "Monitor";
  })
);





