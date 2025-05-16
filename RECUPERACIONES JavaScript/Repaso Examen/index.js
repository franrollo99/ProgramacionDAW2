const App = (function () {
    // Metodo para obtener los datos de la api
    async function obtenerDatos(endpoint) {
        const peticion = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);

        return peticion.json();
    }

    async function insertarDatos(endpoint, datos) {
        const peticion = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),

        });

        return await peticion.json();
    }

    async function actualizarDatos(endpoint, datos) {
        const peticion = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });

        return await peticion.json();
    }

    // Metodo para renderizar el listado
    function renderizarListado(usuarios) {
        // Primero vacio el listado, porque sino no va a parar de añadir usuarios
        listado.innerHTML = '';

        for (let usuario of usuarios) {
            const fila = document.createElement('div');
            fila.classList.add('fila');
            fila.setAttribute('data-id', usuario.id);

            fila.innerHTML = `
                <div>${usuario.username}</div>
                <div>${usuario.email}</div>
                <div>${usuario.phone}</div>
            `;

            listado.appendChild(fila);
        }
    }

    ///////////////// IMPORTANTE
    // En funciones de validacion solo valido el campo o el valor y devuelvo el error, ir a eventos de nombre

    // Valido el nombre
    function validarNombre(campo) {
        const nombre = campo.value;

        if (!campo.checkValidity()) {
            return campo.validationMessage;
        }

        if (nombre.length < 3) {
            return 'El nombre debe tener al menos 3 letras';
        }

        if (contieneNumeros(nombre)) {
            return 'El nombre no debe contener números';
        }

        return ''; // Todo bien
    }


    // Valido el email
    function validarEmail(campo, campoError) {
        const email = campo.value;
        campo.classList.remove('valid');
        campo.classList.remove('invalid');

        let formatoValido = false;
        let numArrobas = 0;

        // Primero valido que tenga solo una @, y luego que tenga texto a ambas partes
        for (let caracter of email) {
            if (caracter === '@') numArrobas++;
        }

        if (numArrobas === 1) {
            const [parte1, parte2] = email.split('@');

            if (parte2) {
                const [parte3, parte4] = parte2.split('.');
                if (parte4) {
                    if (parte4.length > 1 && parte4.length < 4) {
                        formatoValido = true;
                    }
                }
            }
        }

        if (!campo.checkValidity()) {
            campoError.innerHTML = campo.validationMessage;
            campo.classList.add('invalid');
            return false;
        }

        if (!formatoValido) {
            campoError.innerHTML = 'Debe contener una @, texto antes y despues, y acabar con un punto y 2 o 3 letras';
            campo.classList.add('invalid');
            return false;
        }

        campoError.innerHTML = '';
        campo.classList.add('valid');
        return true;
    }

    // Valido la contraseña, 8 caracteres, mayuscula, minuscula, numero, y caracter especial
    function validarContraseña(campo, campoError) {
        const contraseña = campo.value;
        const caracteresEspeciales = ['@', '$'];
        campo.classList.remove('invalid');
        campo.classList.remove('valid');

        let mayuscula = false;
        let minuscula = false;
        let numero = false;
        let caracterEspecial = false;

        for (let caracter of contraseña) {
            if (caracter === caracter.toUpperCase()) mayuscula = true;
            if (caracter === caracter.toLowerCase()) minuscula = true;
            if (!isNaN(caracter)) numero = true;

            for (let especial of caracteresEspeciales) {
                if (caracter === especial) caracterEspecial = true;
            }
        }

        if (!campo.checkValidity()) {
            campoError.innerHTML = campo.validationMessage;
            campo.classList.add('invalid');
            return false;
        }

        if (contraseña.length < 8) {
            campoError.innerHTML = 'Debe tener al menos 8 caracteres';
            campo.classList.add('invalid');
            return false;
        }

        if (!mayuscula || !minuscula || !numero || !caracterEspecial) {
            campoError.innerHTML = 'Debe tener al menos una mayuscula, una minuscula, un numero y un caracter especial';
            campo.classList.add('invalid');
            return false;
        }

        campoError.innerHTML = '';
        campo.classList.add('valid');
        return true;

    }

    // Valido confirmar contraseña, deberia ser igual que contraseña en cuanto a validacion pero sin poner los errores de contraseña
    function validarConfirmarContraseña(campo, campoError) {
        const confirmarContraseña = campo.value;
        campo.classList.remove('valid');
        campo.classList.remove('invalid');

        if (!campo.checkValidity()) {
            campoError.innerHTML = campo.validationMessage;
            campo.classList.add('invalid');
            return false;
        }

        if (confirmarContraseña !== contraseña.value) {
            campoError.innerHTML = 'No coincide con la contraseña';
            campo.classList.add('invalid');
            return false;
        }

        campoError.innerHTML = '';
        campo.classList.add('valid');
        return true;
    }

    // Validar telefono, opcional y 8 digitos exactos
    function validarTelefono(campo, campoError) {
        const telefono = campo.value;

        if (telefono) {
            let soloNumeros = true;

            campo.classList.remove('valid');
            campo.classList.remove('invalid');

            for (let caracter of telefono) {
                if (isNaN(caracter)) soloNumeros = false;
            }

            if (!soloNumeros) {
                campoError.innerHTML = 'Solo debe contener numeros';
                campo.classList.add('invalid');
                return false;
            }

            if (telefono.length !== 8) {
                campoError.innerHTML = 'Debe tener 8 digitos exactamente';
                campo.classList.add('invalid');
                return false;
            }
        }

        campoError.innerHTML = '';
        campo.classList.add('valid');
        return true;
    }

    // Validar genero, seleccionar uno de los disponibles
    function validarGenero(campo, campoError) {
        const genero = campo.value;

        campo.classList.remove('valid');
        campo.classList.remove('invalid');

        if (genero === 'seleccioneGenero') {
            campoError.innerHTML = 'Seleccione uno de los generos disponibles';
            campo.classList.add('invalid');
            return false;
        }

        campoError.innerHTML = '';
        campo.classList.add('valid');
        return true;
    }

    // Validar terminos, poner check en el campo
    function validarTerminos(campo, campoError) {
        campo.classList.remove('valid');
        campo.classList.remove('invalid');

        if (!campo.checkValidity()) {
            campoError.innerHTML = campo.validationMessage;
            return false;
        }

        campoError.innerHTML = '';
        return true;
    }


    function contieneNumeros(valor) {
        for (let caracter of valor) {
            if (!isNaN(caracter)) return true;
        }

        return false;
    }

    return {
        obtenerDatos,
        insertarDatos,
        actualizarDatos,
        renderizarListado,
        validarNombre,
        validarEmail,
        validarContraseña,
        validarConfirmarContraseña,
        validarTelefono,
        validarGenero,
        validarTerminos,
    }
})();

// Filtrado y listado
const filtro = document.getElementById('filtro');
let listado = document.getElementById('listarUsuarios');
let usuariosFiltrados;

// Formulario
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const nombreError = document.getElementById('nombreError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const contraseña = document.getElementById('contraseña');
const contraseñaError = document.getElementById('contraseñaError');
const confirmarContraseña = document.getElementById('confirmarContraseña');
const confirmarContraseñaError = document.getElementById('confirmarContraseñaError');
const telefono = document.getElementById('telefono');
const telefonoError = document.getElementById('telefonoError');
const genero = document.getElementById('genero');
const generoError = document.getElementById('generoError');
const terminos = document.getElementById('terminos');
const terminosError = document.getElementById('terminosError');

// Otros
const limpiarFormulario = document.getElementById('limpiar');
const eliminarFila = document.getElementById('eliminarFila');
const guardarSesion = document.getElementById('guardarSesion');
const cargarSesion = document.getElementById('cargarSesion');

window.addEventListener('load', () => {
    // Obtengo todos los usuarios
    App.obtenerDatos('/users').then((usuarios) => {
        App.renderizarListado(usuarios);

        filtro.addEventListener('input', () => {
            if (filtro) {
                // .trim() para quitar espacios en blanco al principio y al final
                usuariosFiltrados = usuarios.filter(usuario => usuario.username.toLowerCase().startsWith(filtro.value.trim().toLowerCase()));
                App.renderizarListado(usuariosFiltrados);
            }
        });

        let filaSeleccionada;

        listado.addEventListener('click', (e) => {
            // Capturo el evento cuando el click sea en el elemento contenedor con clase fila
            if (e.target.closest('.fila')) {
                filaSeleccionada = e.target.closest('.fila');
                const filas = document.querySelectorAll('.fila');

                for (let fila of filas) {
                    if (fila.classList.contains('seleccionada') && fila !== filaSeleccionada)
                        fila.classList.remove('seleccionada');
                }

                filaSeleccionada.classList.toggle('seleccionada');

                if (!filaSeleccionada.classList.contains('seleccionada')) filaSeleccionada = null;
            }
        });

        ///////////////// IMPORTANTE
        // Si hay error entonces pongo la clase invalido y quito valido, y pongo en el span el error

        nombre.addEventListener('blur', () => {
            const error = App.validarNombre(nombre);
            if (error) {
                nombre.classList.add('invalid');
                nombre.classList.remove('valid');
                nombreError.innerHTML = error;
            }
        });

        ///////////////// IMPORTANTE
        // Si no hay error quito la clase invalido, pongo valido y quito el mensaje del span
        nombre.addEventListener('input', () => {
            const error = App.validarNombre(nombre);
            if (!error) {
                nombre.classList.remove('invalid');
                nombre.classList.add('valid');
                nombreError.innerHTML = '';
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (App.validarNombre(nombre, nombreError) && App.validarEmail(email, emailError) && App.validarContraseña(contraseña, contraseñaError) && App.validarConfirmarContraseña(confirmarContraseña, confirmarContraseñaError) && App.validarTelefono(telefono, telefonoError) && App.validarGenero(genero, generoError) && App.validarTerminos(terminos, terminosError)) {
                const datos = {
                    nombre: nombre.value,
                    email: email.value,
                    contraseña: contraseña.value,
                    telefono: telefono.value,
                    genero: genero.value
                };

                if (filaSeleccionada) {
                    for (let usuario of usuarios) {
                        console.log(usuario);
                        if (usuario.id == filaSeleccionada.dataset.id) {
                            usuario.username = nombre.value;
                            const promesa = App.actualizarDatos(`/users/${usuario.id}`, datos);

                            promesa.then((response) => {
                                console.log(response);
                            });

                            App.renderizarListado(usuarios);
                        }
                    }
                } else {
                    const promesa = App.insertarDatos('/users', datos);

                    promesa.then((response) => {
                        console.log(response);
                    });
                }

                alert(JSON.stringify(datos));

            }
        });

        // Limpiamos el formulario, tanto sus campos como sus estilos de valido o invalido y sus mensajes de error, 
        // además quitamos el estilo a la fila seleccionada en caso de que haya una y filaseleccionada lo ponemos a null
        limpiarFormulario.addEventListener('click', (e) => {
            e.preventDefault();
            form.reset();
            document.querySelectorAll('.error').forEach(error => error.innerHTML = '');
            if (filaSeleccionada) filaSeleccionada.classList.remove('seleccionada');
            filaSeleccionada = null;
        });

        eliminarFila.addEventListener('click', () => {
            if (filaSeleccionada) {
                usuarios = usuarios.filter(usuario => usuario.id !== parseInt(filaSeleccionada.dataset.id));
                App.renderizarListado(usuarios);

            }
        });

        guardarSesion.addEventListener('click', () => {
            sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
        });

        cargarSesion.addEventListener('click', () => {
            datosGuardados = sessionStorage.getItem('usuarios');
            if(datosGuardados){
                usuarios = JSON.parse(datosGuardados);
                App.renderizarListado(usuarios);
            }
        });
    });
});