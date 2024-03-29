function limita(elEvento, maximoCaracteres) {
  let elemento = document.getElementById("texto");

  // Obtener la tecla pulsada
  let evento = elEvento;
  let codigoCaracter = evento.charCode;
  console.log(codigoCaracter);
  // Permitir utilizar las teclas con flecha horizontal
  if(codigoCaracter == "ArrowLeft" || codigoCaracter == "ArrowRight") {
    return false;
  }

  // Permitir borrar con la tecla Backspace y con la tecla Supr.
  if(codigoCaracter == "Delete" || codigoCaracter == "Backspace") {
    return false;
  }
  else if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }
}

function actualizaInfo(maximoCaracteres) {
  let elemento = document.getElementById("texto");
  let info = document.getElementById("info");

  if(elemento.value.length >= maximoCaracteres ) {
    info.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
  }
  else {
    info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-elemento.value.length)+" caracteres adicionales";
  }
}
