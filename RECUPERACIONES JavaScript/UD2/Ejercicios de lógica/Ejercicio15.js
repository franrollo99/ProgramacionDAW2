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

// console.log(listarTrabajadores(trabajadores));
// console.log(crearTrabajador(trabajadores));

function listarTrabajadores(trabajadores){
    resultado = 'Lista de trabajadores:\n';

    for(let trabajador in trabajadores){
        resultado += `${trabajador} - ${trabajadores[trabajador].nombre} \n`;
    }

    return resultado;
}

function crearTrabajador(trabajadores){
    let nuevoTrabajador = prompt('Introduce el nombre del nuevo trabajador');
    let codigoNuevo = parseInt(trabajadores[trabajadores.length-1].codigo.slice(1, 3)) + 1;

    trabajadores.push({
        codigo: codigoNuevo < 10 ? 'E0' + codigoNuevo : 'E' + codigoNuevo,
        nombre: nuevoTrabajador,
        categoria: 1,
        contratacion: new Date().getFullYear() // Obtengo el año actual
    });

    return trabajadores[trabajadores.length-1];
}

function borrarTrabajador(trabajadores){
    let borrarTrabajador = prompt('Introduce el codigo del trabajador a eliminar');
    
    for(let trabajador in trabajadores){
        if(borrarTrabajador == trabajadores[trabajador].codigo){
            if(confirm('?Seguro que quieres eliminar el trabajador?')){
                trabajadores[trabajador].pop();
                console.log('Trabajador borrado correctamente');
                return trabajadores;
            }
        }
    }

    return 'No se ha encontrado ningun trabajador asociado a ese codigo';
}

console.log(borrarTrabajador(trabajadores));