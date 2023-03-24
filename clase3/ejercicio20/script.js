const $botonCalculo = document.querySelector("button");
$botonCalculo.onclick = manejarMayor;

function devolverMayor(numero1, numero2){
    if(numero1>numero2){
        return numero1;
    }
    if(numero2>numero1){
        return numero2
    }
    
    return null;
}

function manejarMayor(){
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;

    if(devolverMayor(numero1,numero2)){
        alert("El número mayor es " + devolverMayor(numero1,numero2));
    } else {
        alert("Los números son iguales!")
    }

}