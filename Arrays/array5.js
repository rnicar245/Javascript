/**
 * Crea una función que devuelva un array con cada uno de los argumentos.
 * @author Rafael Jesús Nieto Cardador
 */
{
    let inicio = function(){
        document.getElementById("boton").addEventListener("click", generaArray);
    }

    let generaArray = function(){
        let arrayTexto = document.getElementById("texto").value.split(" ");
        mensaje = "";
        arrayTexto.forEach(function(elemento,indice){
            mensaje+= "array["+indice+"] = "+elemento+"<br>";
        });
        document.getElementById("resultado").innerHTML = "<br>"+mensaje;
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
