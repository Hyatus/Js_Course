/** Saber si tenemos conexión a internet **/


window.addEventListener('online',actualizarEstado);
window.addEventListener('offline',actualizarEstado);


function actualizarEstado(){
    if(navigator.onLine){
        console.log('estás conectado')
    }else{
        console.log('No estás conectado')
    }
}

