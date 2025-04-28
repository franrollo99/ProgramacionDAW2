import AnimalES6 from './AnimalES6.js';

class Perro extends AnimalES6{
    constructor(nombre, tipo = 'perro'){
        super(nombre, tipo);
    }

    hacerRuido() {
        return this.nombre + ' hace guau';
    }

}

export default Perro;