const reproductor = {
    reproducir: function(id=0){
        console.log('Reproduciendo Canción - ',id)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist de: ${nombre}`)
    }
}


reproductor.reproducir(8); // Es un método de propiedad 

reproductor.pausar()

// Agregando un método fuera del objeto 
reproductor.borrar = function(id){
    console.log('Borrando Canción -> ',30)
}

reproductor.crearPlaylist('Música clásica')

console.log(reproductor)