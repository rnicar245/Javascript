/**
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * @author Rafael Jesús Nieto Cardador
 */
{
    let inicio = function(){
        document.getElementById("ej").innerHTML = generaCadena();
    }

    let generaCadena = function(){
        let array1 = ["hola", "adios","buenas"];
        let ejemplo1 = Array.isArray(array1);
        let ejemplo2 = Array.isArray(4);;
        let ejemplo3 = Array.isArray(["Hola","Adios"]);;
        return ejemplo1+"<br>"+ejemplo2+"<br>"+ejemplo3;
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
