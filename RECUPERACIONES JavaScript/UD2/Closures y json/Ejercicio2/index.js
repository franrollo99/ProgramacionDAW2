const alumnos = [
    {
        nombre: 'Fran',
        nota: 6,
        modulo: 'DWEC',
        convocatoria: 2
    },
    {
        nombre: 'Fran',
        nota: 4,
        modulo: 'DWES',
        convocatoria: 1
    },
    {
        nombre: 'Iker',
        nota: 3,
        modulo: 'DWEC',
        convocatoria: 2
    },
    {
        nombre: 'Iker',
        nota: 6,
        modulo: 'DWES',
        convocatoria: 2
    },
    {
        nombre: 'Aymane',
        nota: 3,
        modulo: 'DWEC',
        convocatoria: 3
    },
    {
        nombre: 'Aymane',
        nota: 6,
        modulo: 'DWEC',
        convocatoria: 2
    },
];

function alumnosSuspensos(){
    let alumnosSuspensos = [];

    for(let alumno of alumnos){
        if(alumno.nota < 5){
            alumnosSuspensos.push({
                nombre: alumno.nombre,
                nota: alumno.nota,
                modulo: alumno.modulo
            });
        }
    }

    // alumnosSuspensos.sort((a, b) => (a.nombre + b.nombre));

    return alumnosSuspensos;
}

function estadisticasPorModulo(){
    
}

console.log(alumnosSuspensos());