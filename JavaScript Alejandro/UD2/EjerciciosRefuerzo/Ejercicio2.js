function sucesionFibonacci(numero) {
    let sucesion = [0, 1];
    let n1 = 0;
    let n2 = 1;

    for (let i = 0; i < numero; i++) {
        if (n1 < n2) {
            n1 += n2;
            sucesion[i] = n1;
        } else {
            n2 += n1;
            sucesion[i] = n2;
        }
    }

    return sucesion;
}

let numero;
let fibonacci;

do {
    numero = prompt('Escribe la cantidad de numeros que va a contener la contener la sucesion de Fibonacci. ***DEBE SER MINIMO 3***');
    if (numero > 2) {
        if (numero == Math.floor(numero)) {
            fibonacci = sucesionFibonacci(parseInt(numero));
        } else {
            alert('Error... Debes escribir un numero entero');
        }

    } else if (numero <= 2) {
        alert('Error... Debes escribir un numero mayor que 2');
    } else {
        alert('Error... No has escrito un numero');
    }
} while (!(numero > 2) || numero != Math.floor(numero));


let stringFibonacci = '';

for (let i = 0; i < numero; i++) {
    if (i < numero - 1) {
        stringFibonacci += fibonacci[i] + ', ';
    } else {
        stringFibonacci += fibonacci[i] + '...';
    }
}

console.log(stringFibonacci);