const url = 'http://localhost:4000/clientes';


// Cuando se crea nuevo Cliente
export const nuevoCliente = async cliente =>{
   try{
        // Por default fetch manda el verbo GET
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Se insertó correctamente y redirigimos al index
        window.location.href = 'index.html';

   }catch(e){
        console.log(e);
   }
}



// Obtiene todos los clientes 
export const obtenerClientes = async _ =>{
    try{
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    }catch(e){
        console.log(e);
    }
}


//Elimina un cliente

export const eliminarCliente = async id => {
    try{

        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })

    }catch(e){
        console.log(e)
    }
}


// Obtiene un Cliente por su ID

export const obtenerCliente = async id =>{
    try{
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();

        return cliente;

    }catch(e){
        console.log(e)
    }
}

// Actualiza un registro 

export const actualizarCliente = async cliente =>{
   
    try{
        await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type':'application/json'
            }
        });

        //Si se actualizo correctamente nos lleva a la página de inicio 
        window.location.href = 'index.html';

    }catch(e){
        console.log(e)
    }

}