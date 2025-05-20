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
        const autor = autores.filter(autor => autor.autorId === this.autorId)[0];
        const biblioteca = bibliotecas.filter(biblioteca =>biblioteca.bibliotecaId === this.bibliotecaId)[0];

        return `
        <div class="contenedorListado" data-id="${this.libroId}">
            <p><b>Titulo:</b> ${this.titulo}</p>
            <p><b>Autor:</b> ${autor.nombre}</p>
            <p><b>ISBN:</b> ${this.ISBN}</p>
            <p><b>Biblioteca:</b> ${biblioteca.nombre}</p>
            <p>Préstamos:</p>
                <ul>
                    <li>prestamo</li>
                </ul>
            <button data-action="editar-libro" data-id="${this.libroId}">Editar</button>
            <button data-action="borrar-libro" data-id="${this.libroId}">Borrar</button>
            <button data-action="listar-prestamos" data-id="${this.libroId}">Listar préstamos</button>
            <button data-action="crear-prestamo" data-id="${this.libroId}">Crear préstamo</button>
            <button data-action="devolver-prestamo" data-id="${this.libroId}">Devolver préstamos</button>
        </div>
        `;
    }

    generarHTMLEdicion() {
        let opcionesAutores = '';
        for (let autor of autores) {
            opcionesAutores += `<option value="${autor.autorId}">${autor.nombre}</option>`;
        }

        let opcionesBibliotecas = '';
        for (let biblioteca of bibliotecas) {
            opcionesBibliotecas += `<option value="${biblioteca.bibliotecaId}">${biblioteca.nombre}</option>`;
        }

        // Poner predeterminado el autor y biblioteca del libro
        
        return `
        <form id="form-editarLibro">
            <fieldset>
                <legend><h2>Editar libro</h2></legend>
                <label for="titulo">Titulo</label>
                <input type="text" id="titulo" value="${this.titulo}">
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