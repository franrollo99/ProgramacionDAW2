class Biblioteca {
    constructor(bibliotecaId, nombre, ubicacion, libros = []) {
        this.bibliotecaId = bibliotecaId;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.libros = libros;
    }

    obtenerLibrosBiblioteca(libros) {
        this.libros = libros.filter(libro => libro.bibliotecaId === this.bibliotecaId);
    }

    generarHTMLCreacion() {
        return `
            <form id="crear-biblioteca-form">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                
                <label for="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" required>
                
                <button type="submit">Crear Biblioteca</button>
            </form>
        `;
    }

    generarHTMLEdicion() {
        return `
            <form id="editar-biblioteca-form" data-biblioteca-id="${this.bibliotecaId}">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value="${this.nombre}" required>
                
                <label for="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" value="${this.ubicacion}" required>
                
                <button type="submit">Guardar Cambios</button>
            </form>
        `;
    }
}

export { Biblioteca };
