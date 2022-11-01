// Diferencias entre crear funciones

sumar(); // Esta función se ejecuta antes de que se haya creado

function sumar() {
  console.log(2 + 2);
}

const sumar2 = function () {
  console.log(3 + 3); // No se puede acceder a esta función antes de inicializarla
};

sumar2();

