localStorage.setItem('nombre','Cristian')


const producto = {
    nombre: 'monitor',
    precio: 300
}


const productoString = JSON.stringify(producto)
console.log(productoString)


localStorage.setItem('producto',productoString)


const meses =  ['enero','febrero','marzo']


const mesesS = JSON.stringify(meses)

localStorage.setItem('meses',mesesS)


// Obtener datos de vuelta

const months = JSON.parse(localStorage.getItem('meses')) 

console.log(months)


// Eliminar 

localStorage.removeItem('meses')