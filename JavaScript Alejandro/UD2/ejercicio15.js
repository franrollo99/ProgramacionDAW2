let incremental=3;
let trabajadores=[
    {codigo: 'E01', nombre: 'Fran', categoria: 2, contratacion: 2014},
    {codigo: 'E02', nombre: 'Maria', categoria: 3, contratacion: 2017}
];

function listarTrabajadores(trabajadores){
    for(trabajador of trabajadores){
        console.log(`Codigo: ${codigo}, Nombre: ${nombre}, Categoria: ${categoria}, Contratacion: ${contratacion}`)
        //console.log('Codigo: ' + trabajador.codigo + ', Nombre:' + trabajador.nombre + ', Categoria: ' + trabajador.categoria + ', Contratacion: ' + trabajador.contratacion);
    }
}

function crearTrabajadores(trabajadores){
    let codigo=incremental<=9 ? `E0${incremental++}` : `E${incremental++}`;
    let nombre=prompt('Introduce el nombre del trabajador');
    let categoria=prompt('Introduce la categoria del trabajador');
    let contratacion=prompt('Introduce el año de contratacion');

    let trabajador={};
    trabajador.codigo=codigo;
    trabajador.nombre=nombre;
    trabajador.categoria=categoria;
    trabajador.contratacion=contratacion;

    trabajadores[trabajadores.length]=trabajador;
}



function eliminarTrabajador(trabajadores){
    codigoTrabajador=prompt('Introduce el codigo del trabajador a eliminar');
    for(trabajador of trabajadores){
        if(codigoTrabajador===trabajador.codigo){
            delete trabajador;
            break;
        }
    }
}



function modificarTrabajador(trabajadores){
    let codigo=prompt('Introduce el codigo del trabajador');
    let trabajadorEncontrado;
    for(let i=0; i<trabajadores.length; i++){
        if(trabajador.codigo==codigo){
            trabajadorEncontrado=trabajador[i];
            break;
        }
    }
    if(trabajadorEncontrado==undefined){
        return;
    }

    trabajadorEncontrado.nombre=prompt('Introduce el nombre');
    trabajadorEncontrado.categoria=parseInt(prompt('Introduce la categoria'));
    trabajadorEncontrado.contratacion=parseInt(prompt('Introduce el año de contratacion'));
}

function calculaNominaTrabajador(trabajador){
    let sueldoBase;
    switch(trabajador.categoria){
        case 1:
            sueldoBase=1100;
            break;
        case 2:
            sueldoBase=1400;
            break;
        case 3:
            sueldoBase=1900;
            break;
    }

    let añosContratado=new Date().getFullYear()-trabajador.contratacion;
    let plusAnual=sueldoBase+1.04;
    let nomina=sueldoBase+(plusAnual*añosContratado)

    return nomina;
}

function CalcularNominaCategoria(trabajador){
    let total1;
    let total2;
    let total3;
    //switch case y for?  
}