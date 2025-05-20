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

    generarHTMLPropiedades(){
        return `
            <form data-componente="propiedades" name="jg-formulario">
                <input type="hidden" id="jugueteid" name="jugueteid" value="1">
                <div>
                    <label for="nombre">Nombre del juguete:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ej. Camión de bomberos" required>
                </div>
                <div>
                    <label for="marca">Marca:</label>
                    <input type="text" id="marca" name="marca" placeholder="Ej. Hot Wheels" required>
                </div>
                <div>
                    <label for="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" placeholder="Ej. 19.99" step="0.01" required>
                </div>
                <div>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        `;
    }
}

export default Juguete;