function sumarRango (numeroMenor, numeroMayor){
    let mayor, menor, acumulador;

    //verificar que los numeros estén correctamente ingresados.
    if(numeroMayor>numeroMenor){
        mayor = numeroMayor;
        menor = numeroMenor;
    } else {
        mayor = numeroMenor;
        menor = numeroMayor;
    }

    acumulador = menor;
    while (mayor > menor){
        acumulador += ++menor; 
    }
    return acumulador;
}
