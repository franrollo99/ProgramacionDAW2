import ValidacionError from "./ValidacionError.js";

const formulario = document.getElementById('formulario');

const nombre = document.getElementById('nombre');
const contraseña = document.getElementById('contraseña');
const email = document.getElementById('email');
const fechaNacimiento = document.getElementById('fechaNacimiento');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarNombre(nombre.value, (valor1, error1) => {
        if (error1) return mostrarError(error1);
        nombre.classList.remove('error');

        validarContraseña(contraseña.value, (valor2, error2) => {
            if (error2) return mostrarError(error2);
            contraseña.classList.remove('error');

            validarEmail(email.value, (valor3, error3) => {
                if (error3) return mostrarError(error3);
                email.classList.remove('error');

                validarFechaNacimiento(fechaNacimiento.value, (valor4, error4) => {
                    if (error4) return mostrarError(error4);
                    fechaNacimiento.classList.remove('error');


                    alert('El formulario ha sido validado correctamente');

                    localStorage.clear();

                    const datos = {
                        nombre: nombre.value,
                        contraseña: contraseña.value,
                        email: email.value,
                        fechaNacimiento: fechaNacimiento.value
                    };

                    localStorage.setItem('datosFormulario', JSON.stringify(datos));
                });
            });
        });
    });
});


function validarNombre(valor, callback) {
    if (valor.length < 3) {
        return callback(null, new ValidacionError('El nombre debe tener al menos 3 caracteres', nombre));
    }

    if (contieneNumeros(valor)) {
        return callback(null, new ValidacionError('El nombre no debe tener numeros', nombre));
    }

    callback(valor, null);
}


function validarContraseña(valor, callback) {
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;

    for (let caracter of valor) {
        if (!isNaN(caracter)) tieneNumero = true;
        else if (caracter === caracter.toUpperCase()) tieneMayuscula = true;
        else if (caracter === caracter.toLowerCase()) tieneMinuscula = true;
    }

    if (valor.length < 8) {
        return callback(null, new ValidacionError('La contraseña debe tener al menos 8 caracteres', contraseña));
    }

    if (!tieneMayuscula || !tieneMinuscula || !tieneNumero) {
        return callback(null, new ValidacionError('La contraseña debe incluir al menos una letra mayúscula, una minúscula y un número', contraseña));
    }


    callback(valor, null);
}


function validarEmail(valor, callback) {
    const partesArroba = valor.split('@');
    if (partesArroba.length !== 2) {
        return callback(null, new ValidacionError('El email debe contener una única @', email));
    }

    // Esto es igual que   const dominio = partesPunto[0];   const extension = partesPunto[1];
    const [parteAntes, parteDespues] = partesArroba;

    if (parteAntes.length === 0 || parteDespues.length === 0) {
        return callback(null, new ValidacionError('Debe haber texto antes y después de la @', email));
    }

    const partesPunto = parteDespues.split('.');
    if (partesPunto.length !== 2) {
        return callback(null, new ValidacionError('El email debe contener un único punto después de la @', email));
    }

    const [dominio, extension] = partesPunto;

    if (dominio.length === 0 || extension.length < 2 || extension.length > 3) {
        return callback(null, new ValidacionError('El email debe tener dominio y terminar en un punto seguido de 2 o 3 letras', email));
    }

    for (let c of extension) {
        if (!isNaN(c)) {
            return callback(null, new ValidacionError('La extensión del email no debe tener números', email));
        }
    }

    callback(valor, null);
}


function validarFechaNacimiento(valor, callback) {
    if(!valor){
        return callback(null, new ValidacionError('Introduce una fecha', fechaNacimiento));
    }

    const fechaActual = new Date();
    const fechaNacimientoFormateada = new Date(valor);

    const edad = (fechaActual - fechaNacimientoFormateada) / 1000 / 60 / 60 / 24 / 365;

    if (edad < 18 || edad > 24) {
        return callback(null, new ValidacionError('Debes tener entre 18 y 24 años', fechaNacimiento));
    }

    callback(valor, null);
}


function contieneNumeros(valor) {
    for (let caracter of valor) {
        if (!isNaN(caracter)) {
            return true;
        }
    }

    return false;
}


function mostrarError(error) {
    alert(error.message);
    error.campoFallido.classList.add('error');
}