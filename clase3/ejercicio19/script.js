const $botonEscribirTexto = document.querySelector("#boton-escribir");
const $botonReiniciarTexto = document.querySelector("#boton-reiniciar");

$botonEscribirTexto.onclick = escribirTexto;
$botonReiniciarTexto.onclick = reiniciarTexto;

function escribirTexto(){
    const textoNuevo = document.getElementById("input").value;
    let textoPrevio = document.querySelector("#contenedor-texto-ingresado").textContent;
    document.querySelector("#contenedor-texto-ingresado").textContent = textoPrevio + textoNuevo;
}

function reiniciarTexto(){
    document.querySelector("#contenedor-texto-ingresado").textContent = "";
}