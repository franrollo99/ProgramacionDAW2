import datos from './datos.js';

let alumnos = [...datos];

const app = document.getElementById('app');
const form = document.getElementById('form');

const filtro = document.getElementById('filtrarPorCiclo');
const tablas = document.getElementById('listadoYFormulario');
const agregar = document.getElementById('agregar');
const eliminar = document.getElementById('eliminar');

const listaAlumnos = document.getElementById('alumnos');
const listaAlumnosSeleccionados = document.getElementById('alumnosSeleccionados');

const mensajeJSON = document.getElementById('mensajeJSON');



let idAlumnoSeleccionado;
let alumnosSeleccionados = [];

window.addEventListener('load', () => {

    actualizarListado();

    // Evento de filtrado
    filtro.addEventListener('change', () => {
        actualizarListado();
    });

    // Evento de seleccion de alumno
    tablas.addEventListener('click', (e) => {
        if (e.target.dataset.action !== 'subir' && e.target.dataset.action !== 'bajar') {
            const alumnoSeleccionado = e.target.closest('.filaAlumno');

            const filasAlumnos = document.querySelectorAll('.filaAlumno');

            if (alumnoSeleccionado) {
                for (let fila of filasAlumnos) {
                    if (fila.classList.contains('seleccionado') && fila !== alumnoSeleccionado) {
                        fila.classList.remove('seleccionado');
                    }
                }

                alumnoSeleccionado.classList.toggle('seleccionado');
                // Cojo el id para trabajar con él y lo parseo a entero ya que al coger un elemento del html se coge 
                // como string y puede dar problemas si luego se usa para compararse con un entero
                idAlumnoSeleccionado = parseInt(alumnoSeleccionado.dataset.id);

                if (!alumnoSeleccionado.classList.contains('seleccionado')) {
                    idAlumnoSeleccionado = null;
                }
            }
        }
    });

    // Evento de agregar alumno seleccionado al formulario
    agregar.addEventListener('click', () => {
        if (idAlumnoSeleccionado) {
            const alumnoSeleccionado = alumnos.filter(alumno => alumno.alumnoId === idAlumnoSeleccionado);
            alumnos = alumnos.filter(alumno => alumno.alumnoId !== idAlumnoSeleccionado);

            if(alumnoSeleccionado[0]){
                alumnosSeleccionados.push(alumnoSeleccionado[0]);
                
                actualizarListadoSeleccionados(alumnosSeleccionados);
                actualizarListado()
            }
        }
    });

    // Evento de eliminar alumno seleccionado al formulario
    eliminar.addEventListener('click', () => {
        if (idAlumnoSeleccionado) {
            const alumnoSeleccionado = alumnosSeleccionados.filter(alumno => alumno.alumnoId === idAlumnoSeleccionado);
            alumnosSeleccionados = alumnosSeleccionados.filter(alumno => alumno.alumnoId !== idAlumnoSeleccionado);

            if(alumnoSeleccionado[0]){
                alumnos.push(alumnoSeleccionado[0]);

                actualizarListadoSeleccionados(alumnosSeleccionados);
                actualizarListado()
            }
        }
    });

    // Evento para subir y bajar los alumnos del formulario
    listaAlumnosSeleccionados.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'subir') {
            const alumnoSeleccionado = parseInt(e.target.closest('.filaAlumno').dataset.id);
            let i;

            for (let indice in alumnosSeleccionados) {
                if (alumnosSeleccionados[indice].alumnoId === alumnoSeleccionado) {
                    // CUIDADO indice ES UN STRING Y HAY QUE PARSEARLO A ENTERO
                    i = parseInt(indice);
                }
            }

            if (i > 0) {
                let temp = alumnosSeleccionados[i];
                alumnosSeleccionados[i] = alumnosSeleccionados[i - 1];
                alumnosSeleccionados[i - 1] = temp;

                actualizarListadoSeleccionados(alumnosSeleccionados);
            }

        }

        if (e.target.dataset.action === 'bajar') {
            const alumnoSeleccionado = parseInt(e.target.closest('.filaAlumno').dataset.id);
            let i;

            for (let indice in alumnosSeleccionados) {
                if (alumnosSeleccionados[indice].alumnoId === alumnoSeleccionado) {
                    i = parseInt(indice);
                }
            }

            if (i < alumnosSeleccionados.length - 1) {
                let temp = alumnosSeleccionados[i];
                alumnosSeleccionados[i] = alumnosSeleccionados[i + 1];
                alumnosSeleccionados[i + 1] = temp;

                actualizarListadoSeleccionados(alumnosSeleccionados);
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const alumnosJSON = {
            alumnoId: [],
            nombre: [],
            ciclo: [],
            orden: []
        };

        for(let indice in alumnosSeleccionados){
            alumnosJSON.alumnoId.push(alumnosSeleccionados[indice].alumnoId);
            alumnosJSON.nombre.push(alumnosSeleccionados[indice].nombre);
            alumnosJSON.ciclo.push(alumnosSeleccionados[indice].ciclo);
            alumnosJSON.orden.push(parseInt(indice) + 1);
        }

        mensajeJSON.innerHTML = JSON.stringify(alumnosJSON);
    });

});

function actualizarListado() {
    const ciclo = filtro.value;
    let resultado = '';
    let alumnosFiltrados = [...alumnos];

    if (ciclo !== 'todos') {
        alumnosFiltrados = alumnos.filter(alumno => alumno.ciclo.toLowerCase() === ciclo)
    }

    for (let alumno of alumnosFiltrados) {
        resultado += `
            <div class="filaAlumno" data-id="${alumno.alumnoId}">
                <div>${alumno.nombre}</div>
                <div>${alumno.ciclo}</div>
            </div>
        `;
    }

    idAlumnoSeleccionado = null;
    listaAlumnos.innerHTML = resultado;
}

function actualizarListadoSeleccionados() {
    let resultado = '';
    for (let alumno of alumnosSeleccionados) {
        resultado += `
            <div class="filaAlumno" data-id="${alumno.alumnoId}">
                <div>${alumno.nombre}</div>
                <div>${alumno.ciclo}</div>
                <div>
                    <button class="boton" data-action="subir">+</button>
                    <button class="boton" data-action="bajar">-</button>
                </div>
            </div>
        `;
    }

    listaAlumnosSeleccionados.innerHTML = resultado;
}



// function filtrarAlumnos() {
//     const ciclo = filtro.value;

//     if (ciclo === 'todos') {
//         return alumnos;
//     }

//     return alumnos.filter(alumno => alumno.ciclo.toLowerCase() === ciclo);
// }

// function listarAlumnos(alumnos) {
//     let resultado = '';

//     for (let alumno of alumnos) {
//         resultado += `
//             <div class="filaAlumno" data-id="${alumno.alumnoId}">
//                 <div>${alumno.nombre}</div>
//                 <div>${alumno.ciclo}</div>
//             </div>
//         `;
//     }

//     listaAlumnos.innerHTML = resultado;
//     idAlumnoSeleccionado = null;
// }