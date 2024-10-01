function pintaCuadrado(lado){
    let result=[];

    for(let i=0; i<lado; i++){
        let fila=new Array(lado);
        for(let col=0; col<lado; col++){
            fila[col]='*';
            result+=fila;
        }
    }

    return result;
}

let cuadrado=pintaCuadrado(5);
for(let lado of cuadrado){
    console.log(lado);
}
