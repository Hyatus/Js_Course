// Evento de Submit en un formulario 
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',validarFormulario)



function validarFormulario(e){
    // Le envía por defecto el evento por parámetro
    e.preventDefault();

    console.log(e.target.action);
}