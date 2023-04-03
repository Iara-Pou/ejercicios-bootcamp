// 14.- Codificador Romano
// Crea una función que reciba como parámetro un integral y que retorne su valor en números 
// romanos.
// Input: 11
// Output: “XI”

function codificarANumeroRomano (numeroEntero){
    conseguirUnidadDeMil(numeroEntero);
    conseguirCentena(numeroEntero);
    conseguirDecena(numeroEntero);
    conseguirUnidades(numeroEntero);
}