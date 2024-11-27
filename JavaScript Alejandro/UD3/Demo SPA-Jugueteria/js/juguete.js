class Juguete{
    #jugueteId;

    constructor(jugueteId=null, nombre, marca, precio){
        this.#jugueteId=jugueteId;
        this.nombre=nombre;
        this.marca=marca;
        this.precio=precio;
    }

    #getJugueteId(){
        return this.#jugueteId;
    }

    set nombre(nombreNuevo){
        this.nombre=nombreNuevo;
    }

    get nombre(){
        return this.nombre;
    }

    set marca(marcaNueva){
        this.marca=marcaNueva;
    }

    get nombre(){
        return this.nombre;
    }

    set precio(precioNuevo){
        this.precio=precioNuevo;
    }

    get precio(){
        return this.precio;
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