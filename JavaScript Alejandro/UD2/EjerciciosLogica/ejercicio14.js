let alumnos=[
    {
        nombre: 'Fran',
        asignaturas: [
            {modulo: 'DWEC', nota: 5},
            {modulo: 'DIW', nota: 7},
            {modulo: 'DWES', nota: 6},
            {modulo: 'DAW', nota: 8}
        ]
    },
    {
        nombre: 'Maria',
        asignaturas: [
            {modulo: 'DWEC', nota: 3},
            {modulo: 'DIW', nota: 8},
            {modulo: 'DWES', nota: 5},
            {modulo: 'DAW', nota: 6}
        ]
    },
    {
        nombre: 'Marcelo',
        asignaturas: [
            {modulo: 'DWEC', nota: 7},
            {modulo: 'DIW', nota: 9},
            {modulo: 'DWES', nota: 6},
            {modulo: 'DAW', nota: 9}
        ]
    }
];

function promocionaAlumno(alumnos, alumnoAprobado){
    for(let alumno of alumnos){
        let totalNotas=0;
        let todasAprobadas=true;
        for(let asignatura of alumno.asignaturas){
            totalNotas+=asignatura.nota;
            
            if(asignatura.nota<5){
                todasAprobadas=false;
            }
        }

        totalNotas/=alumno.asignaturas.length;

        if(todasAprobadas===true){
            console.log(`El alumno ${alumno.nombre} ha promocionado con ${totalNotas} de media`)
        }else{
            console.log(`El alumno ${alumno.nombre} repite con ${totalNotas} de media`)
        }
        
    }
}

promocionaAlumno(alumnos);