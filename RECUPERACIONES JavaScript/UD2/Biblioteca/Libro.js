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
        return `
            <form id="form-crearLibro">
                <fieldset>
                    <legend><h2>Crear libro</h2></legend>
                    <label for="titulo">Titulo</label>
                    <input type="text" id="titulo">
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
                    <input type="submit" value="Crear">
                </fieldset>
            </form>
        `;
    }

    generarHTMLPropiedades() {
        return `
            <div id="propiedadesLibro">
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