/**
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * @author Rafael Jesús Nieto Cardador
 */
{
    let inicio = function(){
        document.getElementById("ej").innerHTML = generaCadena();
    }

    let generaCadena = function(){
        let array1 = ["hola", "adios","buenas"];
        let ejemplo1 = 2 in array1;
        let ejemplo2 = 3 in array1;
        let ejemplo3 = "hola" in array1;
        let ejemplo4 = length in array1;
        return ejemplo1+"<br>"+ejemplo2+"<br>"+ejemplo3+"<br>"+ejemplo4;
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
