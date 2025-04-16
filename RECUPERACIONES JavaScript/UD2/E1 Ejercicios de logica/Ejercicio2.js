let numeros = [];
let numeroIntroducido;
let numeroMaximo;
let numeroMinimo;
let sumaNumeros = 0;
let mediaNumeros;

do {
    numeroIntroducido = parseInt(prompt('Introduzca un número'));

    if (isNaN(numeroIntroducido)) {
        alert('Debes introducir un numero');
    } else if (!isNaN(numeroIntroducido) && numeroIntroducido !== 0) {
        numeros.push(numeroIntroducido);
    }

} while (numeroIntroducido !== 0);

if (numeros.length > 0) {

    for (let i = 0; i < numeros.length; i++) {
        sumaNumeros += numeros[i];

        if (i === 0) {
            numeroMaximo = numeros[i];
            numeroMinimo = numeros[i];
        } else {
            if (numeroMaximo < numeros[i]) {
                numeroMaximo = numeros[i];
            }

            if (numeroMinimo > numeros[i]) {
                numeroMinimo = numeros[i];
            }
        }
    }

    mediaNumeros = sumaNumeros / numeros.length;

    console.log('La suma de todos los numeros es: ' + sumaNumeros);
    console.log('La media de todos los numeros es: ' + mediaNumeros);
    console.log('La cantidad de números introducidos es de: ' + numeros.length);
    console.log('El numero mas alto es: ' + numeroMaximo);
    console.log('El numero mas bajo es: ' + numeroMinimo);
} else {
    console.log('No has introducido ningun numero');
}



// **********************  Bucle sin parsear a entero  **********************
// do{
//     numeroIntroducido = prompt('Introduzca un número');

//     if(isNaN(numeroIntroducido)){
//         alert('Debes introducir un numero');
// 0   }if(!isNaN(numeroIntroducido) && numeroIntroducido != 0){
//         numeros.push(numeroIntroducido);
//     }

// }while(numeroIntroducido != '0');