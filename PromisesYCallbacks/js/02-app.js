const paises = []

function nuevoPais(pais,callback){
    paises.push(pais);
    console.log(`Agregado ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises)
}

function iniciarCallbackHell(){
    setTimeout(()=>{
        nuevoPais('alemania',mostrarPaises);
        setTimeout(()=>{
            nuevoPais('inglaterra',mostrarPaises);
            setTimeout(()=>{
                nuevoPais('Turquía',mostrarPaises);
            },3000);
        },3000);
    },3000);   
}


iniciarCallbackHell()