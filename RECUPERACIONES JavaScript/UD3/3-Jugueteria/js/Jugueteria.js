import datos from './datos.js';
import Juguete from './juguete.js';

class Jugueteria{
    #contenedor;
    #juguetes;
    #contador;

    // constructor(contenedor, juguetes, contador){
    constructor(){
        this.#juguetes = datos.map(juguete => new Juguete(juguete.jugueteId, juguete.nombre, juguete.marca, juguete.precio));
        this.#contador = Math.max(...datos.map(juguete => juguete.jugueteId));
    }

    // this.#contenedor = document.querySelector('#app');


}

let jugueteria = new Jugueteria();

// console.log(jugueteria.juguetes);
// console.log(jugueteria.contador);
