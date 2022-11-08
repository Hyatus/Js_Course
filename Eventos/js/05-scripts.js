// Eventos al dar scroll con el mouse 

window.addEventListener('scroll',()=>{
    // const scrollPy = window.scrollY;

    // console.log(scrollPy)
    //console.log('Scrolling')

    const premium = document.querySelector('.premium')

    const ubicacion = premium.getBoundingClientRect(); // A qué distancia se encuentra ese elemento

    //console.log(ubicacion)
    // con la ubicación podemos ver en todo momento la ubicación 

    if(ubicacion.top < 100 ){
        console.log('El elemento ya está visible')
    }
})

