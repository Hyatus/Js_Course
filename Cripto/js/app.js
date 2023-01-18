const criptomonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const objBusqueda = {
  moneda: "",
  criptomonedas: "",
};

// En caso de que pueda traer las criptomonedas
const obtenerCriptoMonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptoMonedas();
  formulario.addEventListener("submit", submitFormulario);
  criptomonedasSelect.addEventListener("change", leerVarlor);
  monedaSelect.addEventListener("change", leerVarlor);
});

function consultarCriptoMonedas() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptoMonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;
    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptomonedasSelect.appendChild(option);
  });
}

function submitFormulario(e) {
  e.preventDefault();
  // Validar
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  // Consultar la API con los resultados
  consultarAPI();
}

function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda])
        })


    // console.log(url)
}

function mostrarCotizacionHTML(cotizacion){
    console.log(cotizacion)


    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;



    const precio = document.createElement('P');
    precio.classList.add('precio');

    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;
    
    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>Precio más alto del día <span>${HIGHDAY}</span></p>`

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>Precio más bajo del día <span>${LOWDAY}</span></p>`

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `<p>Variación últimas Horas <span>${CHANGEPCT24HOUR*100}%</span></p>`

    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `<p>Ultima Actualizacion: <span>${LASTUPDATE}</span></p>`


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}


function leerVarlor(e) {
  objBusqueda[e.target.name] = e.target.value;

  console.log(objBusqueda);
}


function mostrarAlerta(mensaje) {
  const existeError = document.querySelector(".error");
  if (!existeError) {
    const divMensaje = document.createElement("DIV");
    divMensaje.classList.add("error");

    //Mensaje Error
    divMensaje.textContent = mensaje;

    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostarSpinner(){
    limpiarHTML()
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>    
    `

    resultado.appendChild(spinner);
}