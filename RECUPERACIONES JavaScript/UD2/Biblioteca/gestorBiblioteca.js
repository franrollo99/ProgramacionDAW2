import datos from './datos.js';
import Libro from './Libro.js';
import Autor from './Autor.js';
import Biblioteca from './Biblioteca.js';

const contenedorResultados = document.getElementById('app');

const $biblio = (function(){
    let libros = datos.libros.map(libro => new Libro(libro.libroId, libro.titulo, libro.ISBN, libro.autorId, libro.bibliotecaId, libro.prestamos));
    let autores = datos.autores.map(autor => new Autor(autor.autorId, autor.nombre, autor.nacionalidad, autor.biografia, autor.libros));
    let bibliotecas = datos.bibliotecas.map(biblioteca => new Biblioteca(biblioteca.bibliotecaId, biblioteca.nombre, biblioteca.ubicacion));

    // console.log(libros);
    // console.log(autores);
    // console.log(bibliotecas);


    function generarHTMLListadoAutores(){
        let resultado = '';

        autores.forEach(autor => {
            resultado += `
                <div id="autor${autor.autorId}">
                    <p>Nombre: ${autor.nombre}</p>
                    <p>Nacionalidad: ${autor.nacionalidad}</p>
                    <p>Biografia: ${autor.biografia}</p>
                    <button id="btn-verAutor${autor.autorId}">Ver</button>
                    <button id="btn-editarAutor${autor.autorId}">Editar</button>
                    <button id="btn-borrarAutor${autor.autorId}">Borrar</button>
                </div>
            `;
        });

        return resultado;
    }

    function generarHTMLListadoBibliotecas(){
        let resultado = '';

        bibliotecas.forEach(biblioteca => {
            resultado += `
                <div id="biblioteca${biblioteca.bibliotecaId}">
                    <p>Nombre: ${biblioteca.nombre}</p>
                    <p>Ubicacion: ${biblioteca.ubicacion}</p>
                    <button id="btn-verBiblioteca${biblioteca.bibliotecaId}">Ver</button>
                    <button id="btn-editarBiblioteca${biblioteca.bibliotecaId}">Editar</button>
                    <button id="btn-borrarBiblioteca${biblioteca.bibliotecaId}">Borrar</button>
                </div>
            `;
        });

        return resultado;
    }

    function generarHTMLListadoLibros(){
        let resultado = '';

        libros.forEach(libro => {
            resultado += `
                <div id="libro${libro.libroId}">
                    <p>Titulo: ${libro.titulo}</p>
                    <p>ISBN: ${libro.ISBN}</p>
                    <button id="btn-verLibro${libro.libroId}">Ver</button>
                    <button id="btn-editarLibro${libro.libroId}">Editar</button>
                    <button id="btn-borrarLibro${libro.libroId}">Borrar</button>
                </div>
            `;
        });

        return resultado;
    }

    function buscarLibrosPorTitulo(titulo){
        
    }

    function buscarLibrosPorAutor(nombre){
        
    }

    function generarHTMLResultadoBuscador(resultados){

    }

    function buscarLibro(libroId){

    }

    function buscarAutor(autorId){

    }

    function buscarBiblioteca(bibliotecaId){

    }

    function crearLibro(libro){

    }

    function crearAutor(autor){

    }

    function crearBiblioteca(biblioteca){

    }

    function borrarLibro(libroId){

    }

    function borrarAutor(autorId){
        
    }

    function borrarBiblioteca(bibliotecaId){
        
    }

    function devolverPrestamo(libro){

    }

    function crearPrestamos(libro){

    }

    return{
        generarHTMLListadoAutores,
        generarHTMLListadoBibliotecas,
        generarHTMLListadoLibros,
        buscarLibrosPorTitulo,
        buscarLibrosPorAutor,
        generarHTMLResultadoBuscador,
        buscarLibro,
        buscarAutor,
        buscarBiblioteca,
        crearLibro,
        crearAutor,
        crearBiblioteca,
        borrarLibro,
        borrarAutor,
        borrarBiblioteca,
        devolverPrestamo,
        crearPrestamos
    };
})();


window.addEventListener('load', () =>{

    document.getElementById('btn-listarAutores').addEventListener('click', () => {

        let resultado = $biblio.generarHTMLListadoAutores();

        contenedorResultados.innerHTML = '';
        contenedorResultados.innerHTML += resultado;
    });

    document.getElementById('btn-listarLibros').addEventListener('click', () => {

        let resultado = $biblio.generarHTMLListadoLibros();

        contenedorResultados.innerHTML = '';
        contenedorResultados.innerHTML += resultado;
    });

    document.getElementById('btn-listarBibliotecas').addEventListener('click', () => {

        let resultado = $biblio.generarHTMLListadoBibliotecas();

        contenedorResultados.innerHTML = '';
        contenedorResultados.innerHTML += resultado;
    });




});