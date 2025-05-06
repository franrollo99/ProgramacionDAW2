import ValidacionError from "./ValidacionError.js";

const formulario = document.getElementById('formulario');
let mensajeError;

const nombre = document.getElementById('nombre');
const nombreError = document.getElementById('nombreError');

const contraseña = document.getElementById('contraseña');
const contraseñaError = document.getElementById('contraseñaError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const fechaNacimiento = document.getElementById('fechaNacimiento');
const fechaNacimientoError = document.getElementById('fechaNacimientoError');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarNombre(nombre.value, (valor, error) => {
        
    });
});



function validarNombre(valor, callback) {
    nombreError.innerHTML = '';

    if (valor.length < 3) {
        mensajeError = 'El nombre debe tener al menos 3 caracteres';
        nombreError.innerHTML += mensajeError;

        callback(null, new ValidacionError(mensajeError, nombre));
    } else if (contieneNumeros(valor)) {
        nombreError.innerHTML += 'El nombre no debe tener numeros';
    } else {
        // callback(valor, );
    }
}

function validarContraseña(valor, callback) {
    contraseñaError.innerHTML = '';

    let contraseñaValida = false;
    let contieneMayusculas = false;
    let contieneMinusculas = false;
    let contieneNumeros = false;

    for (let caracter of valor) {
        if (contieneNumeros(caracter)) contieneNumeros = true;
        if (caracter.toUpperCase()) contieneMayusculas = true;
        if (caracter.toLowerCase()) contieneMinusculas = true;
    }

    if (contieneMayusculas && contieneMinusculas && contieneNumeros) {
        contraseñaValida = true;
    }


    if (!contraseñaValida) {
        contraseñaError.innerHTML += 'La contraseña debe incluir al menos una letra mayuscula, una minuscula y un numero';
    } else if (valor.length < 8) {
        contraseñaError.innerHTML += 'La contraseña debe tener al menos 8 caracteres';
    } else {
        callback(email.value, validarEmail());
    }
}

function validarEmail(valor, callback) {
    emailError.innerHTML = '';

    let emailValido = false;



    if (emailValido) {
        emailError.innerHTML += 'El email debe contener una unica @, text antes y despues de la @, y terminar con un punto y seguido de 2 o 3 letras';
    } else {
        callback(fechaNacimiento.value);
    }

}

function validarFechaNacimiento(valor) {
    fechaNacimientoError.innerHTML = '';

    const fechaActual = new Date();
    const fecha = new Date(valor);

    const edad = (fechaActual - fecha) / 100 / 60 / 60 / 24 / 365;

    if (edad < 18 && fecha > 24) {
        fechaNacimientoError.innerHTML += 'Debes tener entre 18 y 24 años';
    } else {
        console.log('todo ok');
    }
}



function contieneNumeros(valor) {
    for (let caracter of valor) {
        if (!isNaN(caracter)) {
            return true;
        }
    }

    return false;
}