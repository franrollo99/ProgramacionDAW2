'use strict';

let nombre='Francisco';
let apellido='Rodriguez';
let edad=24;
let añoNacimiento=1999;

//  \' para comillas simples como texto
let mensaje1='Nombre: "' + nombre + '", ' +
            'apellido: "' + apellido + '", ' +
            'edad: \'' + edad + '\', ' +
            'añoNacimiento: \'' + añoNacimiento + '\'';

alert(mensaje1);


//  \n para salto de linea
let mensaje2='Nombre: ' + nombre + '\n' +
            'Apellido: ' + apellido;

alert(mensaje2);



let suma=(edad+añoNacimiento);

alert(suma);



let sumaTodo=(nombre+ '  ' +apellido+ '  ' +edad+ '  ' +añoNacimiento);

alert(sumaTodo);