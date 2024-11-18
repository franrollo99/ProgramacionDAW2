class Libro {
    constructor(libroId, titulo, ISBN, autorId, bibliotecaId, prestamos = []) {
        this.libroId = libroId;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autorId = autorId;
        this.bibliotecaId = bibliotecaId;
        this.prestamos = prestamos;
    }

    get estaDisponible() {
        return this.prestamos.length % 2 === 0 ? 'Disponible' : 'No disponible';
    }

    generarHTMLCreacion() {
        return `
            <form id="crear-libro-form">
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" required>
                
                <label for="ISBN">ISBN:</label>
                <input type="text" id="ISBN" name="ISBN" required>
                
                <label for="autorId">Autor (ID):</label>
                <input type="number" id="autorId" name="autorId" required>
                
                <label for="bibliotecaId">Biblioteca (ID):</label>
                <input type="number" id="bibliotecaId" name="bibliotecaId" required>
                
                <button type="submit">Crear Libro</button>
            </form>
        `;
    }

    generarHTMLPropiedades() {
        return `
            <div class="libro-detalle" data-libro-id="${this.libroId}">
                <h3>${this.titulo}</h3>
                <p><strong>ISBN:</strong> ${this.ISBN}</p>
                <p><strong>Autor (ID):</strong> ${this.autorId}</p>
                <p><strong>Biblioteca (ID):</strong> ${this.bibliotecaId}</p>
                <p><strong>Disponibilidad:</strong> ${this.estaDisponible ? "Disponible" : "Prestado"}</p>
                <div class="acciones">
                    <button class="biblio-libro-editar" data-libro-id="${this.libroId}">Editar</button>
                    <button class="biblio-libro-borrar" data-libro-id="${this.libroId}">Borrar</button>
                    <button class="biblio-libro-prestamos" data-libro-id="${this.libroId}">Listar Préstamos</button>
                    <button class="biblio-libro-prestar" data-libro-id="${this.libroId}" ${this.estaDisponible ? '' : 'disabled'}>Crear Préstamo</button>
                    <button class="biblio-libro-devolver" data-libro-id="${this.libroId}" ${this.estaDisponible ? 'disabled' : ''}>Devolver Préstamo</button>
                </div>
            </div>
        `;
    }

    generarHTMLEdicion() {
        return `
            <form id="editar-libro-form" data-libro-id="${this.libroId}">
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" value="${this.titulo}" required>
                
                <label for="ISBN">ISBN:</label>
                <input type="text" id="ISBN" name="ISBN" value="${this.ISBN}" required>
                
                <label for="autorId">Autor (ID):</label>
                <input type="number" id="autorId" name="autorId" value="${this.autorId}" required>
                
                <label for="bibliotecaId">Biblioteca (ID):</label>
                <input type="number" id="bibliotecaId" name="bibliotecaId" value="${this.bibliotecaId}" required>
                
                <button type="submit">Guardar Cambios</button>
            </form>
        `;
    }

    generarHTMLListadoPrestamos() {
        if (this.prestamos.length === 0) {
            return `<p>No hay préstamos registrados para este libro.</p>`;
        }

        const prestamosHTML = this.prestamos.map(prestamo => `
            <li>
                Fecha de Préstamo: ${prestamo.fechaPrestamo || "N/A"}<br>
                Fecha de Devolución: ${prestamo.fechaDevolucion || "No devuelto"}
            </li>
        `).join("");

        return `
            <ul class="libro-prestamos-lista">
                ${prestamosHTML}
            </ul>
        `;
    }

    crearPrestamo(fechaPrestamo) {
        if (!this.estaDisponible) {
            throw new Error("El libro no está disponible para préstamo.");
        }
        this.prestamos.push({ fechaPrestamo, fechaDevolucion: null });
    }

    devolverPrestamo(fechaDevolucion) {
        const prestamoActivo = this.prestamos.find(prestamo => !prestamo.fechaDevolucion);
        if (!prestamoActivo) {
            throw new Error("No hay préstamos activos para este libro.");
        }
        prestamoActivo.fechaDevolucion = fechaDevolucion;
    }
}

export { Libro };
