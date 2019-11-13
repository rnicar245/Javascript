/**
 * Crea una función que elimine todos los undefined de un array.
 * @author Rafael Jesús Nieto Cardador
 */
{
    let inicio = function(){
        let arrayTexto = [0, "hola", undefined, "adios", 2, "undefined"];
        mensaje = "";
        arrayTexto.forEach(function(elemento,indice){
            if(elemento == undefined){
                arrayTexto.splice(indice,1);
            }
        });
        arrayTexto.forEach(function(elemento,indice){
            mensaje+= "array["+indice+"] = "+elemento+"<br>";
            
        });
        document.getElementById("resultado").innerHTML = "<br>"+mensaje;
    }
        
    document.addEventListener("DOMContentLoaded", inicio);
}
