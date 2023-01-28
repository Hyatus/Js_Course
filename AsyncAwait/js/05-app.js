

const url = 'https://picsum.photos/list';


document.addEventListener('DOMContentLoaded',obtenerDatos2);




function obtenerDatos(){

    // Con Promises
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado))
    .catch(e => console.log(e))
}


async function obtenerDatos2(){
    try{
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    }catch(e){
        console.log(e);
    }
}


