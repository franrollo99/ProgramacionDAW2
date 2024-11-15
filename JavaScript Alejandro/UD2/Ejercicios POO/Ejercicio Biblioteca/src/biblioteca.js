import datos from "./datos.js";

class Biblioteca{
    constructor(bibliotecaId, nombre, ubicacion){
        this.bibliotecaId=bibliotecaId;
        this.nombre=nombre;
        this.ubicacion=ubicacion;
        this.libros=[];
    }

    generarHTMLCreacion(){
        return `
            <form id="crearBiblioteca">
                <label>Nombre: <input type="text" id="bibliotecaNombre"></label>
                <label>Ubicacion: <input type="text" id="bibliotecaUbicacion"></label>
                <button type="submit">Crear biblioteca</button>
            </form>
        `;
    }

    generarHTMLEdicion(){
        return `
            <form id="editarAutor">
                <label>Nombre: <input type="text" id="editarNombreBiblioteca" value="${this.nombre}"></label>
                <label>Ubicacion: <input type="text" id="editarUbicacionBiblioteca" value="${this.ubicacion}"></label>
                <button type="submit">Editar biblioteca</button>
            </form>
        `;
    }
}

export {Biblioteca};