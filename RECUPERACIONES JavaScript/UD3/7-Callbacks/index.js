import ValidacionError from "./ValidacionError.js";

const formulario = document.getElementById('formulario');

const nombre = document.getElementById('nombre');
const contraseña = document.getElementById('contraseña');
const email = document.getElementById('email');
const fechaNacimiento = document.getElementById('fechaNacimiento');

// Si existen datos en localStorage, precargamos los campos del formulario con esos datos
window.addEventListener('load', ()=>{
    const datos = JSON.parse(localStorage.getItem('datosFormulario'));

    if(datos){
        nombre.value=datos.nombre;
        contraseña.value=datos.contraseña;
        email.value=datos.email;
        fechaNacimiento.value=datos.fechaNacimiento;
    }
});

// Validación progresiva usando callbacks anidados
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarNombre(nombre.value, (valor1, error1) => {
        if (error1) return mostrarError(error1);
        // Usar nombre en vez de error1.campoFallido ya que error1 es null en caso de haberse validado de forma exitosa
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

                    // Todos los campos válidos: mostrar alert y guardar datos
                    alert('El formulario ha sido validado correctamente');

                    const datos = {
                        nombre: valor1,
                        contraseña: valor2,
                        email: valor3,
                        fechaNacimiento: valor4
                    };

                    // Convertimos el JSON a string para poder guardarlo en localStorage
                    // En caso de ya existir una clave con el mismo nombre sustituye su valor
                    localStorage.setItem('datosFormulario', JSON.stringify(datos));
                });
            });
        });
    });
});


// Valida nombre: mínimo 3 caracteres y sin números
function validarNombre(valor, callback) {
    if (valor.length < 3) {
        return callback(null, new ValidacionError('El nombre debe tener al menos 3 caracteres', nombre));
    }
    if (contieneNumeros(valor)) {
        return callback(null, new ValidacionError('El nombre no debe tener numeros', nombre));
    }
    callback(valor, null);
}

// Valida contraseña: longitud mínima, al menos 1 mayúscula, minúscula y número
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

// Valida estructura del email sin usar expresiones regulares
function validarEmail(valor, callback) {
    const partesArroba = valor.split('@');
    if (partesArroba.length !== 2) {
        return callback(null, new ValidacionError('El email debe contener una única @', email));
    }

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

// Valida que la edad esté entre 18 y 24 años
function validarFechaNacimiento(valor, callback) {
    if (!valor) {
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

// Comprueba si un string contiene números
function contieneNumeros(valor) {
    for (let caracter of valor) {
        if (!isNaN(caracter)) {
            return true;
        }
    }
    return false;
}

// Muestra error por alert y marca el campo
function mostrarError(error) {
    alert(error.message);
    error.campoFallido.classList.add('error');
}
