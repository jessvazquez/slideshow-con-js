// --------------------------------------Propiedades.
var p = {

    // Seleccionamos todos los li del id paginacion
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    // Capturamos el ul del id slide.
    cajaSlide: document.querySelector("#slide ul")


}

// --------------------------------------Metodos.
var m = {

    inicioSlide: function() {

        for (var i = 0; i < p.paginacion.length; i++) {
            // a cada elemento li previamente seleccionado se le agrega un listener con 
            // el evento click y el metodo paginacionSlide.
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
        }


    },

    paginacionSlide: function(item) {
        // para poder acceder al HTML del item usamos la propiedad target.
        //Para acceder a la etiqueta padre y asi nos muestre el valor de item usamos parentNode.
        //Accedemos al atributo item con getAttribute().
        console.log(item.target.parentNode.getAttribute("item")) - 1;

        //Almacenamos el valor de item para cambiar a la img deseada.
        p.item = item.target.parentNode.getAttribute("item") - 1;

        //Mandamos llamar al metodo que va a desplazar la img.
        m.movimientoSlide(p.item);
    },

    movimientoSlide: function(item) {
        // Para obtener el desplazamiento de la img.
        console.log(-(item * 100) + "%");

        // Cambiamos el porcentaje de la propiedad
        // left desde js. para cambiar la img.
        p.cajaSlide.style.left = -item * 100 + "%";
    }



}

// cargamos el metodo al inicio de la pagina.
m.inicioSlide();