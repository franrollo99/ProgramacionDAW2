function pintaTriangulo(altura){
    let resultado=[];

    // Recorremos la altura por filas
    for (let i = 0; i<altura; i++){
        let fila=new Array(2*altura-1);
        
        for(let col=0; col<fila.length; col++){
            fila[col]='  ';
        }

        for(let col=altura-i-1; col<altura+i; col++){
            fila[col]='* '
        }

        let filaTexto=' ';
        for(let col=0; col<fila.length; col++){
            filaTexto+=fila[col];
        }

        resultado[i]=filaTexto;
    }

    return resultado;
}

let altura = parseInt(prompt('Introduce la altura del triangulo'));
triangulo=(pintaTriangulo(altura));
for(resultado of triangulo){
    console.log(resultado);
}