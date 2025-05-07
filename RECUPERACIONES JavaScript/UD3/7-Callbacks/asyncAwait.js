import ValidacionError from "./ValidacionError.js";

const formulario = document.getElementById('formulario');

const nombre = document.getElementById('nombre');
const contraseña = document.getElementById('contraseña');
const email = document.getElementById('email');
const fechaNacimiento = document.getElementById('fechaNacimiento');

// Si existen datos en localStorage, precargamos los campos del formulario con esos datos
window.addEventListener('load', () => {
    const datos = JSON.parse(localStorage.getItem('datosFormulario'));

    if (datos) {
        nombre.value = datos.nombre;
        contraseña.value = datos.contraseña;
        email.value = datos.email;
        fechaNacimiento.value = datos.fechaNacimiento;
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarFormulario();
});

async function validarFormulario() {
    try {
        const valor1 = await validarNombre(nombre.value);
        nombre.classList.remove('error');

        try {
            const valor2 = await validarContraseña(contraseña.value);
            contraseña.classList.remove('error');

            try {
                const valor3 = await validarEmail(email.value);
                email.classList.remove('error');

                try {
                    const valor4 = await validarFechaNacimiento(fechaNacimiento.value);
                    fechaNacimiento.classList.remove('error');

                    alert('El formulario ha sido validado correctamente');

                    const datos = {
                        nombre: valor1,
                        contraseña: valor2,
                        email: valor3,
                        fechaNacimiento: valor4
                    };

                    localStorage.setItem('datosFormulario', JSON.stringify(datos));

                } catch (error4) {
                    mostrarError(error4);
                }
            } catch (error3) {
                mostrarError(error3);
            }

        } catch (error2) {
            mostrarError(error2);
        }

    } catch (error1) {
        mostrarError(error1);
    }
}


// Valida nombre: mínimo 3 caracteres y sin números
function validarNombre(valor) {
    return new Promise((resuelve, rechaza) => {

        if (valor.length < 3) {
            return rechaza(ValidacionError('El nombre debe tener al menos 3 caracteres', nombre));
        }
        if (contieneNumeros(valor)) {
            return rechaza(new ValidacionError('El nombre no debe tener numeros', nombre));
        }

        resuelve(valor);
    });
}

// Valida contraseña: longitud mínima, al menos 1 mayúscula, minúscula y número
function validarContraseña(valor) {
    return new Promise((resuelve, rechaza) => {

        let tieneMayuscula = false;
        let tieneMinuscula = false;
        let tieneNumero = false;

        for (let caracter of valor) {
            if (!isNaN(caracter)) tieneNumero = true;
            else if (caracter === caracter.toUpperCase()) tieneMayuscula = true;
            else if (caracter === caracter.toLowerCase()) tieneMinuscula = true;
        }

        if (valor.length < 8) {
            return rechaza(new ValidacionError('La contraseña debe tener al menos 8 caracteres', contraseña));
        }
        if (!tieneMayuscula || !tieneMinuscula || !tieneNumero) {
            return rechaza(new ValidacionError('La contraseña debe incluir al menos una letra mayúscula, una minúscula y un número', contraseña));
        }

        resuelve(valor);
    });
}

// Valida estructura del email sin usar expresiones regulares
function validarEmail(valor) {
    return new Promise((resuelve, rechaza) => {

        const partesArroba = valor.split('@');
        if (partesArroba.length !== 2) {
            return rechaza(new ValidacionError('El email debe contener una única @', email));
        }

        const [parteAntes, parteDespues] = partesArroba;

        if (parteAntes.length === 0 || parteDespues.length === 0) {
            return rechaza(new ValidacionError('Debe haber texto antes y después de la @', email));
        }

        const partesPunto = parteDespues.split('.');
        if (partesPunto.length !== 2) {
            return rechaza(new ValidacionError('El email debe contener un único punto después de la @', email));
        }

        const [dominio, extension] = partesPunto;

        if (dominio.length === 0 || extension.length < 2 || extension.length > 3) {
            return rechaza(new ValidacionError('El email debe tener dominio y terminar en un punto seguido de 2 o 3 letras', email));
        }

        for (let c of extension) {
            if (!isNaN(c)) {
                return rechaza(new ValidacionError('La extensión del email no debe tener números', email));
            }
        }

        resuelve(valor);
    });
}

// Valida que la edad esté entre 18 y 24 años
function validarFechaNacimiento(valor) {
    return new Promise((resuelve, rechaza) => {

        if (!valor) {
            return rechaza(new ValidacionError('Introduce una fecha', fechaNacimiento));
        }

        const fechaActual = new Date();
        const fechaNacimientoFormateada = new Date(valor);
        const edad = (fechaActual - fechaNacimientoFormateada) / 1000 / 60 / 60 / 24 / 365;

        if (edad < 18 || edad > 24) {
            return rechaza(new ValidacionError('Debes tener entre 18 y 24 años', fechaNacimiento));
        }

        resuelve(valor);
    });
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
