var numero = prompt("Introduzca un número entero.");

par_o_impar(numero);

function par_o_impar(num){
  if(isNaN(num) || num == null){
    console.log("ERROR: Introduce un número entero.");
  }else{
    if(num%2 !=0){
      console.log("El número " + num + " es impar.")
    }else{
      console.log("El número " + num + " es par.");
    }
  }
}
