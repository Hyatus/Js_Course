const reproductor = {
  cancion:'',
  reproducir: function (id = 0) {
    console.log("Reproduciendo Canción - ", id);
  },
  pausar: () => console.log("Pausando..."),
  crearPlaylist: (nombre) => console.log(`Creando la playlist de: ${nombre}`),
  set nuevaCancion(cancion){
    this.cancion = cancion
  },
  get obtenerCancion(){
    console.log(this.cancion)
  }
};


reproductor.nuevaCancion = 'Nothing Else Matters';

reproductor.obtenerCancion; // No es necesario el paréntesis 