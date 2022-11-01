// Diferencia entre un forEach y un map 
const carrito = [
    {nombre:'Monitor 22 pulgadas',precio: 22},
    {nombre:'Television',precio: 25},
    {nombre:'Celular',precio: 222},
    {nombre:'Teclado',precio: 999},
    {nombre:'Audífonos',precio: 789}
]


// El map crea un arreglo nuevo, en una nueva variable 

const nuevoArray = carrito.map((producto)=>{
    return `Nombre: ${producto.nombre} Precio: ${producto.precio}`
})

console.log(nuevoArray)

