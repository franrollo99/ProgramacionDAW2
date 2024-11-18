import datos from "./datos.js";

class Autor {
    constructor(autorId, nombre, nacionalidad, biografia, libros = []) {
        this.autorId = autorId;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.biografia = biografia;
        this.libros = libros;
    }

    generarHTMLCreacion() {
        return `
            <form id="crear-autor-form">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                
                <label for="nacionalidad">Nacionalidad:</label>
                <input type="text" id="nacionalidad" name="nacionalidad" required>
                
                <label for="biografia">Biografía:</label>
                <textarea id="biografia" name="biografia" required></textarea>
                
                <button type="submit">Crear Autor</button>
            </form>
        `;
    }

    generarHTMLPropiedad() {
        const librosHTML = this.libros.length > 0 ? this.libros.map((titulo, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${titulo}</td>
                    <td>
                        <button class="biblio-autor-eliminar-libro" data-autor-id="${this.autorId}" data-titulo="${titulo}">
                            Eliminar
                        </button>
                    </td>
                </tr>
              `).join("")
            : `<tr><td colspan="3">No tiene libros publicados.</td></tr>`;

        return `
            <div class="autor-detalle" data-autor-id="${this.autorId}">
                <h3>${this.nombre}</h3>
                <p><strong>Nacionalidad:</strong> ${this.nacionalidad}</p>
                <p><strong>Biografía:</strong> ${this.biografia}</p>
                <h4>Libros Publicados:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${librosHTML}
                    </tbody>
                </table>
                <button class="biblio-autor-anadir-libro" data-autor-id="${this.autorId}">
                    Añadir Libro
                </button>
            </div>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form id="editar-autor-form" data-autor-id="${this.autorId}">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value="${this.nombre}" required>
            
            <label for="nacionalidad">Nacionalidad:</label>
            <input type="text" id="nacionalidad" name="nacionalidad" value="${this.nacionalidad}" required>
            
            <label for="biografia">Biografía:</label>
            <textarea id="biografia" name="biografia" required>${this.biografia}</textarea>
            
            <button type="submit">Guardar Cambios</button>
        </form>
    `;
    }

    anadirLibro(titulo) {
        if (this.libros.includes(titulo)) {
            throw new Error(`El libro "${titulo}" ya está en la lista de libros del autor.`);
        }
        this.libros.push(titulo);
    }

    eliminarLibro(titulo) {
        const index = this.libros.indexOf(titulo);
        if (index === -1) {
            throw new Error(`El libro "${titulo}" no se encuentra en la lista de libros del autor.`);
        }
        this.libros.splice(index, 1);
    }
}

export { Autor };
