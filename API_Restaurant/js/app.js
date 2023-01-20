let cliente = {
    mesa: '',
    hora:'',
    pedido: []
}


const categorias = {
    1:'Comida',
    2:'Bebidas',
    3:'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Validar campos vacíos
    const camposVacios = [mesa,hora].some( campo => campo === '');

    if(camposVacios){
        // Verificar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');
        if(!existeAlerta){
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback','d-block','text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);
            setTimeout(()=>{
                alerta.remove()
            },3000);
        }
        return;
    }

    // Asignar datos de mesa y hora al objeto de cliente 
    cliente = {...cliente, mesa, hora}

    //Ocultar Modal 
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    console.log(cliente);

    // Mostrar las secciones 
    mostrarSecciones();


    //Obtener platillos de la API de JSON Server 
    obtenerPlatillos();
}

function mostrarSecciones(){
    //querySelectorAll porque son más de una
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'))
}

function obtenerPlatillos(){
    const url = `http://localhost:4000/platillos`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarPlatillos(resultado))
    .catch(error => console.log(error))

}

function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');
    
    platillos.forEach(platillo => {
        //const {id, nombre, precio, categoria} = platillo;

        const row = document.createElement('div');
        row.classList.add('row','py-3','border-top');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3','fw-bold');
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = `${categorias[platillo.categoria]}`;
        

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');
        inputCantidad.value = 0;

        // Funcion que detecta la cantidad y el platillo que se está agregando 
        inputCantidad.onchange = () => {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo,cantidad});
        } 
           
        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);


        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar)
        contenido.appendChild(row);

        //console.log(platillo)
    })


    function agregarPlatillo(producto){
        // Extraer el pedido actual 
        let {pedido} = cliente;

        //Revisar que la cantidad sea mayor a 0 
        if(producto.cantidad > 0){
            // Revisar si hay duplicados
            // Comprueba si el elemento ya existe en el arrray 
            if(pedido.some(articulo => articulo.id === producto.id)){
                // Actualizamos únicamente la cantidad 
                const pedidoActualizado = pedido.map(articulo=>{
                    if(articulo.id === producto.id){
                        articulo.cantidad = producto.cantidad;
                    }
                    return articulo;
                });

                // Se asigna el nuevo Array a cliente.pedido
                cliente.pedido = [...pedidoActualizado];

            }else{
                // El articulo aún no existe lo agregamos al Array
                cliente.pedido = [...pedido,producto];
            }
        }else{
            // Eliminar elementos cuando la cantidad es cero 
            const resultado = pedido.filter(articulo => articulo.id !== producto.id);

            cliente.pedido = [...resultado];
        }

        //console.log(cliente.pedido)



        //Limpiar código HTML previo 
        limpiarHTML();

        if(cliente.pedido.length){
            actualizarResumen();
            
        }else{
            mensajePedidoVacio();
        }

        //Mostrar el resumen de consumo
    }

}

function actualizarResumen(){
    //console.log('Desde Actualizar resumen');

    const contenido = document.querySelector('#resumen .contenido');
    
    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6','card','py-5','px-3','shadow');

    // Información de la mesa
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);

    // Información de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    hora.appendChild(horaSpan);

    // Titulo de la sección 

    const heading = document.createElement('h3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4','text-center');

    // Iterar sobre el Array de pedidos 

    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const {pedido} = cliente;

    pedido.forEach(articulo=>{
        const {nombre,cantidad, precio, id} = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('h4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;
       
        //Cantidad del articulo
        const cantidadEl = document.createElement('p');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        cantidadEl.appendChild(cantidadValor);
        
        // Precio del articulo 
        const precioEl = document.createElement('p');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';

        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;

        precioEl.appendChild(precioValor);


        // SubTotal del articulo
        const subtotalEl = document.createElement('p');
        subtotalEl.classList.add('fw-bold');
        subtotalEl.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('span');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio,cantidad);

        subtotalEl.appendChild(subtotalValor);

        // Botón para eliminar 
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar del Pedido';
        btnEliminar.onclick = () => {
            eliminarProducto(id);
        }

        // Agregar elemenos al li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);
        

        // Agregar lista al grupo principal 
        grupo.appendChild(lista);
    });

    // Agregar al contenido 
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);


    contenido.appendChild(resumen);


    formularioPropinas();
}


function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');
    const formulario = document.createElement('div');

    formulario.classList.add('col-md-6','formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card','py-5','px-3','shadow');

    const heading = document.createElement('h3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propina: ';


    //Radio button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10div = document.createElement('div');
    radio10div.classList.add('form-check');
    radio10div.appendChild(radio10);
    radio10div.appendChild(radio10Label);

    //Radio button 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25div = document.createElement('div');
    radio25div.classList.add('form-check');
    radio25div.appendChild(radio25);
    radio25div.appendChild(radio25Label);

    //Radio button 50%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50div = document.createElement('div');
    radio50div.classList.add('form-check');
    radio50div.appendChild(radio50);
    radio50div.appendChild(radio50Label);

    // Agregar al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10div);
    divFormulario.appendChild(radio25div);
    divFormulario.appendChild(radio50div);
    
    // Agregar al formulario 
    formulario.appendChild(divFormulario);

    contenido.appendChild(formulario);


}

function calcularPropina(){
    let subTotal = 0;
    const {pedido} = cliente;

    pedido.forEach(articulo => {
        subTotal += articulo.cantidad * articulo.precio;
    });

    const propinaSeleccionada = parseInt(document.querySelector('[name="propina"]:checked').value);

    // Calcular la propina
    const propina = ((subTotal*propinaSeleccionada)/100);
    

    // Calcular el Total 

    const total = subTotal + propina;
    

    mostrarTotalHTML(subTotal,total,propina);
}

function mostrarTotalHTML(subTotal,total,propina){
    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar');


    // Subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-3','fw-bold','mt-5');
    subtotalParrafo.textContent = 'SubTotal Consumo: ';

    const subTotalSpan = document.createElement('span');
    subTotalSpan.classList.add('fw-normal');
    subTotalSpan.textContent = `$${subTotal}`;

    subtotalParrafo.appendChild(subTotalSpan);


    // Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-3','fw-bold','mt-5');
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    // Total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-3','fw-bold','mt-5');
    totalParrafo.textContent = 'Total: ';

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);

    // Eliminar el último resultado 

    const totalPagarDiv = document.querySelector('.total-pagar');

    if(totalPagarDiv){
        totalPagarDiv.remove();
    }
    
    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div');
    formulario.appendChild(divTotales);
}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);

}
function eliminarProducto(id){
    //console.log('Eliminando',id)
    const {pedido} = cliente;

    const resultado = pedido.filter(articulo => articulo.id !== id);

    cliente.pedido = [...resultado];

    console.log(cliente.pedido);
    
    limpiarHTML();

    if(cliente.pedido.length){
        actualizarResumen();
    }else{
        mensajePedidoVacio();
    }

    // El producto se eliminó regresamos cantidad a acero en el formulario
    const productoEliminado = document.querySelector(`#producto-${id}`);
    productoEliminado.value = 0;

    
}

function calcularSubtotal(precio,cantidad){return `$${precio*cantidad}`}

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}
