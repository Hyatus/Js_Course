function descargar(){

    return new Promise((resolve,reject)=>{
        const error = false;

        setTimeout(()=>{
            if(!error){
                resolve('El listado de clientes se descargó correctamente');
            }else{
                reject('Falló al cargar clientes! ')
            }
        },3000);

    })
}



//Asyn Await

async function ejecutar(){
    try{
        // La función sobre la que se está ejecutando el promise 
        const respuesta = await descargar();

        console.log(2+2);

        console.log(respuesta);

    }catch(e){
        console.log(e)
    }
}


ejecutar();