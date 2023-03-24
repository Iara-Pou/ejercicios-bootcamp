for(let i = 1; i<=100; i++){
    let mensaje = "";
    if(i%3===0){
        mensaje += "Fizz";
    }
    if(i%5===0){
        mensaje += "Buzz";
    }
    
    console.log(mensaje || i);
}
