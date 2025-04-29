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

for(let alumno of alumnos){
    divFila = document.createElement('div');
    divDetalles.appendChild(divFila);
    // detallesAlumno.innerHTML = `${alumno.nombre} ${alumno.curso} ${alumno.telefono} ${alumno.email}`;

    detallesAlumno = document.createElement('div');
    detallesAlumno.innerHTML = alumno.nombre;
    divFila.appendChild(detallesAlumno);

    detallesAlumno = document.createElement('div');
    detallesAlumno.innerHTML = alumno.curso;
    divFila.appendChild(detallesAlumno);
}

divFila.setAttribute('class', 'filaAlumno');
