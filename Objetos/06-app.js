// Aplicar Destructuring
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

const {nombre} = producto;
console.log(nombre);

const {informacion:{medidas:{peso}}} = producto;

console.log(peso)

