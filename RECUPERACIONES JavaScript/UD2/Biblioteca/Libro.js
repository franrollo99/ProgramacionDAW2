import datos from './datos.js';

const autores = datos.autores;
const bibliotecas = datos.bibliotecas;

class Libro {
    constructor(libroId, titulo, ISBN, autorId, bibliotecaId, prestamos = []) {
        this.libroId = libroId;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autorId = autorId;
        this.bibliotecaId = bibliotecaId;
        this.prestamos = prestamos;
    }

    generarHTMLCreacion() {
        let opcionesAutores = '';
        for (let autor of autores) {
            opcionesAutores += `<option value="${autor.autorId}">${autor.nombre}</option>`;
        }

        let opcionesBibliotecas = '';
        for (let biblioteca of bibliotecas) {
            opcionesBibliotecas += `<option value="${biblioteca.bibliotecaId}">${biblioteca.nombre}</option>`;
        }
    
        return `
            <form id="form-crearLibro">
                <fieldset>
                    <legend><h2>Crear libro</h2></legend>
                    <label for="titulo">Titulo</label>
                    <input type="text" id="titulo">
                    <br><br>
                    <label for="autor">Autor</label>
                    <select id="autor">
                        ${opcionesAutores}
                    </select>
                    <br><br>
                    <label for="biblioteca">Biblioteca</label>
                    <select id="biblioteca">
                        ${opcionesBibliotecas}
                    </select>
                    <br><br>
                    <input type="submit" value="Crear">
                </fieldset>
            </form>
        `;
    }
    

    generarHTMLPropiedades() {
        

        return `
        <div class="contenedorListado" data-id="${libro.libroId}">
                    <p><b>Titulo:</b> ${this.titulo}</p>
                    <p><b>Autor:</b> ${this.autorId}</p>
                    <p><b>ISBN:</b> ${this.ISBN}</p>
                    <p><b>Biblioteca:</b> ${this.bibliotecaId}</p>
                    <button data-action="crear-libro" data-id="${this.libroId}">Crear</button>
                    <button data-action="ver-libro" data-id="${this.libroId}">Ver</button>
                    <button data-action="editar-libro" data-id="${this.libroId}">Editar</button>
                    <button data-action="borrar-libro" data-id="${this.libroId}">Borrar</button>
                </div>

            <div class="contenedorListado" id="propiedadesLibro">
                <p>Titulo: ${this.titulo}</p>
                <p>ISBN: ${this.ISBN}</p>
                <p>Autor: </p>
                <p>Biblioteca: </p>
                <p>Préstamos:</p>
                <ul>
                    <li>prestamo</li>
                </ul>
                <button>Editar</button>
                <button>Borrar</button>
                <button>Listar préstamos</button>
                <button>Crear préstamo</button>
                <button>Devolver préstamo</button>
            </div>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form id="form-editarLibro">
            <fieldset>
                <legend><h2>Editar libro</h2></legend>
                <label for="titulo">Titulo</label>
                <input type="text" id="titulo" value="${this.titulo}">
                <br><br>
                <label for="autor">Autor</label>
                <select id="autor">
                    <option value="autor">Autor</option>
                </select>
                <br><br>
                <label for="biblioteca">Biblioteca</label>
                <select id="biblioteca">
                    <option value="biblioteca">Biblioteca</option>
                </select>
                <br><br>
                <input type="submit" value="Editar">
            </fieldset>
        </form>
        `;
    }

    generarHTMLListadoPrestamos(){
        let resultado = '';
        resultado += '<div id="listadoPrestamos">';
        
        if(this.prestamos.length > 0 ){
            for(let prestamo of this.prestamos){
                // 
            }
        }else{
            resultado += '<p>No hay prestamos</p>';
        }

        resultado += '</div>';
    
        return resultado;
    }
}

export default Libro;