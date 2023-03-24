function devolverPalabraRevertida (palabra){
    let palabraArray = Array.from(palabra);
    let palabraRevertida = "";
    for(let i = 0; i<palabra.length; i++){
        palabraRevertida += palabraArray.pop();
    }
    return palabraRevertida;
}
