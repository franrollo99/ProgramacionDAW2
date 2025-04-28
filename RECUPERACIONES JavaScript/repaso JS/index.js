let original = [1, 2, 3];
let copia = [...original];

copia[0] = 5;


console.log(original);
console.log(copia);









let personas = [
    {
        id: 1,
        nombre: 'Marcelo',
        edad: 25,
        fechaNacimiento: '05-10-1999',
        estudios: 'DAW',
        telefono: [
            { tipo: 'movil', numero: 628404169 },
            { tipo: 'fijo', numero: 942803479 }
        ]
    },
    {
        id: 2,
        nombre: 'Laura',
        edad: 30,
        fechaNacimiento: '12-03-1994',
        estudios: 'Diseño Gráfico',
        telefono: [
            { tipo: 'movil', numero: 623456789 },
            { tipo: 'fijo', numero: 944123456 }
        ]
    },
    {
        id: 3,
        nombre: 'Carlos',
        edad: 28,
        fechaNacimiento: '15-07-1996',
        estudios: 'Ingeniería Informática',
        telefono: [
            { tipo: 'movil', numero: 634567890 },
            { tipo: 'fijo', numero: 911234567 }
        ]
    }
];

// Math.max(numeros) ->  usamos el operador spread para quitar los corchetes del array y 
// expandir sus elementos uno a uno como si fuera argumentos separados de tal forma que 
// en vez de ser [1, 2, 3] sea 1, 2, 3
let siguienteId = Math.max(...personas.map(persona => persona.id))+1;

// console.log(...personas);
// console.log(siguienteId);

for(let persona of personas){
    if(persona.nombre === 'Marcelo'){
        persona.nombre = 'Fran';
    }

    // console.log(persona);
}

// console.log(personas);





// let persona = {
//     nombre: 'Fran',
//     edad: 25,
//     fechaNacimiento: '05-10-1999'
// };

// persona.estudios = 'DAW';
// persona.nombre = 'Marcelo';
// persona.telefono = [{
//     tipo: 'movil',
//     numero: 628404169
// }];

// persona.telefono.push({
//     tipo: 'fijo',
//     numero: 942803479
// });

// console.log(persona);
// console.log(JSON.stringify(persona));