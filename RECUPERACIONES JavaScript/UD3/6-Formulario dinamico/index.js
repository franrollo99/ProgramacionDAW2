const datos = [
    { alumnoId: 1, nombre: "Ana López", ciclo: "DAW" },
    { alumnoId: 2, nombre: "Laura Sánchez", ciclo: "ASIR" },
    { alumnoId: 3, nombre: "Carlos Martínez", ciclo: "DAM" },
    { alumnoId: 4, nombre: "Juan Pérez", ciclo: "ASIR" },
    { alumnoId: 5, nombre: "Mario Gómez", ciclo: "DAW" },
    { alumnoId: 6, nombre: "Lucía Torres", ciclo: "DAM" },
    { alumnoId: 7, nombre: "Sofía Núñez", ciclo: "ASIR" },
    { alumnoId: 8, nombre: "Clara Sánchez", ciclo: "DAW" },
    { alumnoId: 9, nombre: "Manuel Díaz", ciclo: "DAM" },
    { alumnoId: 10, nombre: "Pedro Torres", ciclo: "DAW" },
    { alumnoId: 11, nombre: "Elena Ruiz", ciclo: "DAM" },
    { alumnoId: 12, nombre: "Álvaro Morales", ciclo: "ASIR" }
]

const app = document.getElementById('app');

const filtro = document.getElementById('filtrarPorCiclo');
const listaAlumnos = document.getElementById('alumnos');
const listaAlumnosSeleccionados = document.getElementById('alumnosSeleccionados');

window.addEventListener('load', () => {

    listaAlumnos.innerHTML = listarAlumnos(datos);

    filtro.addEventListener('change', () => {
        const ciclo = filtro.value;

        const alumnos = filtrarAlumnos(ciclo);

        listaAlumnos.innerHTML = listarAlumnos(alumnos);
    });


});

function filtrarAlumnos(filtro) {
    if (filtro === 'todos') {
        return datos;
    }
    return datos.filter(alumno => alumno.ciclo.toLowerCase() === filtro);
}

function listarAlumnos(alumnos) {
    let resultado = '';

    for(let alumno of alumnos){
        resultado += `
            <div class="filaAlumno">
                <div>${alumno.nombre}</div>
                <div>${alumno.ciclo}</div>
            </div>
        `;
    }
    
    return resultado;
}