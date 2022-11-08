// Prevenir el Event Bubbling 

const carDiv = document.querySelector('.card');


carDiv.addEventListener('click',(e)=>{
    // Utilizamos el Delegation
    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo')
    }

    if(e.target.classList.contains('precio')){
        console.log('diste click en precio')
    }
    if(e.target.classList.contains('card')){
        console.log('diste click en card')
    }
    //console.log(e.target.classList)
})