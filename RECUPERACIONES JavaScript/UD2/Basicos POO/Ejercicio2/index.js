import AnimalES6 from './AnimalES6.js';
import Perro from './Perro.js';
import Gato from './Gato.js';

const animal1 = new AnimalES6('animal', 'Simba');
const perro1 = new Perro('Mia');
const gato1 = new Gato('Kira');


// console.log(animal1.comer());
// console.log(animal1.dormir());
// console.log(animal1.hacerRuido());

// console.log(perro1.comer());
// console.log(perro1.hacerRuido());

console.log(gato1.comer());
console.log(gato1.hacerRuido());
