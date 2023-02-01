// Funciones que retornan funciones

const obternerCliente = () => () => console.log('Hola');

const fn = obternerCliente();

fn();