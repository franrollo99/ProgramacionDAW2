let trabajadores=[
    {codigo: 'E01', nombre: 'Fran', categoria: 2, contratacion: 2014},
    {codigo: 'E02', nombre: 'Maria', categoria: 3, contratacion: 2017}
];

function listarTrabajadores(trabajadores){
    // for(trabajador of trabajadores){
    //     console.log(`Codigo: ${trabajador.codigo}, Nombre: ${trabajador.nombre}, Categoria: ${trabajador.categoria}, Contratacion: ${trabajador.contratacion}`)
    //     //console.log('Codigo: ' + trabajador.codigo + ', Nombre:' + trabajador.nombre + ', Categoria: ' + trabajador.categoria + ', Contratacion: ' + trabajador.contratacion);
    // }
    for(prop in trabajadores){
        console.log(prop, trabajadores[prop]);
    }
}

listarTrabajadores(trabajadores);