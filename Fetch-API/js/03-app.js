const cargarJSONArray = document.querySelector('#cargarJSONArray');
cargarJSONArray.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    url = 'data/empleados.json'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostartDatos(resultado))
}


function mostartDatos(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(empleado => {
        const {id,nombre,empresa,trabajo} = empleado;

        html += `
        <p>Empleado: ${nombre} </p>
        <p>id: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
        `        
    })

    contenido.innerHTML += html;
}

