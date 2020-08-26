pf = {

    // Seleccionamos todo la informacion de los input con la clase validar.
    entradas: document.querySelectorAll("input.validar"),

    valor: null,

}

mf = {

    inicioFormulario: function() {

        // Le damos el evento focus a cada input.

        for (var i = 0; i < pf.entradas.length; i++) {

            pf.entradas[i].addEventListener("focus", mf.eventoFocus);
            pf.entradas[i].addEventListener("blur", mf.eventoBlur);

        }

    },

    eventoFocus: function(input) {

        // Con target obtenemos la etiqueta seleccionada y capturamos el valor del value.
        console.log(input.target.id);

        pf.valor = input.target.value;

        if (pf.valor == "") {

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;
            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.color = "red";
            document.querySelector("#" + input.target.id).style.background = "rgba(255,255,0,.5)";

        }

    },

    eventoBlur: function(input) {
        document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0;
        document.querySelector("[for=" + input.target.id + "] .obligatorio").style.color = "#777";
        document.querySelector("#" + input.target.id).style.background = "white";
    }

}

mf.inicioFormulario();