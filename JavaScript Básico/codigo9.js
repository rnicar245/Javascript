var cadena = prompt("Introduzca una cadena.");

let mayusculas_minusculas=function(c){
  if(!isNaN(c)){
    console.log("Solo has introducido números.")
  }else{
    if(c.toUpperCase()==c){
      console.log("Toda la cadena está en mayúsculas.");
    }else if(c.toLowerCase()==c){
      console.log("Toda la cadena está en minúsculas.");
    }else{
      console.log("En la cadena hay tanto mayúsculas como minúsculas.")
    }
  }
}
mayusculas_minusculas(cadena);
