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


const animal1 = new Animal('perro', 'Mia');
const animal2 = new Animal('gato', 'Kira');
const animal3 = new Animal('animal', 'Simba');


console.log(animal1.comer());
console.log(animal1.dormir());
console.log(animal1.hacerRuido());