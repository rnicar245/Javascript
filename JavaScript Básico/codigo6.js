let numero = prompt("Introduzca el número de su DNI.");
let letra = prompt("Introduzca la letra de su DNI.");
if(numero <0 || numero>99999999){
  alert("ERROR: El número introducido es incorrecto")
}else{
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  if(letras[numero%23]!=letra.toUpperCase()){
    alert("ERROR: La letra introducida es incorrecta.")
  }else{
    alert("El número y la letra del DNI son correctos.")
  }
}