const formulario = document.forms['formulario'];
const errores = [];
let mensajeError;

// Validacion nombre
const campoNombre = formulario.elements['nombre'];
const errorNombre = document.getElementById('errorNombre');

campoNombre.addEventListener('blur', () => {
    let tieneNumeros = false;

    for(let caracter of campoNombre.value){
        if(!isNaN(caracter)){
            tieneNumeros = true;
        }
    }

    if (!campoNombre.checkValidity()) {
        mensajeError = campoNombre.validationMessage;
        errorNombre.innerHTML = mensajeError;
        campoNombre.setAttribute('class', 'invalid');
    }else if(tieneNumeros){
        mensajeError = 'No debe contener numeros';
        errorNombre.innerHTML = mensajeError;
        campoNombre.setAttribute('class', 'invalid');
    } else{
        errorNombre.innerHTML = '';
        campoNombre.setAttribute('class', 'valid');
    }
});

// Validacion correo
const campoCorreo = formulario.elements['correo'];
const errorCorreo = document.getElementById('errorCorreo');

campoCorreo.addEventListener('blur', () => {
    if (!campoCorreo.checkValidity()) {
        mensajeError = campoCorreo.validationMessage;
        errorCorreo.innerHTML = mensajeError;
        campoCorreo.setAttribute('class', 'invalid');
    } else {
        errorCorreo.innerHTML = '';
        campoCorreo.setAttribute('class', 'valid');
    }
});

// Validacion contraseña
const campoContraseña = formulario.elements['contraseña'];
const errorContraseña = document.getElementById('errorContraseña');

campoContraseña.addEventListener('blur', () => {
    let caracteresEspeciales = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    let tieneMayuscula = false;
    let tieneNumero = false;
    let tieneCaracterEspecial = false;

    for(let caracter of campoContraseña.value){
        for(let caracterEspecial of caracteresEspeciales){
            if(caracter === caracterEspecial){
                tieneCaracterEspecial = true;
            }
        }

        if(!isNaN(caracter)){
            tieneNumero = true;
        }

        if(caracter === caracter.toUpperCase()){
            tieneMayuscula = true;
        }
    }

    if (!campoContraseña.checkValidity()) {
        mensajeError = campoContraseña.validationMessage;
        errorContraseña.innerHTML = mensajeError;+
        campoContraseña.setAttribute('class', 'invalid');
    } else if(!tieneCaracterEspecial || !tieneMayuscula || !tieneNumero){
        mensajeError =
        errorContraseña.innerHTML = 'Debe tener al menos una letra mayuscula, un numero y un caracter especial';
        campoContraseña.setAttribute('class', 'invalid');
    }else {
        errorContraseña.innerHTML = '';
        campoContraseña.setAttribute('class', 'valid');
    }
});

// Validacion confirmar contraseña
const campoConfirmarContraseña = formulario.elements['confirmarContraseña'];
const errorConfirmarContraseña = document.getElementById('errorConfirmarContraseña');

campoConfirmarContraseña.addEventListener('blur', () => {
    if (!campoConfirmarContraseña.checkValidity()) {
        mensajeError =
        errorConfirmarContraseña.innerHTML = campoConfirmarContraseña.validationMessage;
        campoConfirmarContraseña.setAttribute('class', 'invalid');
    } else if (campoConfirmarContraseña.value !== campoContraseña.value) {
        mensajeError =
        errorConfirmarContraseña.innerHTML = 'La contraseña no coincide';
        campoConfirmarContraseña.setAttribute('class', 'invalid');
    } else {
        errorConfirmarContraseña.innerHTML = '';
        campoConfirmarContraseña.setAttribute('class', 'valid');
    }
});

// Validacion fecha nacimiento
const campoFechaNacimiento = formulario.elements['fechaNacimiento'];
const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
const fechaActual = new Date();

campoFechaNacimiento.addEventListener('blur', () => {
    const fechaNacimientoFormateada = new Date(campoFechaNacimiento.value);
    const calcularEdad = (fechaActual - fechaNacimientoFormateada) / 100 / 60 / 60 / 24 / 365;

    if (!campoFechaNacimiento.checkValidity()) {
        mensajeError =
        errorFechaNacimiento.innerHTML = campoFechaNacimiento.validationMessage;
        campoFechaNacimiento.setAttribute('class', 'invalid');
    } else if (calcularEdad < 16) {
        mensajeError =
        errorFechaNacimiento.innerHTML = 'Debes tener al menos 16 años';
        campoFechaNacimiento.setAttribute('class', 'invalid');
    } else {
        errorFechaNacimiento.innerHTML = '';
        campoFechaNacimiento.setAttribute('class', 'valid');
    }
});

// Validacion telefono
const campoTelefono = formulario.elements['telefono'];
const errorTelefono = document.getElementById('errorTelefono');

campoTelefono.addEventListener('blur', () => {
    if(campoTelefono.value){
        let soloNumeros = true;

        for(let digito of campoTelefono.value){
            if(isNaN(digito)){
                soloNumeros = false;
                break;
            }
        }

        if(!soloNumeros){
            mensajeError =
            errorTelefono.innerHTML = 'Debe tener solo numeros';
            campoTelefono.setAttribute('class', 'invalid');
        } else if (campoTelefono.value.length !== 9 ) {
            mensajeError =
            errorTelefono.innerHTML = 'Debe tener exactamente 9 digitos';
            campoTelefono.setAttribute('class', 'invalid');
        } else {
            errorTelefono.innerHTML = '';
            campoTelefono.setAttribute('class', 'valid');
        }
    }else{
        errorTelefono.innerHTML = '';
        campoTelefono.classList.remove('invalid');
    }
});

// Validacion genero
const campoGenero = formulario.elements['genero'];
const errorGenero = document.getElementById('errorGenero');

campoGenero.addEventListener('blur', () => {
    const genero = campoGenero.value;
    if (genero === 'seleccione') {
        mensajeError =
        errorGenero.innerHTML = 'Debe seleccionar una de las opciones disponibles';
        campoGenero.setAttribute('class', 'invalid');
    } else {
        errorGenero.innerHTML = '';
        campoGenero.setAttribute('class', 'valid');
    }
});

// Validacion terminos y condiciones
const campoTerminosCondiciones = formulario.elements['terminosCondiciones'];
const errorTerminosCondiciones = document.getElementById('errorTerminosCondiciones');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!campoTerminosCondiciones.checkValidity()) {
        mensajeError =
        errorTerminosCondiciones.innerHTML = 'Debes marcar esta casilla';
        campoTerminosCondiciones.setAttribute('class', 'invalid');
    } else {
        errorTerminosCondiciones.innerHTML = '';
        campoTerminosCondiciones.setAttribute('class', 'valid');
    }

    const datos = {
        nombre: campoNombre.value,
        correo: campoCorreo.value,
        contraseña: campoContraseña.value,
        fechaNacimiento: campoFechaNacimiento.value,
        telefono: campoTelefono.value,
        genero: campoGenero.value
    };

    console.log(datos);

});