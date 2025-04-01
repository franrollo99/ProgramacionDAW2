const $yedra = (function () {

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
            modulo: 'DWES',
            convocatoria: 5
        },
    ];

    function alumnosSuspensos() {
        let alumnosSuspensos = [];

        for (let alumno of alumnos) {
            if (alumno.nota < 5) {
                alumnosSuspensos.push({
                    nombre: alumno.nombre,
                    nota: alumno.nota,
                    modulo: alumno.modulo
                });
            }
        }

        // .localeCompare() compara dos cadenas
        alumnosSuspensos.sort((a, b) => a.nombre.localeCompare(b.nombre));

        return alumnosSuspensos;
    }

    function estadisticasPorModulo(m) {
        let estadisticasModulos = [];
        let modulos = {};

        // Creo el objeto modulos con todos datos
        for (let alumno of alumnos) {
            if (!modulos[alumno.modulo]) {
                modulos[alumno.modulo] = {
                    notas: alumno.nota,
                    convocatorias: alumno.convocatoria,
                    numAlumnos: 1
                };
            } else {
                modulos[alumno.modulo].notas += alumno.nota;
                modulos[alumno.modulo].convocatorias += alumno.convocatoria;
                modulos[alumno.modulo].numAlumnos++;
            }
        }
        // Calculo la media de notas y convocatorias
        for (let modulo in modulos) {
            estadisticasModulos.push({
                nombre: modulo,
                notasMedia: parseFloat((modulos[modulo].notas / modulos[modulo].numAlumnos).toFixed(2)), // toFixed(x) devuelve string además de redondear a x decimales, por eso parseFloat()
                convocatoriasMedia: parseFloat((modulos[modulo].convocatorias / modulos[modulo].numAlumnos).toFixed(2))
            });
        }

        estadisticasModulos.sort((a, b) => b.convocatoriasMedia - a.convocatoriasMedia);

        return estadisticasModulos;
    }

    function formatearObjetosACadenas() {
        return JSON.stringify(alumnos);
    }

    function formatearCadenasAObjetos(nuevaCadena) {
        let resultado;

        try {
            resultado = JSON.parse(nuevaCadena);

            if (!Array.isArray(resultado)) {
                console.log('El JSON no es un array')
                return null;
            }

            return resultado;
        } catch (error) {
            console.error(error);
            return null
        }
    }

    // console.log(alumnosSuspensos());
    // console.log(estadisticasPorModulo('DWEC'));
    // console.log(formatearObjetosACadenas());
    // const cadena = `[
    //     {
    //         "nombre": "Fran",
    //         "nota": 7,
    //         "modulo": "DWEC",
    //         "convocatoria": 1
    //     },
    //     {
    //         "nombre": "Iker",
    //         "nota": 5,
    //         "modulo": "DWES",
    //         "convocatoria": 2
    //     }
    // ]`;
    // console.log(formatearCadenasAObjetos(cadena));

    return {
        alumnosSuspensos,
        estadisticasPorModulo,
        formatearObjetosACadenas,
        formatearCadenasAObjetos
    }
})();


