let entrada1;
let entrada2;
let rectangulo;

do{
    entrada1 = parseInt(prompt('Introduce un numero para indicar la base del rectángulo'));
    entrada2 = parseInt(prompt('Introduce un numero para indicar la altura del rectángulo'));

    if(!isNaN(entrada1) && !isNaN(entrada2)){
        rectangulo = crearRectangulo(entrada1, entrada2);

        rectanguloPintado = '';

        for(let i=0; i<entrada2; i++){
            rectanguloPintado += rectangulo[i] + '\n';
        }

        console.log(rectanguloPintado);
    }else{
        alert('Debes introducir un numero');
    }
    
}while(isNaN(entrada1) || isNaN(entrada2))


function crearRectangulo(base, altura)
{
    let filas = new Array(altura);

    for(let fila=0; fila<altura; fila++){

        filas[fila] = '';

        for(let col=0; col<base; col++){

            if(fila===0 || fila===(altura-1) || col===0 || col===(base-1)){
                filas[fila] += '* ';

            }else{
                filas[fila] += '  ';
            }
        }
    }

    return filas;
}


