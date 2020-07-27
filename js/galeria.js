//                          Propiedades
var pg = {

    //Seleccionamos todas las img de la lista.
    imagenes: document.querySelectorAll("#galeria ul li img"),

    //Recibimos la ruta que obtenemos de la img.
    rutaImg: null,

    //Seleccionamos el body del HTML.
    body: document.querySelector("body"),

    //Creamos la propiedad lightbox para crear el div en el HTML.
    lightbox: null,

    //Creamos la propiedad modal para crear el div en el HTML.
    modal: null,

    cierra: null,

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
        //Le concatenamos una etiqueta div.
        pg.modal.innerHTML = img.outerHTML + "<div>X</div>";

        //Creando Media Querys desde JS.

        if (window.matchMedia("(max-width: 1000px)").matches) {

            pg.modal.style.width = "90%";

        } else {

            pg.modal.style.width = "60%";
        }


        pg.modal.style.display = "block";
        pg.modal.style.position = "relative";
        pg.modal.style.top = "50%";
        pg.modal.style.left = "50%";

        //Estilos de la imagen.
        pg.modal.childNodes[0].style.width = "100%";
        pg.modal.childNodes[0].style.border = "15px solid white";

        //Es necesario calcular el ancho 
        // y alto de la img para poder centrarla.

        //childNodes nos devuelve los hijos (Nodos) que 
        //contiene una etiqueta dentro de si.
        //childNodes[0] hacemos referencia al primer hijo.
        //childNodes[0].width Capturamos el ancho de la img.
        //De esa manera la img se centra de acuerdo 
        //a su largo/ancho.
        pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
        pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
        console.log(pg.modal.childNodes[0].width);
        console.log(pg.modal.childNodes[0].height);

        //Estilos de la div para cerrar img X.
        pg.modal.childNodes[1].style.position = "absolute";
        pg.modal.childNodes[1].style.width = "40px";
        pg.modal.childNodes[1].style.height = "40px";
        pg.modal.childNodes[1].style.textAlign = "center";
        pg.modal.childNodes[1].style.color = "black";
        pg.modal.childNodes[1].style.background = "white";
        pg.modal.childNodes[1].style.right = "5px";
        pg.modal.childNodes[1].style.top = "5px";
        pg.modal.childNodes[1].style.cursor = "pointer";
        pg.modal.childNodes[1].style.fontSize = "35px";
        pg.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px";

        // pg.modal.childNodes[1].setAttribute("id", "cierra");

        pg.modal.childNodes[1].addEventListener("click", mg.cerrarImg);

    },
    cerrarImg: function() {

        //Accedemos al padre de la propiedad lightbox y removemos el chil lightbox.
        pg.lightbox.parentNode.removeChild(pg.lightbox);

    }
}

mg.inicioGaleria();