/**
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * @author Rafael Jesús Nieto Cardador
 */
{
    
    
    let inicio = function(){
        document.getElementById("ej").innerHTML = generaCadena();
    }

    let generaCadena = function(){
        let array1 = [[1,2,3],[4,5,6],[7,8,9]];
        let mensaje = "";

        array1.forEach(function(elemento,indice,array){
            mensaje += array+"["+indice+"] = "+elemento+"<br>";
        });

        return mensaje;
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
