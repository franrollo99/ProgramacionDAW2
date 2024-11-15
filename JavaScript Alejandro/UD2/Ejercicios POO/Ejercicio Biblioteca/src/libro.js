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
                <button type="submit">Crear libro</button>
            </form>
        `;
    }

    generarHTMLPropiedades() {
        return `
            <p>Titulo: ${this.titulo}</p>
            <p>ISBN: ${this.ISBN}</p>
            <button data-action="editar-libro">Editar</button>
            <button data-action="borrar-libro">Borrar</button>
            <button data-action="listar-prestamos">Listar prestamos</button>
            <button data-action="crear-prestamo">Crear prestamo</button>
            <button data-action="devolver-prestamo">Devolver prestamo</button>
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
            ${this.prestamos.map(prestamo => `
                <li>
                    <p>Fecha de Préstamo: ${prestamo.fechaPrestamo}</p>
                    <p>Fecha de Devolución: ${prestamo.fechaDevolucion}</p>
                </li>
            `).join('')}
        </ul>
        `;
    }
}

export { Libro };