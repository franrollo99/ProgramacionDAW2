function comprobarAnagrama(palabra1, palabra2) {
    if (palabra1 === palabra2) {
        alert('Las palabras no son anagramas porque son iguales');
        return;
    } else if (palabra1.length !== palabra2.length) {
        alert('Las palabras no son anagramas porque tienen diferente numero de caracteres');
        return;
    }

    let letras1 = letrasPalabra(palabra1);
    let letras2 = letrasPalabra(palabra2);

    for (let letra1 in letras1) {
        let encontrado = false;
        for (let letra2 in letras2) {
            if (letra1 === letra2 && letras1[letra1] === letras2[letra2]) {
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            alert('Las palabras ' + palabra1 + ' y ' + palabra2 + ' no son anagramas');
            return;
        }
    }

    return alert('Las palabras ' + palabra1 + ' y ' + palabra2 + ' son anagramas');;
}

function letrasPalabra(palabra) {
    let letras = {};

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        letras[letra] = (letras[letra] || 0) + 1; // Si letras[letra] es cualquier valor considerado falso (0, undefined, null, NaN, "", false), usa el segundo valor, el 0
    }

    return letras;
}

let palabra1 = prompt('Introduce una palabra').toLowerCase();
let palabra2 = prompt('Introduce otra palabra').toLowerCase();

comprobarAnagrama(palabra1, palabra2);