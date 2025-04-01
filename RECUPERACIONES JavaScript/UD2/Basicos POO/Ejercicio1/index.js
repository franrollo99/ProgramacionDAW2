//////////////////////////////////// OBJETO JSON
const PersonaTipo1 = {
    nombre: 'Fran',
    nacimiento: '1999-10-05',
    hobbies: ['videojuegos', 'peliculas', 'fiesta'],
    getEdad: function () {
        let edad = Math.floor((new Date() - new Date(this.nacimiento)) / ( 1000 * 60 * 60 * 24 * 365));
        return edad
    },
    saludar: function () {
        let resultado = '';
        resultado += 'Hola, me llamo ' + this.nombre + ' y me gusta ';
        for(let hobbi of this.hobbies){
            resultado += hobbi + ', ';
        }

        return resultado;
    }
};

// console.log(PersonaTipo1.saludar());



//////////////////////////////////// FUNCION CONSTRUCTORA
function PersonaTipo2(nombre, nacimiento, hobbies){
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.hobbies = hobbies;
}

PersonaTipo2.prototype.getEdad = function () {
    let edad = Math.floor((new Date() - new Date(this.nacimiento)) / ( 1000 * 60 * 60 * 24 * 365));
    return edad;
};

PersonaTipo2.prototype.saludar = function () {
    let resultado = '';
        resultado += 'Hola, me llamo ' + this.nombre + ' y me gusta ';
        for(let hobbi of this.hobbies){
            resultado += hobbi + ', ';
        }

        return resultado;
};

const persona1 = new PersonaTipo2('Fran', '1999-10-05', ['jugar', 'ver pelis']);

// console.log(persona1.getEdad());



//////////////////////////////////// CLASE ES6
class PersonaTipo3 {
    constructor(nombre, nacimiento, hobbies){
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.hobbies = hobbies;
    }

    get edad() {
        let edad = Math.floor((new Date() - new Date(this.nacimiento)) / ( 1000 * 60 * 60 * 24 * 365));
        return edad;
    }

    saludar(){
        let resultado = '';
        resultado += 'Hola, me llamo ' + this.nombre + ' y me gusta ';
        for(let hobbi of this.hobbies){
            resultado += hobbi + ', ';
        }

        return resultado;
    }
}

const persona2 = new PersonaTipo3('Iker', '2003-10-05', ['jugar', 'ver pelis']);

// console.log(persona2.edad);
// console.log(persona2.saludar());