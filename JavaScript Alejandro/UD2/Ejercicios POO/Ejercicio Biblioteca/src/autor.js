import datos from "./datos.js";

class Autor{
    constructor(autorId, nombre, nacionalidad, biografia){
        this.autorId=autorId;
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.biografia=biografia;
        this.libros=[];
    }

    generarHTMLCreacion(){
        return `
            <form id="crearAutor">
                <label>Nombre: <input type="text" id="nombreAutor"></label>
                <label>Nacionalidad: <input type="text" id="nacionalidadAutor"></label>
                <label>Biografia: <input type="text" id="biografiaAutor"></label>
                <button type="submit">Crear autor</button>  //capturar evento y llevar los datos a gestorBiblioteca
            </form>
        `;
    }

    generarHTMLPropiedad(){
        return `
            <p>Nombre: ${this.nombre}</p>
            <p>Nacionalidad: ${this.nacionalidad}</p>
            <p>Biografia: ${this.biografia}</p>
            <table>
                ${this.libros.map(libro => `<tr><td>${libro}</td></tr>`).join('')}
            </table>
            <button data-action="añadir-libro">Añadir libro</button>
            <button data-action="eliminar-libro">Eliminar libro</button>
        `;
    }

    generarHTMLEdicion(){
        return `
            <form id="editarAutor">
                <label>Nombre: <input type="text" id="editarNombreAutor" value="${this.nombre}"></label>
                <label>Nacionalidad: <input type="text" id="editarNacionalidadAutor" value="${this.nacionalidad}"></label>
                <label>Biografia: <input type="text" id="editarBiografiaAutor" value="${this.biografia}"></label>
                <button type="submit">Editar autor</button>
            </form>
        `;
    }
}

export {Autor};