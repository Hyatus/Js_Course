// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault();
  // console.log('agregando tweet')

  const tweet = document.querySelector("#tweet").value;

  // Validacion

  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacío");
    return; // Evita que se ejecuten más líneas de código
  }

  const tweetObj = {
    id: Date.now(),
    tweet, // Si se coloca así llave y variable valor se llaman igual
  };

  // Añadir al arreglo de Tweets
  tweets = [...tweets, tweetObj];
  console.log(tweets);

  // Creamos el html con los tweets
  crearHTML();
}

function mostrarError(error) {
  const mensajeError = document.createElement("P");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  // Insertar en contenido

  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove(); // Elimina la alerta después de 3 segundos
  }, 3000);
}

// Agrega los tweets al localStorage

function sincronizarStorage() {
  // Cuando el usuario agrega un nuevo tweet
  localStorage.setItem("tweets", JSON.stringify(tweets));

  // Cuando el documento esté listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);
  });
}

// Muestra el listado del los tweets

function crearHTML() {
  limpiarHTML();
  if (tweets.length) {
    tweets.forEach((tweet) => {
      // Agregar botón de eliminar
      const btnEliminar = document.createElement("a");

      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "x";
      // Añadir la función de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };
      // Crear el html
      const li = document.createElement("li");
      // Añadir texto
      li.innerText = tweet.tweet;

      li.appendChild(btnEliminar);

      // Añadimos al listado de tweets

      listaTweets.appendChild(li);
    });
  }
  sincronizarStorage();
}
// ELimina un tweet

function borrarTweet(id) {
  console.log("Borrar Tweet: ", id);
  tweets = tweets.filter((tweet) => tweet.id !== id);
  console.log(tweets);
  crearHTML();
  
}
// Limpiar html

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
