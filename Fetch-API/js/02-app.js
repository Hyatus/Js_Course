const cargarJSON = document.querySelector('#cargarJSON');


cargarJSON.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => mostartHTML(datos))
    .catch(error=>console.log(error))

}

function mostartHTML({empresa,id,nombre,trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML += `

    <p>Empleado: ${nombre} </p>
    <p>id: ${id} </p>
    <p>Empresa: ${empresa} </p>
    <p>Trabajo: ${trabajo} </p>
    `
    
}

