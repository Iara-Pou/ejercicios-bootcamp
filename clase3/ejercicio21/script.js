const $boton = document.querySelector("button");
$boton.onclick = asignarNumerosRandom;

function asignarNumerosRandom (){
    mostrarLista();

    document.querySelectorAll("#lista-numeros-random > li").forEach( (li) => {
        li.textContent = generarNumeroRandomDel1Al100();
    }

    );
}

function generarNumeroRandomDel1Al100 (){
return Math.ceil(Math.random()*100);
}

function mostrarLista(){
    document.querySelector("#lista-numeros-random").classList.remove("oculto");
}
