//                          Propiedades
var pg = {

    //Seleccionamos todas las img de la lista.
    imagenes: document.querySelectorAll("#galeria ul li img"),

    rutaImg: null,

    body: document.querySelector("body"),

    lightbox: null,

}

//                          Metodos
var mg = {

    inicioGaleria: function() {

        for (var i = 0; i < pg.imagenes.length; i++) {
            pg.imagenes[i].addEventListener("click", mg.capturaImg);
        }

    },

    capturaImg: function(img) {

        console.log("Imagen capturada: ", img.target);
        pg.rutaImg = img.target;
        mg.lightbox(pg.rutaImg);

    },

    lightbox: function(img) {
        //Para anadir una etiqueta al html desde js usamos appendChild().
        //Le decimos que elemento queremos crear con document.createElement.
        //Con setAttribute le agregamos un atributo como el id.
        pg.body.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");

        //Seleccionamos la etiqueta que acabamos de crear.
        pg.lightbox = document.querySelector("#lightbox");

        //                     Propiedades del lightbox. 

        pg.lightbox.style.width = "100%";
        pg.lightbox.style.height = "100%";
        //Posicion fija.
        pg.lightbox.style.position = "fixed";
        //Para que se sobreponga por encima de cualquier otra cosa.
        pg.lightbox.style.zIndex = "10";
        pg.lightbox.style.background = "rgba(0,0,0,.8)";
        pg.lightbox.style.top = 0;
        pg.lightbox.style.lefts = 0;


    }
}

mg.inicioGaleria();