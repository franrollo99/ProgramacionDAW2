function pintaCuadrado(lado){
    let resultado=[];
    
    for(let i=0; i<lado; i++){ //filas
        let fila=new Array(lado);

        for(let col=0; col<lado; col++){ //columnas
            if(i==0 || col==0 || i==lado-1 || col==lado-1){
                fila[col]='* ';
            }else{
                fila[col]='  ';
            }
        }

        let filaTexto='';
        for(let col=0; col<lado; col++){
            filaTexto+=fila[col];
        }

        resultado[i]=filaTexto;
    }
    return resultado;
}

lado=prompt("Introduce el tamaño del lado del cuadrado");

cuadrado=pintaCuadrado(lado);
for(resultado of cuadrado){
    console.log(resultado);
}
