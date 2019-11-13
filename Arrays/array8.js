/**
 * Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(),
 * Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
 * @author Rafael Jesús Nieto Cardador
 */
{
    let inicio = function(){
        ejemplo1();
        ejemplo2();
        ejemplo3();
        //ejemplo4;
    }

    let ejemplo1 = function(){
        let array = [1,2,3,4];
        let mensaje = "";

        array.forEach(function(elemento,indice){
            mensaje += "array["+indice+"] = "+elemento+"<br>";
        });
        document.getElementById("resultado1").innerHTML = mensaje;
    }

    let ejemplo2 = function(){
        let array = [1,2,3,"cuatro"];

        let booleano = array.every(function(elemento){ return !isNaN(elemento); });
        document.getElementById("resultado2").innerHTML = booleano;
    }

    let ejemplo3 = function(){
        let array = [1,2,3,"cuatro"];

        let booleano = array.some(function(elemento){ return !isNaN(elemento); });
        document.getElementById("resultado3").innerHTML = booleano;
    }


        
    document.addEventListener("DOMContentLoaded", inicio);
}
