const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numeros.forEach((number)=>{
    console.log(number*2)
})

const carrito = [
    {nombre:'Monitor 22 pulgadas',precio: 22},
    {nombre:'Television',precio: 25},
    {nombre:'Celular',precio: 222},
    {nombre:'Teclado',precio: 999},
    {nombre:'Audífonos',precio: 789}
]

carrito.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio}`)
})


