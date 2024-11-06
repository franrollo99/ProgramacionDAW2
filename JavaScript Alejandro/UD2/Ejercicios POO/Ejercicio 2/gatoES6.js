// import Animal from './animalES6';

class Gato extends Animal{
    constructor(nombre){
        super('gato', nombre);
    }

    haceRuido(){
        return `${this.nombre} hace miau porque es de tipo ${this.tipo}`;
    }
}

const gato1=new Gato('Garfield');
console.log(gato1.comer());
console.log(gato1.dormir());
console.log(gato1.haceRuido());