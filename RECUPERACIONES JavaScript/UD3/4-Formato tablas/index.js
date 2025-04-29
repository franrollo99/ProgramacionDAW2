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

    // Creo casillas para cada propiedad
    detallesAlumno = document.createElement('div');
    detallesAlumno.setAttribute('class', 'casillaAlumno');
    detallesAlumno.innerHTML = alumno.nombre;
    divFila.appendChild(detallesAlumno);

    detallesAlumno = document.createElement('div');
    detallesAlumno.setAttribute('class', 'casillaAlumno');
    detallesAlumno.innerHTML = alumno.curso;
    divFila.appendChild(detallesAlumno);

    detallesAlumno = document.createElement('div');
    detallesAlumno.setAttribute('class', 'casillaAlumno');
    detallesAlumno.innerHTML = alumno.telefono;
    divFila.appendChild(detallesAlumno);

    detallesAlumno = document.createElement('div');
    detallesAlumno.setAttribute('class', 'casillaAlumno');
    detallesAlumno.innerHTML = alumno.email;
    divFila.appendChild(detallesAlumno);
}



window.addEventListener('load', () => {

    divApp.addEventListener('click', (e)=>{
        if(e.target.className === 'casillaAlumno'){
            let alumnoSeleccionado = e.target;
            let seleccionado = alumnoSeleccionado.parentNode; // Selecciono el nodo padre (fila) de la casilla que he seleccionado

            const filas = document.querySelectorAll('.filaAlumno');
            
            for(let fila of filas){
                // Compruebo si cada fila contiene la clase seleccionado
                if(fila.classList.contains('seleccionado')){
                    fila.classList.remove('seleccionado');
                    break;
                }
            }

            seleccionado.classList.toggle('seleccionado');

        }
    });
});