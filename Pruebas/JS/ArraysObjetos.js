//Objetos: son colecciones de pares clave-valor. Para crear varios hay que meterlos en un Array
let personaje={
    nombre: 'Superman',
    poder: 'volar y rayos X',
    edad: 100,
    debilidad: 'criptonita'
};


personaje.edad=9;
delete personaje.debilidad;

console.log(personaje); //{nombre: 'Superman', poder: 'volar y rayos X', edad: 9}

for (let propiedad in personaje) {
    console.log(propiedad + ': ' + personaje[propiedad]); //nombre: Superman <br> poder: volar y rayos X <br> edad: 9
}



console.log(`Nombre: ${personaje.nombre}, Poder: ${personaje.poder}, Edad: ${personaje.edad}, Debilidad: ${personaje.debilidad}`); //Nombre: Superman, Poder: volar y rayos X, Edad: 9, Debilidad: undefined
// console.log('Nombre: ' + personaje.nombre + ', Poder: ' + personaje.poder + ', Edad: ' + personaje.edad + ', Debilidad: ' + personaje.debilidad);
// console.log('Nombre: ' + personaje['nombre'] + ', Poder: ' + personaje['poder'] + ', Edad: ' + personaje['edad'] + ', Debilidad: ' + personaje['debilidad']);





//Arrays: coleccion ordenada de elementos
let animales=['perro', 'gato'];
animales[5]='pez';


console.log(animales.length); //6

console.log(animales[1]); //gato

console.log(animales); //(6) ['perro', 'gato', vacío × 3, 'pez']

for(let animal of animales){
    console.log(animal); //perro <br> gato <br> 3*undefined <br> pez
}

for(let propiedad in animales){
    console.log(propiedad + ': ' + animales[propiedad]) //0: perro <br> 1: gato <br> 5: pez
}

let resultado='';
for(let animal of animales){
    resultado+=animal + ' ';
}
console.log(resultado); //perro gato undefined undefined undefined pez 