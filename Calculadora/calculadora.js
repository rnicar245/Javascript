/**
 * @author Rafael Jesús Nieto Cardador
 */
{
  let divCalculadora;
  let arrayBotones = [];

  let inicio = function(){
    divCalculadora = document.getElementById("calculadora");
    creaBotones();
  }
  let creaBotones = function(){
    let arrayContenido = ["CE", "<-", "%", "+", "7", "8", "9","-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+/-", ",","="];
    // let boton = document.createElement("button");
    
    // boton.appendChild(document.createTextNode("hola"));
    // divCalculadora.appendChild(boton);
    for(let i = 0; i<arrayContenido.length;i++){
       arrayBotones.push(document.createElement("button"));
       arrayBotones[i].appendChild(document.createTextNode(arrayContenido[i]));
       divCalculadora.appendChild(arrayBotones[i]);
       

        //divCalculadora.appendChild(document.createElement("button").appendChild(document.createTextNode(arrayBotones[i])));
      }
  }
  document.addEventListener("DOMContentLoaded", inicio);
}
