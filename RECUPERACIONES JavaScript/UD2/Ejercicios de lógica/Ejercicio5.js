let entrada;
let rombo;

do{
    entrada = parseInt(prompt('Introduce un numero IMPAR para indicar la altura del rombo'));

    if(!isNaN(entrada) && entrada%2 === 1){
        rombo = crearRombo(entrada);
        let romboPintado='';

        for(let i=0; i<entrada; i++){
            romboPintado += rombo[i] + '\n';
        }

        console.log(romboPintado);

    }else if(entrada%2 === 0){
        alert('El numero introducido debe ser impar');
    }else{
        alert('Debes introducir un numero impar');
    }

}while(isNaN(entrada) || entrada%2 !== 1);

function crearRombo(altura)
{
    let filas = new Array(altura);
    let filas1 = new Array(Math.ceil(altura/2)); // Redondeo hacia arriba
    let filas2 = new Array(Math.floor(altura/2)); // Redondeo hacia abajo

    // Primer triangulo de con altura/2 redondeado hacia arriba
    for(let fila=0; fila<filas1.length; fila++){
        filas1[fila] = '';

        for(let col=(filas1.length-fila)-1; col>0; col--){
            filas1[fila] += ' ';
        }

        for(let col=0; col<fila+1; col++){
            filas1[fila] += '* ';
        }
    }

    // Segundo triangulo invertido de con altura/2 redondeado hacia abajo
    for(let fila=0; fila<filas2.length; fila++){
        filas2[fila] = '';

        for(let col=0; col<fila+1; col++){
            filas2[fila] += ' ';
        }

        for(let col=0; col<filas2.length-fila; col++){
            filas2[fila] += '* ';
        }
    }
    
    filas = filas1.concat(filas2); // Junto los dos arrays en uno sin modificar los arrays originales
    return filas;
}