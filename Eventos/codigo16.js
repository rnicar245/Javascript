

let informacion = function(evento) {

  let coordenadaX = evento.clientX;
  let coordenadaY = evento.clientY;

  let [tamanoX, tamanoY] = tamanoVentanaNavegador();

  let posicionHorizontal = (coordenadaX > tamanoX /2) ? "Derecha" : "Izquierda";
  let posicionVertical = (coordenadaY > tamanoY /2) ? "Abajo" : "Arriba";

  muestraInformacion(['Posición: ('+posicionHorizontal+","+posicionVertical+")"];
}

let muestraInformacion = function(mensaje) {
  elementoDiv.innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(let i=1; i<mensaje.length; i++) {
    elementoDiv.innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

function tamanoVentanaNavegador(){
  return [window.innerWidth, window.innerHeight];
}

document.onclick = informacion;
