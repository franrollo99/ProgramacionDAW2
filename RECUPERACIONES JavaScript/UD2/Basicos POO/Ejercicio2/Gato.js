import AnimalES6 from './AnimalES6.js';

class Gato extends AnimalES6{
    constructor(nombre, tipo = 'gato'){
        super(nombre, tipo);
    }

    hacerRuido() {
        return this.nombre + ' hace miau';
    }

}

export default Gato;