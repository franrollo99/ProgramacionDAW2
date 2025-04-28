class AnimalES6{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    comer() {
        return this.nombre + ' está comiendo';
    }
    
    dormir() {
        return this.nombre + ' está durmiendo';
    }

    hacerRuido() {
        return this.nombre + ' hace otro ruido';
    }
}

const animal1 = new AnimalES6('Simba', 'animal');

// console.log(animal1.comer());
// console.log(animal1.dormir());
// console.log(animal1.hacerRuido());

export default AnimalES6;