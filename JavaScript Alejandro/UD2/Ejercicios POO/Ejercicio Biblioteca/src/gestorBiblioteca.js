import { Libro } from './libro.js';
import { Autor } from './autor.js';
import { Biblioteca } from './biblioteca.js';
import datos from './datos.js';


const $biblio = (function () {

    let libros = datos.libros;
    let autores = datos.autores;
    let bibliotecas = datos.bibliotecas;

    /* <div id="resultados"> tabla
            <div>autor1</div> fila 1
            <div>autor2</div> fila 2
    </div> */

    function generarHTMLListadoAutores() {

        const html = document.getElementById('app');
        html.innerHTML = '';
        html.innerHTML += `<table>
                <tr>
                    <th>Nombre</th>
                    <th>Nacionalidad</th>
                    <th>Biografia</th>
                </tr>`;
        autores.forEach(autor => {
            html.innerHTML += `
                <tr>
                    <td>${autor.nombre}</td>
                    <td>${autor.nacionalidad}</td>
                    <td>${autor.biografia}</td>
                </tr>
            `;
        });
        html.innerHTML += `</table>`;
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

    return {
        generarHTMLListadoAutores,
        generarHTMLListadoBibliotecas,
        generarHTMLListadoLibros,
        buscarLibrosPorTitulo,
        buscarLibrosPorAutor,
        generarHTMLResultadoBuscador
    };
})();


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('listadoAutores').addEventListener('click', function(event) {
        event.preventDefault();
        $biblio.generarHTMLListadoAutores();

    });

});