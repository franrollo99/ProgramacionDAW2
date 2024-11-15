import { Libro } from './libro';
import { Autor } from './autor';
import { Biblioteca } from './biblioteca.js';
import datos from './datos.js';

$biblio = (function () {
    function generarHTMLListadoAutores() {
        return `
            <p>Autor: ${autor.nombre}</p>
            <p>Nacionalidad: ${autor.nacionalidad}</p>
            <p>Biografia: ${autor.biografia}</p>
            <button>Ver</button>
            <button>Editar</button>
            <button>Borrar</button>
        `;
    }

    function generarHTMLListadoBibliotecas() {

    }

    function generarHTMLListadoLibros() {

    }

    function buscarLibrosPorTitulo(libro) {

    }

    function buscarLibrosPorAutor(autor) {

    }

    function generarHTMLResultadoBuscador(resultado) {

    }

    document.getElementById('listadoAutores').addEventListener('click', function(){
        app.innerHTML = $biblio.generarHTMLListadoLibros();
    })
});