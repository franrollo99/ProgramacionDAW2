let numero1;
let numero2;

do {
    numero1 = parseInt(prompt('Introduce un primer numero entre 0 y 10'));

    if (numero1 < 0 || numero1 > 10) {
        alert('Debes introducir un numero entre 0 y 10');
    } else if (isNaN(numero1)) {
        alert('Debes introducir un numero');
    } else {
        do {
            numero2 = parseInt(prompt('Introduce un segundo numero entre 0 y 10 para hacer la tabla de multiplicar con el primero'));

            if (numero2 < 0 || numero2 > 10) {
                alert('Debes introducir un numero entre 0 y 10');
            } else if (isNaN(numero2)) {
                alert('Debes introducir un numero');
            } else {
                tablaMultiplicar(numero1, numero2);
            }

        } while (numero2 < 0 || numero2 > 10 || isNaN(numero2));
    }

} while (numero1 < 0 || numero1 > 10 || isNaN(numero1));

function tablaMultiplicar(num1, num2) {
    let resultado = '';

    if (num1 < num2) {
        for (let n = num1; n <= num2; n++) {
            resultado += `Tabla del ${n} \n`;
            for (let i = 0; i <= 10; i++) {
                resultado += `${n} x ${i} = ${n * i} \n`;
            }
            resultado += '\n\n\n';
        }
    } else {
        for (let n = num2; n <= num1; n++) {
            resultado += `Tabla del ${n} \n`;
            for (let i = 0; i <= 10; i++) {
                resultado += `${n} x ${i} = ${n * i} \n`;
            }
            resultado += '\n\n\n';
        }
    }

    console.log(resultado);
}