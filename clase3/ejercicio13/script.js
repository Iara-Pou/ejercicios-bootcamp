function calcularRaizDigital (numero){
    let numeroArray = Array.from(numero.toString());
    numeroArray = numeroArray.map((nro)=>Number(nro));
    return numeroArray.reduce((acumulador, valor)=>acumulador + valor);
}
