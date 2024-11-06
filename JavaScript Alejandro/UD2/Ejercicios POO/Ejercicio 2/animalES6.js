class Animal {
    constructor(tipo, nombre) {
        this.tipo=tipo;
        this.nombre = nombre;
    }

    comer(){
        return `${this.nombre} esta comiendo`;
    }

    dormir(){
        return `${this.nombre} esta durmiendo`;
    }
}

// export default Animal;