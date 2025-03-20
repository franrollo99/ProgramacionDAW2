let entrada1;
let entrada2;
let valor1;
let valor2;
let resultado;

do{
    entrada1 = parseInt(prompt('Introduce el numero de la figura que quieres dibujar: \n1-Cuadrado \n2-Rectangulo \n3-Triangulo \n4-Rombo \n0-Salir'));
    
    if(isNaN(entrada1)){
        alert('Debes introducir un numero');
    }else{
        switch (entrada1){
            case 1:
                valor1 = prompt('Introduce un numero para indicar el tamaño del cuadrado');
                console.log(crearCuadrado(valor1));
                break
            case 2:
                valor1 = prompt('Introduce un numero para indicar la base del rectángulo');
                valor2 = prompt('Introduce un numero para indicar la altura del rectángulo');
                console.log(crearRectangulo(valor1, valor2));
                break
            case 3:
                valor1 = prompt('Introduce un numero para indicar la altura del triangulo');
                console.log(crearTriangulo(valor1));
                break
            case 4:
                valor1 = prompt('Introduce un numero IMPAR para indicar la altura del rombo');
                if(valor1%2 === 1){
                    console.log(crearRombo(valor1));
                }else{
                    alert('No has introducido un numero IMPAR');
                }
                break
            case 0:
                console.log('Cerrando programa');
                break
            default:
                alert('Debes introducir un numero valido');
        }
    }

}while(entrada1 !==0)

function crearCuadrado(lado)
{
    resultado = '';
    let filas = new Array(lado);

    for(let fila=0; fila<lado; fila++){

        filas[fila] = '';

        for(let col=0; col<lado; col++){

            if(fila===0 || fila===(lado-1) || col===0 || col===(lado-1)){
                filas[fila] += '* ';

            }else{
                filas[fila] += '  ';
            }
        }

        resultado += filas[fila] + '\n';
    }

    return resultado;
}

function crearRectangulo(base, altura)
{
    resultado = '';
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

        resultado += filas[fila] + '\n';
    }

    return resultado;
}

function crearTriangulo(altura)
{
    resultado = '';
    let filas = new Array(altura);

    for(let fila=0; fila<altura; fila++){
        filas[fila] = '';

        for(let col=(altura-fila)-1; col>0; col--){
            filas[fila] += '  ';
        }

        for(let col=0; col<(fila*2)+1; col++){
            filas[fila] += '* ';
        }

        resultado += filas[fila] + '\n';
    }

    return resultado;
}

function crearRombo(altura)
{
    resultado = '';
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

        resultado += filas1[fila] + '\n';
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

        resultado += filas2[fila] + '\n';
    }
    
    return resultado;
}