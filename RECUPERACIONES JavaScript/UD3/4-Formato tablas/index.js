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



window.addEventListener('load', () => {

    // divDetalles.setAttribute('class', 'oculto');
    // divFicha.setAttribute('class', 'oculto');

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

    // Eventos para tabla de detalles
    divDetalles.addEventListener('mouseenter', (e)=>{
        if (e.target.classList.contains('casillaAlumno')) {
            // console.log('a');        REVISAR
            e.target.classList.add('selecionado');
        }
    });

    divDetalles.addEventListener('click', (e) => {
        if (e.target.classList.contains('casillaAlumno')) {
            let alumnoSeleccionado = e.target;
            let seleccionado = alumnoSeleccionado.parentNode; // Selecciono el nodo padre (fila) de la casilla que he seleccionado

            const filas = document.querySelectorAll('.filaAlumno');

            for (let fila of filas) {
                // Compruebo si cada fila contiene la clase seleccionado
                if (fila.classList.contains('seleccionado') && fila !== seleccionado) {
                    fila.classList.remove('seleccionado');
                    break;
                }
            }

            seleccionado.classList.toggle('seleccionado');
        }
    });
});