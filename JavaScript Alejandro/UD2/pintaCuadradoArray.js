function pintaCuadrado(lado){
    let result='';
    
    for(let i=0; i<lado; i++){ //filas
        let fila=[];

        for(let col=0; col<lado; col++){ //columnas
            if(i==0 || col==0 || i==lado-1 || col==lado-1){
                fila[col]='* ';
            }else{
                fila[col]='  ';
            }
        }

        result+=fila.join('') + "\n";
    }
    return result;
}

lado=prompt("Introduce el tamaño del lado del cuadrado");
console.log(pintaCuadrado(lado));




/**function pintaCuadrado(lado){
    let result=new Array(lado);
    
    for(let i=0; i<lado; i++){ //filas
        let fila=[];

        for(let col=0; col<lado; col++){ //columnas
            if(i==0 || col==0 || i==lado-1 || col==lado-1){
                fila[col]='* ';
            }else{
                fila[col]='  ';
            }
        }


        result[i]=fila;
    }
    return result;
}

let cuadrado=pintaCuadrado(5);
for(let lado of cuadrado){
    console.log(lado);
} */