let entrada;
let triangulo;

do{
    entrada = parseInt(prompt('Introduce un numero para indicar la altura del triangulo'));

    if(!isNaN(entrada)){
        triangulo = crearTriangulo(entrada);
        let trianguloPintado='';

        for(let i=0; i<entrada; i++){
            trianguloPintado += triangulo[i] + '\n';
        }

        console.log(trianguloPintado);

    }else{
        alert('Debes introducir un numero');
    }

}while(isNaN(entrada));

function crearTriangulo(altura)
{
    let filas = new Array(altura);

    for(let fila=0; fila<altura; fila++){
        filas[fila] = '';

        for(let col=(altura-fila)-1; col>0; col--){
            filas[fila] += '  ';
        }

        for(let col=0; col<(fila*2)+1; col++){
            filas[fila] += '* ';
        }
    }

    return filas;
}