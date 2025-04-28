class Juguete {
    #jugueteId;

    // Se usan propiedades internas para evitar recursion (que un metodo se llame a si mismo) en los getters y setters
    constructor(jugueteId, nombre, marca, precio) {
        this.#jugueteId = jugueteId;
        this._nombre = nombre;
        this._marca = marca;
        this._precio = precio;
    }

    get jugueteId() {
        return this.#jugueteId;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    generarHTLMPropiedades(){
        return `

        `;
    }
}

export default Juguete;