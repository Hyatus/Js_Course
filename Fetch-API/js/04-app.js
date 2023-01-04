const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    url = 'https://picsum.photos/list'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))

}