class Biblioteca{
    constructor(bibliotecaId, nombre, ubicacion){
        this.bibliotecaId = bibliotecaId;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    // libros

    generarHTMLCreacion(){
        return `
            <form id="form-crearBiblioteca">
                <fieldset>
                    <legend><h2>Crear biblioteca</h2></legend>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre">
                    <br><br>
                    <label for="ubicacion">Ubicacion</label>
                    <input type="text" id="ubicacion">
                    <br><br>
                    <input type="submit" value="Crear">
                </fieldset>
            </form>
        `;
    }

    generarHTMLPropiedades(){
        return `
            <div class="contenedorListado" data-id="${this.bibliotecaId}">
                <p><b>Nombre:</b> ${this.nombre}</p>
                <p><b>Ubicacion:</b> ${this.ubicacion}</p>
                <button>Añadir libros</button>
                <button>Eliminar libros</button>
            </div>
        `;
    }

    generarHTMLEdicion(){
        return `
            <form id="form-editarBiblioteca">
                <fieldset>
                    <legend><h2>Editar biblioteca</h2></legend>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" value="${this.nombre}">
                    <br><br>
                    <label for="ubicacion">Ubicacion</label>
                    <input type="text" id="ubicacion" value="${this.ubicacion}">
                    <br><br>
                    <input type="submit" value="Editar">
                </fieldset>
            </form>   
        `;
    }
}

export default Biblioteca;