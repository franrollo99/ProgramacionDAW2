let entrada;
let rombo;

// do{
//     entrada = parseInt(prompt('Introduce un numero para indicar la altura del rombo'));

//     if(!isNaN(entrada)){
//         rombo = crearRombo(entrada);
//         let romboPintado='';

//         for(let i=0; i<entrada; i++){
//             romboPintado += rombo[i] + '\n';
//         }

//         console.log(romboPintado);

//     }else{
//         console.log('Debes introducir un numero');
//     }

// }while(isNaN(entrada));

function crearRombo(altura)
{
    let resultado = '';
    let filas = new Array(altura);

    for(let fila=0; fila<altura; fila++){
        filas[fila] = '';

        for(let col=(altura-fila); col>0; col--){
            filas[fila] += ' ';
        }

        for(let col=0; col<fila+1; col++){
            filas[fila] += '* ';
        }
        
        resultado += filas[fila] + '\n';
    }
    console.log(resultado);
    // return filas;
}

crearRombo(10)