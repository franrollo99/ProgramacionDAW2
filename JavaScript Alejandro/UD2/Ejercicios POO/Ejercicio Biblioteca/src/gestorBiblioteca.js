import { Libro } from './libro';
import { Autor } from './autor';
import { Biblioteca } from './biblioteca.js';
import datos from './datos.js';

const app = document.getElementById('app');

$biblio = (function () {

    function generarHTMLListadoAutores() {
/* <div id="resultados"> tabla
        <div>autor1</div> fila 1
        <div>autor2</div> fila 2
</div> */

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

    
});


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('listadoAutores').addEventListener('click', function(){
        app.innerHTML = $biblio.generarHTMLListadoAutores();
    })

});
