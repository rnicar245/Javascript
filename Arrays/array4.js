/**
 * Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
 * @author Rafael Jesús Nieto Cardador
 */
{
    let inicio = function(){
        document.getElementById("boton").addEventListener("click", generaArray);
    }

    let generaArray = function(){
        let num = document.getElementById("num").value;
        let array = new Array;
        mensaje = "";
        for(let i = 0; i<num; i++){
            array.push(i);
            mensaje+= "array["+i+"] = "+i+"<br>";
        }
        document.getElementById("resultado").innerHTML = "<br>"+mensaje;
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
