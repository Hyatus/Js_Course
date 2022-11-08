// Eventos que ocurren con el mouse 

const nav = document.querySelector('.navegacion')

// Registrar un evento

nav.addEventListener('mouseenter',()=>{
    console.log('entrando  en nav')
    nav.style.backgroundColor = 'white'
})

nav.addEventListener('mouseout',()=>{
    console.log('saliendo  en nav')
    nav.style.backgroundColor = 'transparent'
})

// click - al dar click
// mouseenter - al poner el cursor sobre el nav
// mouseout
// mousedown - cuando presiono, similar al click
// mouseup - cuando doy click pero suelto el mouse 
// dblclick - doble click 
