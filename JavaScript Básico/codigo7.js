var numero = prompt("Introduzca un número entero.");
var factorial = 1;
if(numero <0){
  alert("ERROR: No se puede hacer factorial de un número negativo.");
}else{
  for (var i = 1; i <=numero; i++) {
    factorial=factorial*i;
  }
  alert(factorial);
}
