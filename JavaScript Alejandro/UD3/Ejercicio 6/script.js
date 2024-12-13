import alumnos from './datos.js';

const contenedor = document.querySelector('.listaAlumnos');
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
    contenedor.innerHTML = alumnosFiltrados.map(alumno => `
        <div><p>${alumno.nombre}</p></div>
        <div><p>${alumno.ciclo}</p></div>
    `).join('');
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
});