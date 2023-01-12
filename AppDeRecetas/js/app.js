function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');

    const resultado = document.querySelector('#resultado');

    selectCategorias.addEventListener('change',seleccionarCategoria);

    obtenerCategorias();

    function obtenerCategorias(){
        const urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        fetch(urlCategorias)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
      
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach(categoria => {
            const option = document.createElement('OPTION');
            const {strCategory} = categoria;

            option.value = strCategory 
            option.textContent = strCategory

            //console.log(option)
            
            selectCategorias.appendChild(option)
        })
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        //console.log(url)

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals))
            


        console.log(e.target.value);
    }

    function mostrarRecetas(recetas = []){
        //console.log(recetas)
        // Iterar en los resultado 
        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center','text-black','my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay Resultados';

        resultado.appendChild(heading);

        recetas.forEach(receta =>{

            const {idMeal, strMeal, strMealThumb} = receta;

            const recetaContenedor = document.createElement('DIV');

            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card','mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title','mb-3')
            recetaHeading.textContent = strMeal
            
            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn','btn-danger','w-100');
            recetaButton.textContent = 'Ver Receta'


            // Inyectar en el código HTML
            recetaCardBody.appendChild(recetaHeading)
            recetaCardBody.appendChild(recetaButton)
            
            recetaCard.appendChild(recetaImagen)
            recetaCard.appendChild(recetaCardBody)

            recetaContenedor.appendChild(recetaCard)


            resultado.appendChild(recetaContenedor)
        })

    }


    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }

    






}

document.addEventListener('DOMContentLoaded',iniciarApp);

