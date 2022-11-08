// Eventos con el teclado 


const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('input',(e)=>{
    console.log(e.target.value)

})

// Keydown - al escribir 
// Keyup - cuando presionas y sueltas 
// blur - hay que entrar al input y salirte 
// copy - cuando copias se ejecuta 
// paste - cuando pegamos algo 
// cut - cuando cortamos el texto 
// input - se ejecuta cuando haces todo lo anterior, excepto el blur 

