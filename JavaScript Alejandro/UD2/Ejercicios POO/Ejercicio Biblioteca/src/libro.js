import datos from "./datos.js";

class Libro {
    constructor(libroId, titulo, ISBN, autorld, bibliotecaId) {
        this.libroId = libroId;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autorld = autorld;
        this.bibliotecaId = bibliotecaId;
        this.prestamos = [];
    }

    get estaDisponible() { 
        return this.prestamos.length % 2 === 0 ? 'Disponible' : 'No disponible';
    }

    generarHTMLCreacion() {
        return `
            <form id="crearLibro">
                <label>Titulo: <input type="text" id="titulo"></label>
                <label>ISBN: <input type="text" id="isbn"></label>
                <label>Autor ID: <input type="text" id="autorId"></label>
                <label>Biblioteca ID: <input type="text" id="bibliotecaId"></label>
            </form>
        `;
    }

    generarHTMLPropiedades() {
        return `
            <p>Titulo: ${this.titulo}</p>
            <p>ISBN: ${this.ISBN}</p>
            <button id="editarLibro">Editar</button>
            <button id="borrarLibro">Borrar</button>
            <button id="listarPrestamos">Listar prestamos</button>
            <button id="crearPrestamo">Crear prestamo</button>
            <button id="devolverPrestamos">Devolver prestamo</button>
        `;
    }

    generarHTMLEdicion() {
        return `
            <form id="editarLibro">
                <label>Título: <input type="text" id="editarTitulo" value="${this.titulo}"></label>
                <label>ISBN: <input type="text" id="editarIsbn" value="${this.ISBN}"></label>
                <button type="submit">Guardar</button>
            </form>
        `;
    }

    generarHTMLListadoPrestamos() {
        return `
            <ul>
                
            </ul>
        `;
    }
}

export { Libro };