const formulario = document.forms['formulario'];
const errores = [];

// Validacion nombre
const campoNombre = formulario.elements['nombre'];
const errorNombre = document.getElementById('errorNombre');

campoNombre.addEventListener('input', () => {
    let tieneNumeros = false;

    for(let caracter of campoNombre.value){
        if(!isNaN(caracter)){
            tieneNumeros = true;
        }
    }

    if (!campoNombre.checkValidity()) {
        validarCampo(campoNombre, errorNombre, campoNombre.validationMessage);
    } else if(tieneNumeros){
        validarCampo(campoNombre, errorNombre, 'No debe contener numeros');
    } else{
        validarCampo(campoNombre, errorNombre);
    }
});

// Validacion correo
const campoCorreo = formulario.elements['correo'];
const errorCorreo = document.getElementById('errorCorreo');

campoCorreo.addEventListener('input', () => {
    if (!campoCorreo.checkValidity()) {
        validarCampo(campoCorreo, errorCorreo, campoCorreo.validationMessage);
    } else {
        validarCampo(campoCorreo, errorCorreo);
    }
});

// Validacion contraseña
const campoContraseña = formulario.elements['contraseña'];
const errorContraseña = document.getElementById('errorContraseña');

campoContraseña.addEventListener('input', () => {
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
        validarCampo(campoContraseña, errorContraseña, campoContraseña.validationMessage);
    } else if(!tieneCaracterEspecial || !tieneMayuscula || !tieneNumero){
        validarCampo(campoContraseña, errorContraseña, 'Debe tener al menos una letra mayuscula, un numero y un caracter especial');
    } else {
        validarCampo(campoContraseña, errorContraseña);
    }
});

// Validacion confirmar contraseña
const campoConfirmarContraseña = formulario.elements['confirmarContraseña'];
const errorConfirmarContraseña = document.getElementById('errorConfirmarContraseña');

campoConfirmarContraseña.addEventListener('input', () => {
    if (!campoConfirmarContraseña.checkValidity()) {
        validarCampo(campoConfirmarContraseña, errorConfirmarContraseña, campoConfirmarContraseña.validationMessage);
    } else if (campoConfirmarContraseña.value !== campoContraseña.value) {
        validarCampo(campoConfirmarContraseña, errorConfirmarContraseña, 'La contraseña no coincide');
    } else {
        validarCampo(campoConfirmarContraseña, errorConfirmarContraseña);
    }
});

// Validacion fecha nacimiento
const campoFechaNacimiento = formulario.elements['fechaNacimiento'];
const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
const fechaActual = new Date();

campoFechaNacimiento.addEventListener('input', () => {
    const fechaNacimientoFormateada = new Date(campoFechaNacimiento.value);
    const calcularEdad = (fechaActual - fechaNacimientoFormateada) / 100 / 60 / 60 / 24 / 365;

    if (!campoFechaNacimiento.checkValidity()) {
        validarCampo(campoFechaNacimiento, errorFechaNacimiento, campoFechaNacimiento.validationMessage);
    } else if (calcularEdad < 16) {
        validarCampo(campoFechaNacimiento, errorFechaNacimiento, 'Debes tener al menos 16 años');
    } else {
        validarCampo(campoFechaNacimiento, errorFechaNacimiento);
    }
});

// Validacion telefono
const campoTelefono = formulario.elements['telefono'];
const errorTelefono = document.getElementById('errorTelefono');

campoTelefono.addEventListener('input', () => {
    if(campoTelefono.value){
        let soloNumeros = true;

        for(let digito of campoTelefono.value){
            if(isNaN(digito)){
                soloNumeros = false;
                break;
            }
        }

        if(!soloNumeros){
            validarCampo(campoTelefono, errorTelefono, 'Debe tener solo numeros');
        } else if (campoTelefono.value.length !== 9 ) {
            validarCampo(campoTelefono, errorTelefono, 'Debe tener exactamente 9 digitos');
        } else {
            validarCampo(campoTelefono, errorTelefono);
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
        validarCampo(campoGenero, errorGenero, 'Debe seleccionar una de las opciones disponibles');
    } else {
        validarCampo(campoGenero, errorGenero);
    }
});

// Validacion terminos y condiciones
const campoTerminosCondiciones = formulario.elements['terminosCondiciones'];
const errorTerminosCondiciones = document.getElementById('errorTerminosCondiciones');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Deshabilito el envio del formulario

    if (!campoTerminosCondiciones.checkValidity()) {
        validarCampo(campoTerminosCondiciones, errorTerminosCondiciones, 'Debes marcar esta casilla');
    } else {
        validarCampo(campoTerminosCondiciones, errorTerminosCondiciones);

        const datos = {
            nombre: campoNombre.value,
            correo: campoCorreo.value,
            contraseña: campoContraseña.value,
            fechaNacimiento: campoFechaNacimiento.value,
            telefono: campoTelefono.value,
            genero: campoGenero.value
        };

        console.log(datos);
    }

    
});

function validarCampo(campo, campoError, mensaje = null){
    campo.classList.remove('valid', 'invalid');

    if (mensaje) {
        campoError.textContent = mensaje;
        campo.classList.add('invalid');
        errores.push(mensaje)
    } else {
        campoError.textContent = '';
        campo.classList.add('valid');
    }
}