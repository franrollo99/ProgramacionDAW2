import alumnos from './datos.js';


let alumnosfiltrados;
const contenedor = document.querySelector('.listaAlumnos');


function filtroAlumnos(cicloSeleccionado){
    let resultado = alumnos.filter(alumno => alumno.ciclo.toLowerCase() == cicloSeleccionado.toLowerCase());
    return resultado;
}

function HTMLListaAlumnos(alumnosFiltrados){
    contenedor.innerHTML='';
    contenedor.innerHTML += alumnosFiltrados.map(alumno=>`
            <div><p>${alumno.nombre}</p></div>
            <div><p>${alumno.ciclo}</p></div>
        `).join('');
}



document.getElementById('ciclos').addEventListener('change', function(){
    const cicloSeleccionado =  document.getElementById('ciclos').value;
    

    switch(cicloSeleccionado){
        case 'todos':

            break;
        case 'asir':
            alumnosfiltrados=filtroAlumnos(cicloSeleccionado);
            HTMLListaAlumnos(alumnosfiltrados);
            break;
        case 'dam':
            alumnosfiltrados=filtroAlumnos(cicloSeleccionado);
            HTMLListaAlumnos(alumnosfiltrados);
            break;
        case 'daw':
            alumnosfiltrados=filtroAlumnos(cicloSeleccionado);
            HTMLListaAlumnos(alumnosfiltrados);
            break;
    }

    


    // console.log(filtroAlumnos(cicloSeleccionado));
});