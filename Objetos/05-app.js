// Creando objetos dentro de otro 

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1 metro"
        },
        fabricacion:{
            pais:'USA'
        }   
    }
}

console.log(producto)

console.log(producto.informacion)

console.log(producto.informacion.medidas.peso)

console.log(producto.informacion.fabricacion.pais)

