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
        
    }

    generarHTMLEdicion(){
        return `
        
        `;
    }
}

export default Biblioteca;