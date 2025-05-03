import Alumno from './Alumno.js';
import datos from './datos.js';

const alumnos = datos.map(alumno => new Alumno(alumno.nombre, alumno.dni, alumno.curso, alumno.asignaturas, alumno.telefono, alumno.email));



// ESTRUCTURA PRINCIPAL
const divPrincipal = document.querySelector('.principal');

const divApp = document.createElement('div');
divApp.setAttribute('id', 'app');
divPrincipal.appendChild(divApp);

const divDetalles = document.createElement('div');
divDetalles.setAttribute('id', 'detalles');
divApp.appendChild(divDetalles);

const divFicha = document.createElement('div');
divFicha.setAttribute('id', 'ficha');
divApp.appendChild(divFicha);



// CREACION DE CABECERA DE DETALLES
let camposCabecera = ['Nombre', 'Curso', 'Telefono', 'Email'];
let divFilaCabecera;
let divCasillaCabecera;

divFilaCabecera = document.createElement('div');

camposCabecera.forEach(campo => {
    divCasillaCabecera = document.createElement('div');
    divCasillaCabecera.innerHTML = campo;
    divCasillaCabecera.setAttribute('class', 'casillaCabecera');

    divFilaCabecera.appendChild(divCasillaCabecera);
});

divDetalles.appendChild(divFilaCabecera);
divFilaCabecera.setAttribute('class', 'filaCabecera');

// CREACION DE FILAS DE DETALLES
let divFila;
let detallesAlumno;

for (let alumno of alumnos) {
    // Creo una fila por cada alumno
    divFila = document.createElement('div');
    divFila.setAttribute('class', 'filaAlumno');
    divDetalles.appendChild(divFila);

    // Creo casillas para cada propiedad aprovechando el array de la cabecera
    camposCabecera.forEach(campo => {
        detallesAlumno = document.createElement('div');
        detallesAlumno.setAttribute('class', 'casillaAlumno');
        detallesAlumno.innerHTML = alumno[campo.toLocaleLowerCase()];

        divFila.appendChild(detallesAlumno);
    });
}



// CREACION DE TARJETAS
let divTarjeta;
let listado;
let listaAtributos;
let listadoAsignaturas;
let listaAsignaturas;

for (let alumno of alumnos) {
    divTarjeta = document.createElement('div');
    divTarjeta.setAttribute('class', 'tarjeta');
    listado = document.createElement('ul');
    listado.setAttribute('class', 'listadoAtributos')
    divTarjeta.appendChild(listado);

    listaAtributos = document.createElement('li');
    listaAtributos.innerHTML = 'Nombre: ' + alumno.nombre;
    listado.appendChild(listaAtributos);

    listaAtributos = document.createElement('li');
    listaAtributos.innerHTML = 'DNI: ' + alumno.dni;
    listado.appendChild(listaAtributos);

    listaAtributos = document.createElement('li');
    listaAtributos.innerHTML = 'Asignaturas: ';
    listado.appendChild(listaAtributos);

    listadoAsignaturas = document.createElement('ul');
    listadoAsignaturas.setAttribute('class', 'listadoAsignaturas')
    listaAtributos.appendChild(listadoAsignaturas);

    alumno.asignaturas.forEach(asignatura=>{
        listaAsignaturas = document.createElement('li');
        listaAsignaturas.innerHTML = asignatura;
        listadoAsignaturas.appendChild(listaAsignaturas);
    });

    listaAtributos = document.createElement('li');
    listaAtributos.innerHTML = 'Teléfono: ' + alumno.telefono;
    listado.appendChild(listaAtributos);

    listaAtributos = document.createElement('li');
    listaAtributos.innerHTML = 'Email: ' + alumno.email;
    listado.appendChild(listaAtributos);

    divFicha.appendChild(divTarjeta);
}



// EVENTOS
window.addEventListener('load', () => {

    divDetalles.setAttribute('class', 'oculto');
    divFicha.setAttribute('class', 'oculto');

    // Evento para mostrar detalles o fichas
    document.addEventListener('click', (e) => {
        if (e.target.className === 'btn-detalles') {
            divDetalles.setAttribute('class', 'visible');
            divFicha.setAttribute('class', 'oculto');
        } else if (e.target.className === 'btn-ficha') {
            divFicha.setAttribute('class', 'visible');
            divDetalles.setAttribute('class', 'oculto');
        }
    });

    // Evento para resaltar una fila
    divDetalles.addEventListener('click', (e) => {
        const alumnoSeleccionado = e.target.closest('.filaAlumno');

        if(!alumnoSeleccionado) return;

        const filas = document.querySelectorAll('.filaAlumno');

        for (let fila of filas) {
            // Compruebo si cada fila contiene la clase seleccionado
            if (fila.classList.contains('seleccionado') && fila !== alumnoSeleccionado) {
                fila.classList.remove('seleccionado');
                break;
            }
        }

        alumnoSeleccionado.classList.toggle('seleccionado');
    });

    // Evento para resaltar una tarjeta
    divFicha.addEventListener('click', (e) => {
        const tarjetaSeleccionada = e.target.closest('.tarjeta');

        if(!tarjetaSeleccionada) return;

        const tarjetas = document.querySelectorAll('.tarjeta');

        for (let tarjeta of tarjetas) {
            // Compruebo si cada fila contiene la clase seleccionado
            if (tarjeta.classList.contains('seleccionado') && tarjeta !== tarjetaSeleccionada) {
                tarjeta.classList.remove('seleccionado');
                break;
            }
        }

        tarjetaSeleccionada.classList.toggle('seleccionado');
    });
});