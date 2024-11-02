function cargarDatosPortafolio(){

    fetch('recursos/json/funcion.json')
    .then(function(respuesta){
        return respuesta.json();
    }).then(function(datos){
        let html= '';

        datos.portafolio.forEach(element => {
           html +=`
           <div class="compu" data-compu="laptop">
                    <img src="./recursos/img/${element.rutaImg}" alt="laptop">
                        <h2>${element.nombre}</h2>
                        <p>${element.desc}</p>
                                 <div class="precio">
                                <p>${element.precio}</p>
                             <button><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
                        </div>
                        </div>`
         
        });

        document.getElementById("id").innerHTML = html;
    }).catch(function(error){
        document.getElementById("id").innerHTML =
        '<p> Elemento no encontrado</p>';
    })
 }

 document.addEventListener('DOMContentLoaded', function(){
    cargarDatosPortafolio();
 })
