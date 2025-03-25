let alumnos = [
    {
        nombre: 'Fran',
        asignaturas: [
            { modulo: 'DWEC', nota: 7 },
            { modulo: 'DIW', nota: 6 },
            { modulo: 'DWES', nota: 5 },
            { modulo: 'DAW', nota: 6 },
        ]
    },
    {
        nombre: 'Iker',
        asignaturas: [
            { modulo: 'DWEC', nota: 5 },
            { modulo: 'DIW', nota: 5 },
            { modulo: 'DWES', nota: 6 },
            { modulo: 'DAW', nota: 5 },
        ]
    },
    {
        nombre: 'Aymane',
        asignaturas: [
            { modulo: 'DWEC', nota: 4 },
            { modulo: 'DIW', nota: 4 },
            { modulo: 'DWES', nota: 6 },
            { modulo: 'DAW', nota: 7 },
        ]
    },
    {
        nombre: 'Asier',
        asignaturas: [
            { modulo: 'DWEC', nota: 2 },
            { modulo: 'DIW', nota: 4 },
            { modulo: 'DWES', nota: 1 },
            { modulo: 'DAW', nota: 6 },
        ]
    }
];

let alumnosModificados = notaMediaPromociona(alumnos);
console.log(alumnosPromocionan(alumnosModificados));
console.log(alumnosNoPromocionan(alumnosModificados));

function notaMediaPromociona(alumnos) {
    for (let alumno in alumnos) {
        alumnos[alumno].promociona = true;
        let notaMedia = 0;

        for (let modulo of alumnos[alumno].asignaturas) {
            notaMedia += modulo.nota;

            if (modulo.nota < 5) {
                alumnos[alumno].promociona = false;
            }
        }

        notaMedia /= alumnos[alumno].asignaturas.length;
        alumnos[alumno].media = notaMedia;
    }

    return alumnos;
}

function alumnosPromocionan(alumnosModificados) {
    let resultado = 'Alumnos que promocionan: \n';

    for (let alumno in alumnosModificados) {
        if (alumnosModificados[alumno].promociona === true) {
            resultado += `${alumno} - ${alumnosModificados[alumno].nombre} - ${alumnosModificados[alumno].media} \n`;
        }
    }

    return resultado;
}

function alumnosNoPromocionan(alumnosModificados) {
    let resultado = 'Alumnos que no promocionan: \n';

    for (let alumno in alumnosModificados) {
        let pendientes = [];

        if (alumnosModificados[alumno].promociona === false) {
            resultado += `${alumno} - ${alumnosModificados[alumno].nombre} - Pendientes: `;

            for (let modulo in alumnosModificados[alumno].asignaturas) {
                if (alumnosModificados[alumno].asignaturas[modulo].nota < 5) {
                    pendientes.push(alumnosModificados[alumno].asignaturas[modulo].modulo);
                }
            }
            resultado += pendientes + '\n';
        }
    }

    return resultado;
}