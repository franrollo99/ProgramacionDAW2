import AnimalES6 from './index.js';

class Perro extends AnimalES6{
    constructor(tipo, nombre){
        this.tipo = tipo;
        this.nombre = nombre;
    }

    comer() {
        return this.nombre + ' está comiendo';
    }
    
    dormir() {
        return this.nombre + ' está durmiendo';
    }
}

const animal4 = new AnimalES6('perro', 'Mia');
const animal5 = new AnimalES6('gato', 'Kira');
const animal6 = new AnimalES6('animal', 'Simba');

console.log(animal1.comer());