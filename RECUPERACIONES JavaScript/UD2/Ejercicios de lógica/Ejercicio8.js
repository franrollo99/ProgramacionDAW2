let numero;

do {
    numero = parseInt(prompt('Introduce un numero entre 1 y 10 para calcular su factorial. \nIntroduce 0 para salir'));

    if (numero < 0 || numero > 10) {
        alert('Debes introducir un numero entre 1 y 10');
    } else if (isNaN(numero)) {
        alert('Debes introducir un numero');
    } else if (numero === 0) {
        console.log('Saliendo del programa...');
    } else {
        console.log(calcularFactorial(numero));
    }

} while (numero !== 0);

function calcularFactorial(num) {
    let resultado = '';
    let total = 1;

    for (let n = num; n > 0; n--) {
        if (n === 1) {
            resultado += `${n} = `;
        } else {
            resultado += `${n} x `;
            total *= n;
        }
    }

    resultado += total;

    return resultado;
}