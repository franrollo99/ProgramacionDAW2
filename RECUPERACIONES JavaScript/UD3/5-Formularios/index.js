const formulario = document.forms['formulario'];

// Validacion nombre
const campoNombre = formulario.elements['nombre'];
const errorNombre = document.getElementById('errorNombre');

campoNombre.addEventListener('blur', () => {
    if (!campoNombre.checkValidity()) {
        errorNombre.innerHTML = campoNombre.validationMessage;
        campoNombre.setAttribute('class', 'invalid');
    } else {
        errorNombre.innerHTML = '';
        campoNombre.setAttribute('class', 'valid');
    }
});

// Validacion correo
const campoCorreo = formulario.elements['correo'];
const errorCorreo = document.getElementById('errorCorreo');

campoCorreo.addEventListener('blur', () => {
    if (!campoCorreo.checkValidity()) {
        errorCorreo.innerHTML = campoCorreo.validationMessage;
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
    if (!campoContraseña.checkValidity()) {
        errorContraseña.innerHTML = campoContraseña.validationMessage;
        campoContraseña.setAttribute('class', 'invalid');
    } else {
        errorContraseña.innerHTML = '';
        campoContraseña.setAttribute('class', 'valid');
    }
});

// Validacion confirmar contraseña
const campoConfirmarContraseña = formulario.elements['confirmarContraseña'];
const errorConfirmarContraseña = document.getElementById('errorConfirmarContraseña');

campoConfirmarContraseña.addEventListener('blur', () => {
    if (!campoConfirmarContraseña.checkValidity()) {
        errorConfirmarContraseña.innerHTML = campoConfirmarContraseña.validationMessage;
        campoConfirmarContraseña.setAttribute('class', 'invalid');
    } else if (campoConfirmarContraseña.value !== campoContraseña.value) {
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
        errorFechaNacimiento.innerHTML = campoFechaNacimiento.validationMessage;
        campoFechaNacimiento.setAttribute('class', 'invalid');
    } else if (calcularEdad < 16) {
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
    if (!campoTelefono.checkValidity()) {
        errorTelefono.innerHTML = errorTelefono.validationMessage;
        campoTelefono.setAttribute('class', 'invalid');
    } else {
        errorTelefono.innerHTML = '';
        campoTelefono.setAttribute('class', 'valid');
    }
});

// Validacion genero
const campoGenero = formulario.elements['genero'];
const errorGenero = document.getElementById('errorGenero');

campoGenero.addEventListener('blur', () => {
    const genero = campoGenero.value;
    if (genero !== 'masculino' || genero !== 'femenino' || genero !== 'otro' ) {
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
        errorTerminosCondiciones.innerHTML = 'Debes marcar esta casilla';
        campoTerminosCondiciones.setAttribute('class', 'invalid');
    } else {
        errorTerminosCondiciones.innerHTML = '';
        campoTerminosCondiciones.setAttribute('class', 'valid');
    }

});