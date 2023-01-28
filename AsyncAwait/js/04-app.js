// Manejar con dos o más promises en un mismo Await

function descargarClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout(()=>{
            resolve('Los clientes fueron descargados')
        },5000);


    }) 
}


function descargarPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos...');

        setTimeout(()=>{
            resolve('Los pedidos fueron descargados')
        },3000);        
    }) 

}

const app = async() =>{

    try{
        // Ambas se ejecutan en paralelo
        const respuesta = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    }catch(e){
        console.log(e);
    }
}

app();



