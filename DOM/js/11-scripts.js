const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')


//Registro un posible Evento
btnFlotante.addEventListener('click',mostarOcultarFooter)

function mostarOcultarFooter(){
    console.log('Diste click en el botón')
    // Verificamos si la clase existe 
    
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        this.classList.remove('activo')
        this.textContent = 'Idioma y Moneda'
    }else{
        footer.classList.add('activo') 
        this.classList.add('activo') 
        this.textContent = ' X Cerrar '   
    }
    
}