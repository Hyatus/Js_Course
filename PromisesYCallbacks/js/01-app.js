const paises = ['guatemala','salvador','honduras']


function nuevoPais(pais,callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },2000)
}
function mostarPaises(){
    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais)
        })
    },1000);
}


mostarPaises()


nuevoPais('alemania',mostarPaises);
