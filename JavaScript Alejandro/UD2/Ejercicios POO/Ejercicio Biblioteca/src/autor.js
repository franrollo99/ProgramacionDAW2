import datos from "./datos.js";

class Autor{
    constructor(autorId, nombre, nacionalidad, bibiografia){
        this.autorId=autorId;
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.bibiografia=bibiografia;
        this.libros=[];
    }

    generarHTMLCreacion(){

    }

    generarHTMLPropiedad(){

    }

    generarHTMLEdicion(){

    }
}

export {Autor};