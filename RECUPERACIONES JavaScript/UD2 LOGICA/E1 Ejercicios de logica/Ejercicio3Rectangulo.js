let numero1;
let numero2;
let rectangulo;

do {
    numero1 = parseInt(prompt('Introduce un numero para indicar la base del rectángulo'));

    if (numero1 < 0 || numero1 > 100) {
        alert('Debes introducir un numero entre 0 y 100');
    } else if (isNaN(numero1)) {
        alert('Debes introducir un numero');
    } else {
        do {
            numero2 = parseInt(prompt('Introduce un numero para indicar la altura del rectángulo'));

            if (numero2 < 0 || numero2 > 100) {
                alert('Debes introducir un numero entre 0 y 100');
            } else if (isNaN(numero2)) {
                alert('Debes introducir un numero');
            } else {
                rectangulo = crearRectangulo(numero1, numero2);

                rectanguloPintado = '';

                for (let i = 0; i < numero2; i++) {
                    rectanguloPintado += rectangulo[i] + '\n';
                }

                console.log(rectanguloPintado);
            }

        } while (numero2 < 0 || numero2 > 100 || isNaN(numero2));
    }

} while (numero1 < 0 || numero1 > 100 || isNaN(numero1));

function crearRectangulo(base, altura) {
    let filas = new Array(altura);

    for (let fila = 0; fila < altura; fila++) {

        filas[fila] = '';

        for (let col = 0; col < base; col++) {

            if (fila === 0 || fila === (altura - 1) || col === 0 || col === (base - 1)) {
                filas[fila] += '* ';

            } else {
                filas[fila] += '  ';
            }
        }
    }

    return filas;
}


