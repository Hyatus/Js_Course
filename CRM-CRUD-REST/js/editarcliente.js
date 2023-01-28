import { obtenerCliente, actualizarCliente} from "./API.js";

(function(){


    // Campos del formulario 
    const nombreInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async ()=>{

        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        // Submit al fomrulario

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit',validarCliente);


    });

    function mostrarCliente(cliente){
        const {nombre,empresa,email,telefono,id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;


    }

    function validarCliente(e){
        e.preventDefault();

        const cliente ={
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        };


        if(validar(cliente)){
            // Mostrar mensaje
            mostrarAlerta('Todos los campos son obligarios')
            return;
        }


        // Reescribe el objeto
        actualizarCliente(cliente);
    }
    
    
    function validar(obj){
        return !Object.values(obj).every(input => input !== '');
    }

})();