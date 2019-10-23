let cadena = prompt("Introduzca una cadena.");

let es_palindromo=function(c){
  if(!isNaN(c)){
    console.log("Solo has introducido números.")
  }else{
    let cSinEspacios = c.trim().replace(/ /g, "").toLowerCase().split("");
    let j = cSinEspacios.length-1;
    for(let i = 0; i<cSinEspacios.length; i++){
      if(cSinEspacios[i]!=cSinEspacios[j]){
        return false;
      }
      --j;
    }
    return true;
  }
}

let esPalindromo=es_palindromo(cadena);

if(esPalindromo){
  console.log("La cadena " + cadena + " es un palindromo.");
}else{
  console.log("La cadena " + cadena + " no es un palindromo.");
}