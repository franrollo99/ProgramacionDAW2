import datos from './datos.js';

const libros = datos.libros;

class Autor{
    constructor(autorId, nombre, nacionalidad, biografia, libros = []){
        this.autorId = autorId;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.biografia = biografia;
        this.libros = libros;
    }

    generarHTMLCreacion(){
        return `
            <form id="form-crearAutor">
                <fieldset>
                    <legend><h2>Crear autor</h2></legend>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre">
                    <br><br>
                    <label for="nacionalidad">Nacionalidad</label>
                    <input type="text" id="nacionalidad">
                    <br><br>
                    <label for="biografia">Biografia</label>
                    <input type="text" id="biografia">
                    <br><br>
                    <input type="submit" value="Crear">
                </fieldset>
            </form>
        `;
    }

    generarHTMLPropiedades(){
        let librosAutor = '';

        libros.forEach(libro => {
            if(libro.autorId ===  this.autorId){
                librosAutor += `<li>${libro.titulo}</li>`;
            }
        });

        return `
            <div class="contenedorListado" data-id="${this.autorId}">
                <p><b>Nombre:</b> ${this.nombre}</p>
                <p><b>Nacionalidad:</b> ${this.nacionalidad}</p>
                <p><b>Biografia:</b> ${this.biografia}</p>
                <p><b>Libros:</b></p>
                <ul>
                    ${librosAutor}
                </ul>
                <button>Añadir libros</button>
                <button>Eliminar libros</button>
            </div>
        `;
    }

    generarHTMLEdicion(){
        return `
            <form id="form-editarAutor">
                <fieldset>
                    <legend><h2>Editar autor</h2></legend>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" value="${this.nombre}">
                    <br><br>
                    <label for="nacionalidad">Nacionalidad</label>
                    <input type="text" id="nacionalidad" value="${this.nacionalidad}">
                    <br><br>
                    <label for="biografia">Biografia</label>
                    <input type="text" id="biografia" value="${this.biografia}">
                    <br><br>
                    <input type="submit" value="Editar">
                </fieldset>
            </form>
        `;
    }
}

export default Autor;