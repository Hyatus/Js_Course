// Find

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Mouse", precio: 500 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Audifonos", precio: 500 },
  ];

 let resultado = ''
  carrito.find((producto,index) => {
    if(producto.nombre === 'Monitor'){
        resultado = carrito[index]
    }
});


console.log(resultado)