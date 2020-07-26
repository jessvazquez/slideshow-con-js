//                          Propiedades
var pg = {

    //Seleccionamos todas las img de la lista.
    imagenes: document.querySelectorAll("#galeria ul li img"),

    rutaImg: null,

    body: document.querySelector("body"),

    lightbox: null,

    modal: null,

    imagen: null

}

//                          Metodos
var mg = {

    inicioGaleria: function() {

        for (var i = 0; i < pg.imagenes.length; i++) {
            pg.imagenes[i].addEventListener("click", mg.capturaImg);
        }

    },

    capturaImg: function(img) {

        // console.log("Imagen capturada: ", img.target);
        pg.rutaImg = img.target;
        mg.lightbox(pg.rutaImg);

    },

    lightbox: function(img) {
        //Para anadir una campo al html desde js usamos appendChild().
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

        mg.modal(img);
    },

    modal: function(img) {

        //Creamos un modal dentro del tag lightbox.
        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");

        pg.modal = document.querySelector("#modal");

        //outerHTML muestra el contenido ademas de
        //la etiqueta en si: <p>hola</p>
        //Traduce el exterior del HTML.
        pg.modal.innerHTML = img.outerHTML;

        pg.modal.style.display = "block";
        pg.modal.style.position = "relative";
        pg.modal.style.width = "50%";
        pg.modal.style.top = "50%";
        pg.modal.style.left = "50%";
        // pg.modal.style.marginLeft = "150px";

        //Es necesario calcular el ancho 
        // y alto de la img para poder centrarla.

        //childNodes nos devuelve los hijos (Nodos) que 
        //contiene una etiqueta dentro de si.
        //childNodes[0] hacemos referencia al primer hijo.
        //childNodes[0].width Capturamos el ancho de la img.
        //De esa manera la img se centra de acuerdo 
        // a su largo/ancho.
        pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
        pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
        console.log(pg.modal.childNodes[0].width);
        console.log(pg.modal.childNodes[0].height);


    }
}

mg.inicioGaleria();