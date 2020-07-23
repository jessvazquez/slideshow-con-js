// --------------------------------------Propiedades.
var p = {

    // Seleccionamos todos los li del id paginacion
    paginacion: document.querySelectorAll("#paginacion li"),

    item: 0,
    // Capturamos el ul del id slide.
    cajaSlide: document.querySelector("#slide ul"),

    flechaRetroceder: document.querySelector("#slide #retroceder"),

    flechaAvanzar: document.querySelector("#slide #avanzar"),

    // Seleccionamos la cantidad de imagenes que tenemos.
    imgSlide: document.querySelectorAll("#slide ul li")

}

// --------------------------------------Metodos.
var m = {

    inicioSlide: function() {

        for (var i = 0; i < p.paginacion.length; i++) {
            // a cada elemento li previamente seleccionado se le agrega un listener con 
            // el evento click y el metodo paginacionSlide.
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
        }

        //Listener de Flechas.
        p.flechaAvanzar.addEventListener("click", m.avanzar);
        p.flechaRetroceder.addEventListener("click", m.retroceder);

    },

    paginacionSlide: function(item) {
        // para poder acceder al HTML del item usamos la propiedad target.
        //Para acceder a la etiqueta padre y asi nos muestre el valor de item usamos parentNode.
        //Accedemos al atributo item con getAttribute().
        console.log(item.target.parentNode.getAttribute("item")) - 1;

        //Almacenamos el valor de item para cambiar a la img deseada.
        p.item = item.target.parentNode.getAttribute("item") - 1;

        // Mandamos llamar al metodo que va a desplazar la img.
        m.movimientoSlide(p.item);
    },

    avanzar: function() {

        if (p.item == p.imgSlide.length - 1) {
            p.item = 0;
        } else {
            p.item++;
        }

        console.log(p.imgSlide.length);

        m.movimientoSlide(p.item);

    },

    retroceder: function(item) {
        if (p.item == 0) {
            p.item = p.imgSlide.length - 1;
        } else {
            p.item--;
        }
        m.movimientoSlide(p.item);
    },

    movimientoSlide: function(item) {
        // Para obtener el desplazamiento de la img.

        console.log(-(item * 100) + "%");

        // Cambiamos el porcentaje de la propiedad
        // left desde js. para cambiar la img.
        p.cajaSlide.style.left = -item * 100 + "%";


        for (var i = 0; i < p.paginacion.length; i++) {
            //seleccionamos todos los elementos de paginacion tendran una paginacion de .5
            p.paginacion[i].style.opacity = .5;
        }

        // Para que cambie la intensidad de la opacidad del item seleccionado.
        p.paginacion[item].style.opacity = 1;

        //Que la img que se desplaza tenga efecto de transition a la propiedad left del ul.
        p.cajaSlide.style.transition = ".7s left ease-in-out";

    }
}

// cargamos el metodo al inicio de la pagina.
m.inicioSlide();