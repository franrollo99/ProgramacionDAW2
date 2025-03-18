let entrada;
let cuadrado;

// Bucle que se repite mientras que entrada no sea un numero
// isNaN(entrada) devuelve false si el valor es un numero
do{
    entrada = parseInt(prompt('Introduce un numero para indicar el tamaño del cuadrado'));

    if(!isNaN(entrada)){
        cuadrado = crearRectangulo(entrada);

        cuadradoPintado = '';

        for(let i=0; i<entrada; i++){
            cuadradoPintado += cuadrado[i] + '\n';
        }

        console.log(cuadradoPintado);
    }else{
        alert('Debes introducir un numero');
    }
}while(isNaN(entrada))


function crearRectangulo(base, altura)
{
    // let resultado = '';
    let filas = new Array(base);

    for(let fila=0; fila<lado; fila++){

        filas[fila] = '';

        for(let col=0; col<lado; col++){

            if(fila===0 || fila===(lado-1) || col===0 || col===(lado-1)){
                filas[fila] += '* ';

            }else{
                filas[fila] += '  ';
            }
        }

        // resultado += filas[fila] + '\n';
    }

    // console.log(resultado);
    return filas;
}


