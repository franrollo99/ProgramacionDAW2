function factorial(numero) {
    let resultado = 1;
    let factorial = '';

    for (let i = numero; i > 0; i--) {
        resultado *= i;

        if (i > 1) {
            factorial += i + ' x ';
        } else {
            factorial += i + ' = ' + resultado;
        }
    }

    return factorial;
}

let numero;

//Solo hace la funcion si el numero es entero y mayor que 2
do {
    numero = prompt('Escribe un numero mayor que 2');
    if (numero > 2) {
        if (numero == Math.floor(numero)) {
            console.log(factorial(parseInt(numero)));
        } else {
            alert('Error... Debes escribir un numero entero');
        }

    } else if (numero <= 2) {
        alert('Error... Debes escribir un numero mayor que 2');
    } else {
        alert('Error... No has escrito un numero');
    }
} while (!(numero > 2) || numero != Math.floor(numero));