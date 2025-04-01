////////////////// FUNCION CONSTRUCTORA
function Animal(tipo, nombre){
    this.tipo = tipo;
    this.nombre = nombre;
}

Animal.prototype.comer = function() {
    return this.nombre + ' está comiendo';
}

Animal.prototype.dormir = function() {
    return this.nombre + ' está durmiendo';
}

Animal.prototype.hacerRuido = function() {
    let ruido;

    switch (this.tipo){
        case 'perro':
            ruido = this.nombre + ' hace guau';
            break;
        case 'gato':
            ruido = this.nombre + ' hace miau';
            break;
        default:
            ruido = this.nombre + ' hace otro ruido';
    }

    return ruido;
}



////////////////// CLASE ES6
class AnimalES6{
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



const animal1 = new Animal('perro', 'Mia');
const animal2 = new Animal('gato', 'Kira');
const animal3 = new Animal('animal', 'Simba');
const animal4 = new AnimalES6('perro', 'Mia');
const animal5 = new AnimalES6('gato', 'Kira');
const animal6 = new AnimalES6('animal', 'Simba');

console.log(animal1.comer());
console.log(animal1.dormir());
console.log(animal1.hacerRuido());

export default AnimalES6;