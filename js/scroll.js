var ps = {

    posicionScroll: 0,

    articulos: document.querySelectorAll("#scroll article"),

    cajaScroll: document.querySelector("#scroll"),

    cabezote: document.querySelector("#cabezote"),

    botonera: document.querySelectorAll("nav ul li a"),

    ruta: null,

    intervalo: null,

    destinoScroll: 0,
}

var ms = {

    inicioScroll: function() {

        document.addEventListener("scroll", ms.parallax);

        for (var i = 0; i < ps.botonera.length; i++) {

            ps.botonera[i].addEventListener("click", ms.desplazamiento);

        }

    },

    parallax: function() {

        // window.pageYOffset nos dice en que Posicion
        // esta ubicado el scroll.
        // console.log(window.pageYOffset);
        ps.posicionScroll = window.pageYOffset;

        if (ps.posicionScroll > 100) {

            ps.cabezote.style.position = "fixed";
            ps.cabezote.style.zIndex = 10;

        } else {
            ps.cabezote.style.position = "relative";
            ps.cabezote.style.zIndex = 0;
        }

        // console.log(ps.cajaScroll.offsetTop);

        // offsetTop nos sirve para saber la posicion de la 
        // parte superior de cajaScroll.
        if (ps.posicionScroll > ps.cajaScroll.offsetTop - 200) {

            for (var i = 0; i < ps.articulos.length; i++) {

                ps.articulos[i].style.marginLeft = "0%";

            }

        } else {

            for (var i = 0; i < ps.articulos.length; i++) {

                ps.articulos[i].style.marginLeft = ps.posicionScroll / 20 - 100 + "%";

            }

        }

    },

    desplazamiento: function(ruta) {
        //preventDefault quita los efectos
        //por defecto del navegador como 
        //por ejemplo saltar con el href.
        //-----Comenta la linea de abajo para que veas su efecto.-----
        ruta.preventDefault();

        //Target nos sirve para seleccionar la etiqueta
        //getAttribute nos permite seleccionar un 
        //atributo de la etiqueta.
        ps.ruta = ruta.target.getAttribute("href");

        // console.log(ruta.target.getAttribute("href"));

        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop;

        ps.intervalo = setInterval(function() {

            if (ps.posicionScroll < ps.destinoScroll) {
                ps.posicionScroll += 100;
                if (ps.posicionScroll >= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo);
                }
            }
            //scrollTo(x,y) nos permite deslizar la pagina 
            //hacia la coordenada x o y.

            window.scrollTo(0, ps.posicionScroll);
        }, 50)

    }

}

ms.inicioScroll();