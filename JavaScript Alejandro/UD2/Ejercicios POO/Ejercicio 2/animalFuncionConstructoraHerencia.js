function Animal(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;
}

Animal.prototype.comer=function(){
    return `${this.nombre} esta comiendo`;
};

Animal.prototype.dormir=function(){
    return `${this.nombre} esta durmiendo`;
};

Animal.prototype.haceRuido=function(){
    if(this.tipo==='perro'){
        return `${this.nombre} hace guau`;
    }else if(this.tipo==='gato'){
        return `${this.nombre} hace miau`;
    }else{
        return `${this.nombre} hace otro sonido no registrado`;
    }
}

const animal1=new Animal('gato', 'Garfield');

console.log(animal1.comer());
console.log(animal1.dormir());
console.log(animal1.haceRuido());