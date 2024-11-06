// import Animal from './animalES6';

class Perro extends Animal{
    constructor(nombre){
        super('perro', nombre);
    }

    haceRuido(){
        return `${this.nombre} hace guau porque es de tipo ${this.tipo}`;
    }
}

const perro1=new Perro('Ron');
console.log(perro1.comer());
console.log(perro1.dormir());
console.log(perro1.haceRuido());