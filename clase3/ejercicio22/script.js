const $input = document.querySelector("input");
$input.oninput = escribirContenidoDiv;

function escribirContenidoDiv(){
    const $div = document.querySelector("div");
    $div.textContent = $input.value;
}
