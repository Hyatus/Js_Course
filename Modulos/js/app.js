import nuevaFuncion, {nombreCliente as cli, ahorro, mostrarInformacion, Cliente} from './cliente.js';
import {Empresa} from './empresa.js'
console.log(cli)

console.log(ahorro)

console.log(mostrarInformacion(cli,ahorro));


const cliente = new Cliente(cli,ahorro);

console.log(cliente)

console.log(cliente.mostrarInformacion());


const empresa = new Empresa(cli,ahorro,'aprendizaje');


console.log(empresa)


nuevaFuncion(); // Sólo puede haver un export default

