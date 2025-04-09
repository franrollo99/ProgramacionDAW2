import datos from './datos.js';
import Libro from './Libro.js';
import Autor from './Autor.js';
import Biblioteca from './Biblioteca.js';

const contenedorResultados = document.getElementById('app');
const formBuscador = document.getElementById('form-buscador');

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
                <div class="contenedorListado" id="autor${autor.autorId}">
                    <p><b>Nombre:</b> ${autor.nombre}</p>
                    <p><b>Nacionalidad:</b> ${autor.nacionalidad}</p>
                    <p><b>Biografia:</b> ${autor.biografia}</p>
                    <button data-id="${autor.autorId}">Crear</button>
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
                <div class="contenedorListado" id="biblioteca${biblioteca.bibliotecaId}">
                    <p><b>Nombre:</b> ${biblioteca.nombre}</p>
                    <p><b>Ubicacion:</b> ${biblioteca.ubicacion}</p>
                    <button data-id="${biblioteca.bibliotecaId}">Crear</button>
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
                <div class="contenedorListado" id="libro${libro.libroId}">
                    <p><b>Titulo:</b> ${libro.titulo}</p>
                    <p><b>ISBN:</b> ${libro.ISBN}</p>
                    <button id="btn-crearLibro${libro.libroId}">Crear</button>
                    <button id="btn-verLibro${libro.libroId}">Ver</button>
                    <button id="btn-editarLibro${libro.libroId}">Editar</button>
                    <button id="btn-borrarLibro${libro.libroId}">Borrar</button>
                </div>
            `;
        });

        return resultado;
    }


    function buscarLibrosPorTitulo(titulo){
        // toLowerCase() devuelve un numero: 0 si empieza con la cadena, >0 si contiene la cadena, y -1 si no contiene la cadena
        return libros.filter(libro => libro.titulo.toLowerCase().indexOf(titulo.toLowerCase()) !== -1); // Si libro.titulo contiene la cadena de titulo devuelve ese libro
    }

    function buscarLibrosPorAutor(nombre){
        let idsAutores = autores // Saco los ids de los autores
            .filter(autor => autor.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1)
            .map(autor => autor.autorId);

        return libros.filter(libro => // Filtro los libros por id de autor
            idsAutores.indexOf(libro.autorId) !== -1
        );
    }

    function generarHTMLResultadoBuscador(resultados){
        let resultadoHTML = '';

        if(resultados){
            resultados.forEach(resultado => {
                resultadoHTML += `
                    <div class="contenedorListado" id="libro${resultado.libroId}">
                        <p><b>Titulo:</b> ${resultado.titulo}</p>
                        <p><b>ISBN:</b> ${resultado.ISBN}</p>
                        <button id="btn-crearLibro${resultado.libroId}">Crear</button>
                        <button id="btn-verLibro${resultado.libroId}">Ver</button>
                        <button id="btn-editarLibro${resultado.libroId}">Editar</button>
                        <button id="btn-borrarLibro${resultado.libroId}">Borrar</button>
                    </div>
                `;
            });
        }else{
            resultadoHTML += '<p>No se ha encontrado ningun libro</p>';
        }

        return resultadoHTML;
    }
console.log(buscarLibro(101));

    function buscarLibro(libroId){
        return libros.filter(libro => libro.libroId === libroId)[0]; // Devuelvo solo el objeto con [0] en vez de un array
    }

    function buscarAutor(autorId){
        return autores.filter(autor => autor.autorId === autorId)[0];
    }

    function buscarBiblioteca(bibliotecaId){
        return bibliotecas.filter(biblioteca => biblioteca.bibliotecaId === bibliotecaId)[0];
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

    formBuscador.addEventListener('submit', (e) => {
        e.preventDefault();

        let resultadoBuscador;
        const filtro = document.getElementById('nombre').value;
        const tipoLibro = document.getElementById('libro').checked;

        if(filtro){
            if(tipoLibro){
                resultadoBuscador = $biblio.buscarLibrosPorTitulo(filtro);
            }else{
                resultadoBuscador = $biblio.buscarLibrosPorAutor(filtro);
            }
            contenedorResultados.innerHTML = $biblio.generarHTMLResultadoBuscador(resultadoBuscador);
        }else{
            contenedorResultados.innerHTML = '';
        }

        formBuscador.reset();
    });

    
});