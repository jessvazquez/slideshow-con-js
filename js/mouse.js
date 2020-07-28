var pm = {

    zona: document.querySelector("#efectoMouse"),

    figuras: document.querySelectorAll("#efectoMouse figure"),

    mouseX: 0,

    mouseY: 0,

}

var mm = {

    inicioMouse: function() {

        //Anadimos un addEventListener con el evento mousemove a la
        //etiqueta con el id efectoMouse guardada en la propiedad zona.
        pm.zona.addEventListener("mousemove", mm.movimientoMouse);

        //Anadimos las 3 img.
        for (var i = 0; i < pm.figuras.length; i++) {

            //Metemos 3 etiquetas <img> con la fuente de cada imagen.
            // pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png">';
            pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png">';

            //Ponemos cada figura en diferente numero de zIndex. 0 -1 -2.
            pm.figuras[i].style.zIndex = -i;

        }

        //Si lo ponemos de la siguiente manera nos va a decir que su altura es 0:
        //console.log(pm.figuras[0].childNodes[0].height);
        //ya que eso de debe a la carga de trabajo,
        //el navegador primero carga el js antes que la imagen 
        //por lo tanto el resultado es cero.

        //Por lo tanto debemos poner un retardo con un setTimeout para que todo cargue.
        setTimeout(() => {

            //De esta manera hacemos que la caja del mouse sea del tamano
            //de la img agregada. 
            pm.zona.style.height = pm.figuras[0].childNodes[0].height + "px";

            // console.log(pm.zona.style.height);

        }, 500)

    },

    movimientoMouse: function(movimiento) {

        //console.log(movimiento);
        //Con offset tomamos las coordenadas de la caja.
        //console.log("X= " + movimiento.offsetX, "Y= " + movimiento.offsetY);
        pm.mouseX = -movimiento.offsetX;
        pm.mouseY = movimiento.offsetY;

        for (var i = 0; i < pm.figuras.length; i++) {

            //Si le agregamos el +50, 
            //De esta manera se mueven las img a diferentes velocidades
            pm.figuras[i].style.left = pm.mouseX / (i * 100 + 50) + "%";
            pm.figuras[i].style.top = pm.mouseY / (i * 100 + 50) + "%";

        }

    }

}

mm.inicioMouse();