'use strict';

let nombre="Francisco";
let apellido="Rodriguez";
let edad=24;
let añoNacimiento=1999;

let mensaje1='Nombre: "' + nombre + '", ' +
            'apellido: "' + apellido + '", ' +
            'edad: \'' + edad + '\', ' +
            'añoNacimiento: \'' + añoNacimiento + '\'';

/*let persona={nombre: "Francisco", apellido: "Rodriguez", edad: '24', añoNacimiento:'1999'}
for(let llave in persona){
    console.log(llave,persona[llave]);
}*/

alert(mensaje1);



let mensaje2='Nombre: ' + nombre + '\n' +
            'Apellido: ' + apellido;

alert(mensaje2);



let suma=(edad+añoNacimiento);

alert(suma);



let sumaTodo=(nombre+apellido+edad+añoNacimiento);

alert(sumaTodo);