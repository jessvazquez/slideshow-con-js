"use strict";

pf = {
  // Seleccionamos todo la informacion de los input con la clase validar.
  entradas: document.querySelectorAll("input.validar"),
  // Para obtener el valor del input.
  valor: null,
  //Para la expresion regular.
  expresionRegular: null
};
mf = {
  inicioFormulario: function inicioFormulario() {
    // Le damos el evento focus a cada input.
    for (var i = 0; i < pf.entradas.length; i++) {
      pf.entradas[i].addEventListener("focus", mf.eventoFocus);
      pf.entradas[i].addEventListener("blur", mf.eventoBlur);
      pf.entradas[i].addEventListener("change", mf.eventoChange);
    }
  },
  eventoFocus: function eventoFocus(input) {
    // Con target obtenemos la etiqueta seleccionada y capturamos el valor del value.
    console.log(input.target);
    console.log(input.target.value);
    pf.valor = input.target.value;

    if (pf.valor == "") {
      document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;
      document.querySelector("[for=" + input.target.id + "] .obligatorio").style.color = "red";
      document.querySelector("#" + input.target.id).style.background = "rgba(255,255,0,.5)";
    } //Vamos a crear una caja en el label donde este el usuario,
    //si detectamos un error de validacion.
    //Seleccionamos el id de la caja.
    //Agregamos un campo con appendChild.
    //Creamos un DIV con un atributo de clase llamada error.


    document.querySelector("[for=" + input.target.id + "]").appendChild(document.createElement("DIV")).setAttribute("class", "error");
  },
  eventoBlur: function eventoBlur(input) {
    document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0;
    document.querySelector("[for=" + input.target.id + "] .obligatorio").style.color = "#777"; // document.querySelector("#" + input.target.id).style.background = "white";
  },
  eventoChange: function eventoChange(input) {
    // Obtenemos el valor que se escribe en el input.
    pf.valor = input.target.value;

    if (pf.valor != "") {
      //Obtenemos el id del input
      switch (input.target.id) {
        case "nombre":
          //Validamos que el valor ingresado a traves 
          // del input, no sea menos a 2 o mayor a 6 de longitud.
          if (pf.valor.length < 2 || pf.valor.length > 6) {
            console.log("Error, nombre corto o muy largo."); //Seleccionamos el div que acabamos de crear en el metodo focus.

            document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">Error con el nombre: ' + input.target.placeholder + '</span>'; // +input.target.placeholder+
            // [for=input.target.id] .error
          } else {
            //Si los datos estan correctos entonces removemos el DIV creado desde JS.
            //Removemos con parentNode.removeChild(ponemos el la ubicacion de div creado desde JS.)
            //Se elimina asi mismo.
            document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
            document.querySelector("#" + input.target.id).style.background = "#a1ec78";
          }

          break;

        case "email":
          pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

          if (!pf.expresionRegular.test(pf.valor)) {
            console.log("Error con email."); //Seleccionamos el div que acabamos de crear en el metodo focus.

            document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">Error con la email: ' + input.target.placeholder + '</span>';
          } else {
            //Si los datos estan correctos entonces removemos el DIV creado desde JS.
            //Removemos con parentNode.removeChild(ponemos el la ubicacion de div creado desde JS.)
            //Se elimina asi mismo.
            document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
            document.querySelector("#" + input.target.id).style.background = "#a1ec78";
          }

          break;

        case "contrasena":
          pf.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/; //Usamos el metodo test, con el que validamos que el valor del input cumpla
          //con la expresionRegular.

          if (!pf.expresionRegular.test(pf.valor)) {
            console.log("Error con contrasena."); //Seleccionamos el div que acabamos de crear en el metodo focus.

            document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">Error con la contraseña: ' + input.target.placeholder + '</span>';
          } else {
            //Si los datos estan correctos entonces removemos el DIV creado desde JS.
            //Removemos con parentNode.removeChild(ponemos el la ubicacion de div creado desde JS.)
            //Se elimina asi mismo.
            document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
            document.querySelector("#" + input.target.id).style.background = "#a1ec78";
          }

          break;
      }
    }
  }
};
mf.inicioFormulario();