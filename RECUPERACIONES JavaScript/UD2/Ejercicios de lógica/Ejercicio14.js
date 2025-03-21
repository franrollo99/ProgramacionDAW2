function mediaNota(alumnos)
{
    let resultado = '';

    for(let clave in alumnos){
        let promociona;
        let notaMedia = 0;
        
        for(let modulo of alumnos[clave].asignaturas){
            notaMedia += modulo.nota;
        }
        notaMedia /= alumnos[clave].asignaturas.length;

        alumnos.media = notaMedia
        // resultado += 'El alumno ' + alumno[clave].nombre
    }
}

let alumnos = [
    {
        nombre: "Fran",
        asignaturas: [
            {modulo: "DWEC", nota: 7},
            {modulo: "DIW", nota: 6},
            {modulo: "DWES", nota: 5},
            {modulo: "DAW", nota: 6},
        ]
    },
    {
        nombre: "Iker",
        asignaturas: [
            {modulo: "DWEC", nota: 5},
            {modulo: "DIW", nota: 5},
            {modulo: "DWES", nota: 6},
            {modulo: "DAW", nota: 5},
        ]
    },
    {
        nombre: "Aymane",
        asignaturas: [
            {modulo: "DWEC", nota: 4},
            {modulo: "DIW", nota: 4},
            {modulo: "DWES", nota: 6},
            {modulo: "DAW", nota: 7},
        ]
    },
    {
        nombre: "Asier",
        asignaturas: [
            {modulo: "DWEC", nota: 2},
            {modulo: "DIW", nota: 4},
            {modulo: "DWES", nota: 1},
            {modulo: "DAW", nota: 6},
        ]
    }
];

mediaNota(alumnos);