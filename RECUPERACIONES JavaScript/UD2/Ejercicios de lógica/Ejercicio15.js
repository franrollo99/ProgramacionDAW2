let entrada;

// Contratacion toma los valores 1, 2, 3 y representa el salario base a percibir donde 1 es 1100€, 2 es 1400€ y 3 es 1900€
let trabajadores = [
    {
        codigo: 'E01',
        nombre: 'Fran',
        categoria: 3,
        contratacion: 2015
    },
    {
        codigo: 'E02',
        nombre: 'Iker',
        categoria: 2,
        contratacion: 2018
    },
    {
        codigo: 'E03',
        nombre: 'Aymane',
        categoria: 1,
        contratacion: 2022
    },
    {
        codigo: 'E04',
        nombre: 'Asier',
        categoria: 1,
        contratacion: 2023
    }
];

do {
    entrada = parseInt(prompt('Elige una de las siguientes opciones: \n1-Listar trabajadores \n2-Crear un trabajador \n3-Borrar un trabajador \n4-Modificar un trabajador \n5-Calcular las nominas \n0-Salir'));

    if (isNaN(entrada)) {
        alert('Debes introducir un numero');
    } else {
        switch (entrada) {
            case 1:
                console.log(listarTrabajadores(trabajadores));
                break
            case 2:
                console.log(crearTrabajador(trabajadores));
                break
            case 3:
                console.log(borrarTrabajador(trabajadores));
                break
            case 4:
                console.log(modificarTrabajador(trabajadores));
                break
            case 5:
                console.log(calcularNominas(trabajadores));
                break
            case 0:
                console.log('Cerrando programa');
                break
            default:
                alert('Debes introducir un numero valido');
        }
    }

} while (entrada !== 0)

function listarTrabajadores(trabajadores) {
    resultado = 'Lista de trabajadores:\n';

    for (let trabajador in trabajadores) {
        resultado += `${trabajador} - ${trabajadores[trabajador].nombre} \n`;
    }

    return resultado;
}

function crearTrabajador(trabajadores) {
    let nuevoTrabajador = prompt('Introduce el nombre del nuevo trabajador');
    let codigoNuevo = parseInt(trabajadores[trabajadores.length - 1].codigo.slice(1, 3)) + 1;

    trabajadores.push({
        codigo: codigoNuevo < 10 ? 'E0' + codigoNuevo : 'E' + codigoNuevo,
        nombre: nuevoTrabajador,
        categoria: 1,
        contratacion: new Date().getFullYear() // Obtengo el año actual
    });

    console.log('Trabajador creado con exito');

    return trabajadores[trabajadores.length - 1];
}

function borrarTrabajador(trabajadores) {
    let borrarTrabajador = prompt('Introduce el codigo del trabajador a eliminar');

    for (let trabajador in trabajadores) {
        if (borrarTrabajador == trabajadores[trabajador].codigo) {
            if (confirm('¿Seguro que quieres eliminar el trabajador?')) {
                let trabajadoresRestantes = trabajadores.filter(t => t.codigo !== borrarTrabajador);
                console.log('Trabajador borrado correctamente');
                return trabajadoresRestantes;
            }
        }
    }

    return 'No se ha encontrado ningun trabajador asociado al codigo ' + borrarTrabajador;
}

function modificarTrabajador(trabajadores) {
    let codigo = prompt('Introduce el código del trabajador a modificar:');

    for (let trabajador in trabajadores) {
        if (trabajadores[trabajador].codigo === codigo) {
            let trabajadorModificar = trabajadores[trabajador];

            let nuevoNombre = prompt(`Nombre actual: ${trabajadorModificar.nombre}\nIntroduce nuevo nombre (deja en blanco para mantener):`);
            if (nuevoNombre) trabajadorModificar.nombre = nuevoNombre;

            let nuevaCategoria = prompt(`Categoría actual: ${trabajadorModificar.categoria}\nIntroduce nueva categoría (1, 2 o 3):`);
            if (nuevaCategoria && nuevaCategoria > 0 || nuevaCategoria < 4) {
                trabajadorModificar.categoria = parseInt(nuevaCategoria);
            }

            let nuevoAño = prompt(`Año de contratación actual: ${trabajadorModificar.contratacion}\nIntroduce nuevo año:`);
            if (nuevoAño && !isNaN(parseInt(nuevoAño))) {
                trabajadorModificar.contratacion = parseInt(nuevoAño);
            }

            console.log('Trabajador modificado con éxito');

            return trabajadores;
        }
    }

    return 'Trabajador no encontrado';
}

function calcularNominas(trabajadores) {
    let resultado = '';
    const añoActual = new Date().getFullYear();
    const salariosBase = {
        1: 1100,
        2: 1400,
        3: 1900
    };

    let trabajadoresOrdenados = [...trabajadores].sort((a, b) => a.categoria - b.categoria);

    let totalNominaPorCategoria = {
        1: 0,
        2: 0,
        3: 0
    };

    let totalGeneralNominas = 0;

    resultado += 'Nóminas de los trabajadores:\n';

    for (let trabajador of trabajadoresOrdenados) {
        let antiguedad = añoActual - trabajador.contratacion;
        let base = salariosBase[trabajador.categoria];
        let nomina = base + (base * 0.04 * antiguedad);

        totalNominaPorCategoria[trabajador.categoria] += nomina;
        totalGeneralNominas += nomina;

        resultado += `-${trabajador.nombre} (${trabajador.codigo}) - Categoría ${trabajador.categoria} - Antigüedad: ${antiguedad} años - Nómina: ${nomina} € \n`;
    }

    resultado += '\nResumen por categoría:\n'
    for (let categoria in totalNominaPorCategoria) {
        resultado += `- Categoría ${categoria}: ${totalNominaPorCategoria[categoria]} € \n`;
    }

    resultado += `\nTotal general de nominas: ${totalGeneralNominas} €`;

    return resultado;
}
