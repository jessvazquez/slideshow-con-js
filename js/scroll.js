var ps = {

    posicionScroll: 0,

    articulos: document.querySelectorAll("#scroll article"),

    cajaScroll: document.querySelector("#scroll"),

}

var ms = {

    inicioScroll: function() {

        document.addEventListener("scroll", ms.parallax);

    },

    parallax: function() {

        // window.pageYOffset nos dice en que Posicion
        // esta ubicado el scroll.
        // console.log(window.pageYOffset);
        ps.posicionScroll = window.pageYOffset;

        // console.log(ps.cajaScroll.offsetTop);

        // offsetTop nos sirve para saber la posicion de la 
        // parte superior de cajaScroll.
        if (ps.posicionScroll > ps.cajaScroll.offsetTop) {

            for (var i = 0; i < ps.articulos.length; i++) {

                ps.articulos[i].style.marginLeft = "0%";

            }

        } else {


            for (var i = 0; i < ps.articulos.length; i++) {

                ps.articulos[i].style.marginLeft = ps.posicionScroll / 20 - 100 + "%";

            }

        }

    }


}

ms.inicioScroll();