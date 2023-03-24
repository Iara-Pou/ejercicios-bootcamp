function convertirAMayusculas(palabra) {
    let palabraConvertida = "";
    for(let i=0; i<palabra.length; i++){
        let letra = palabra.charAt(i);
        palabraConvertida += convertirAMayuscula(letra);
    }

    return palabraConvertida;

}

function convertirAMayuscula (caracter){
    const codigoAsciiCaracter = caracter.charCodeAt(0);
    //si el Ascii está en los rangos de letras, le resto la diferencia con las mayúsculas
    //en caracter unicode.
    if(codigoAsciiCaracter >=97 && codigoAsciiCaracter <=122){
        return String.fromCharCode(codigoAsciiCaracter - 32); 
    }
    return caracter;
}
