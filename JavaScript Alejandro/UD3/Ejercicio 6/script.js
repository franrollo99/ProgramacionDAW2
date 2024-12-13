import alumnos from './datos.js';

const contenedor1 = document.querySelector('.listaAlumnos');
const contenedor2 = document.querySelector('.alumnosSeleccionados');
const ciclos = document.getElementById('ciclos');


// Filtro por ciclo, en caso de ser todos devuelve todos los alumnos, sino devuelve los alumnos del ciclo seleccionado
function filtrarAlumnosPorCiclo(filtro) {
    if (filtro === 'todos') {
        return alumnos;
    }
    return alumnos.filter(alumno => alumno.ciclo.toLowerCase() === filtro.toLowerCase());
}

// HTML para mostrar los alumnos en funcion del filtro
function HTMLListarAlumnos(alumnosFiltrados) {
    contenedor1.innerHTML = alumnosFiltrados.map(alumno => `
        <div class="fila" data-id="${alumno.alumnoId}">
            <div><p>${alumno.nombre}</p></div>
            <div><p>${alumno.ciclo}</p></div>
        </div>
    `).join('');
}

// HTML para mostrar los alumnos seleccionados
// REVISAR
function HTMLAlumnosSeleccionados(alumnosSeleccionados) {
    contenedor2.innerHTML = alumnosSeleccionados.map(alumno => `
        <div class="fila" data-id="${alumno.alumnoId}">
            <div><p>${alumno.nombre}</p></div>
            <div><p>${alumno.ciclo}</p></div>
            <div><button data-action="subir">+</button><button data-action="bajar">-</button></div>
        </div>
    `).join('');
}

// HTML para mostrar un JSON con los datos de los alumnos seleccionados al pulsar enviar
function HTMLAlumnosEnviar(alumnosSeleccionados) {

}

window.addEventListener('load', function(){

    // Mostrar todos los alumnos al cargar la página
    const alumnosIniciales = filtrarAlumnosPorCiclo('todos');
    HTMLListarAlumnos(alumnosIniciales);

    ciclos.addEventListener('change', function(){
        const cicloSeleccionado = ciclos.value;
        const alumnosFiltrados = filtrarAlumnosPorCiclo(cicloSeleccionado);
        HTMLListarAlumnos(alumnosFiltrados);
    });

    // Evento para seleccionar un alumno
    let filaSeleccionada=null;
    // let alumnosSeleccionados = [];
    let id;


    // Delego el evento de seleccionar una fila al contenedor en lugar de al div donde se muestran
    // alumnos en funcion del filtro porque estoy trabajando con elementos generados dinamicamente
    document.querySelector('form').addEventListener('click', function(event) {

        // Verificamos si el click fue sobre una fila
        if (event.target.closest('.fila')) {
            const fila = event.target.closest('.fila');
            id = fila.dataset.id;

            // Cambiar la selección de fila
            if(filaSeleccionada === fila){
                fila.classList.toggle('filaSeleccionada');
                filaSeleccionada = null;
            }else if (filaSeleccionada) {
                fila.classList.toggle('filaSeleccionada');
                filaSeleccionada.classList.toggle('filaSeleccionada');
                filaSeleccionada = fila;
            } else {
                fila.classList.toggle('filaSeleccionada');
                filaSeleccionada = fila;
            }

            
        }

        // Evento para agregar un alumno seleccionado a la otra tabla
        if (event.target.closest('#btnAgregar') && filaSeleccionada){
            event.preventDefault();
            console.log(id)
            // let alumno1 = alumnos.find(alumno => alumno.alumnoId === id);
            // console.log(alumno1.nombre);
            // alumnosSeleccionados.push(alumnos.find(alumno => alumno.alumnoId === id));
            // console.log(alumnosSeleccionados);

        }
            
            
    });

});







            
