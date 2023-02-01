// Composition



const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardadando email en: ${info.email}`)
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
})

function Cliente(nombre,email,empresa){

    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    )
}

function Empleado(nombre,email,puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    )

}

const cliente = Cliente('Juan',null,'codigo');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@.com');
cliente.mostrarEmail();

const empleado = Empleado('Carlos',null,'Dev');

empleado.mostrarNombre();
empleado.agregarEmail('email@email.net');
empleado.mostrarEmail();

