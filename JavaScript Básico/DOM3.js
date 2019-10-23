function anade(){
    let elemento = document.createElement("li");
    let texto = document.createTextNode("Prueba");
    elemento.appendChild(texto);

    let lista = document.getElementById("lista");
    lista.appendChild(elemento);

    let nuevoElemento = "<li>Prueba 2</li>";
    lista.innerHTML += nuevoElemento;
}