import datos from "./datos.js";

class Libro{
    #libroId;
    #titulo;
    #ISBN;
    #autorld;
    #bibliotecaId;
    #prestamos;
    #estaDisponible;

    constructor(libroId, titulo, ISBN, autorld, bibliotecaId, estaDisponible){
        this.#libroId=libroId;
        this.#titulo=titulo;
        this.#ISBN=ISBN;
        this.#autorld=autorld;
        this.#bibliotecaId=bibliotecaId;
        this.#prestamos=[];
        this.#estaDisponible=estaDisponible;
    }

    generarHTMLCreacion(){

    }

    generarHTMLPropiedades(){

    }

    generarHTMLEdicion(){

    }
    
    generarHTMLListadoPrestamos(){

    }
}

export {Libro};