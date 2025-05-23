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

    function generarHTMLListadoAutores(){
        let resultado = '';

        autores.forEach(autor => {
            resultado += `
                <div class="contenedorListado" data-id="${autor.autorId}">
                    <p><b>Nombre:</b> ${autor.nombre}</p>
                    <p><b>Nacionalidad:</b> ${autor.nacionalidad}</p>
                    <p><b>Biografia:</b> ${autor.biografia}</p>
                    <button data-action="crear-autor" data-id="${autor.autorId}">Crear</button>
                    <button data-action="ver-autor" data-id="${autor.autorId}">Ver</button>
                    <button data-action="editar-autor" data-id="${autor.autorId}">Editar</button>
                    <button data-action="borrar-autor" data-id="${autor.autorId}">Borrar</button>
                </div>
            `;
        });

        return resultado;
    }

    function generarHTMLListadoBibliotecas(){
        let resultado = '';

        bibliotecas.forEach(biblioteca => {
            resultado += `
                <div class="contenedorListado" data-id="${biblioteca.bibliotecaId}">
                    <p><b>Nombre:</b> ${biblioteca.nombre}</p>
                    <p><b>Ubicacion:</b> ${biblioteca.ubicacion}</p>
                    <button data-action="crear-biblioteca" data-id="${biblioteca.bibliotecaId}">Crear</button>
                    <button data-action="ver-biblioteca" data-id="${biblioteca.bibliotecaId}">Ver</button>
                    <button data-action="editar-biblioteca" data-id="${biblioteca.bibliotecaId}">Editar</button>
                    <button data-action="borrar-biblioteca" data-id="${biblioteca.bibliotecaId}">Borrar</button>
                </div>
            `;
        });

        return resultado;
    }

    function generarHTMLListadoLibros(){
        let resultado = '';

        libros.forEach(libro => {
            const autor = autores.filter(a => a.autorId === libro.autorId)[0];
            const biblioteca = bibliotecas.filter(b => b.bibliotecaId === libro.bibliotecaId)[0];

            resultado += `
                <div class="contenedorListado" data-id="${libro.libroId}">
                    <p><b>Titulo:</b> ${libro.titulo}</p>
                    <p><b>Autor:</b> ${autor.nombre}</p>
                    <p><b>ISBN:</b> ${libro.ISBN}</p>
                    <p><b>Biblioteca:</b> ${biblioteca.nombre}</p>
                    <button data-action="crear-libro" data-id="${libro.libroId}">Crear</button>
                    <button data-action="ver-libro" data-id="${libro.libroId}">Ver</button>
                    <button data-action="editar-libro" data-id="${libro.libroId}">Editar</button>
                    <button data-action="borrar-libro" data-id="${libro.libroId}">Borrar</button>
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
        let resultado = '';

        if(resultados){
            resultados.forEach(libro => {
                const autor = autores.filter(a => a.autorId === libro.autorId)[0];
                const biblioteca = bibliotecas.filter(b => b.bibliotecaId === libro.bibliotecaId)[0];

                resultado += `
                    <div class="contenedorListado" data-id="${libro.libroId}">
                    <p><b>Titulo:</b> ${libro.titulo}</p>
                    <p><b>Autor:</b> ${autor.nombre}</p>
                    <p><b>ISBN:</b> ${libro.ISBN}</p>
                    <p><b>Biblioteca:</b> ${biblioteca.nombre}</p>
                    <button data-action="crear-libro" data-id="${libro.libroId}">Crear</button>
                    <button data-action="ver-libro" data-id="${libro.libroId}">Ver</button>
                    <button data-action="editar-libro" data-id="${libro.libroId}">Editar</button>
                    <button data-action="borrar-libro" data-id="${libro.libroId}">Borrar</button>
                </div>
                `;
            });
        }else{
            resultado += '<p>No se ha encontrado ningun libro</p>';
        }

        return resultado;
    }

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
        libros.push(new Libro(libro.libroId, libro.titulo, libro.ISBN, libro.autorId, libro.bibliotecaId));

        return null;
    }

    function crearAutor(autor){
        autores.push(new Autor(autor.autorId, autor.nombre, autor.nacionalidad, autor.biografia, autor.libros));

        return null;
    }

    function crearBiblioteca(biblioteca){
        bibliotecas.push(new Biblioteca(biblioteca.bibliotecaId, biblioteca.nombre, biblioteca.ubicacion));

        return null;
    }

    function borrarLibro(libroId){
        libros = libros.filter(libro => libro.libroId !== libroId);

        return generarHTMLListadoLibros();
    }

    function borrarAutor(autorId){
        autores = autores.filter(autor => autor.autorId !== autorId);
        
        return generarHTMLListadoAutores();
    }

    function borrarBiblioteca(bibliotecaId){
        bibliotecas = bibliotecas.filter(biblioteca => biblioteca.bibliotecaId !==bibliotecaId);

        return generarHTMLListadoBibliotecas();
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

    // EVENTOS DE LISTADO
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

    // EVENTOS DE FILTRADO
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

    // EVENTOS DE ACTION EN LOS LISTADOS
    contenedorResultados.addEventListener('click', (e) => {
        const disparador = e.target; // Capturo el elemento donde se origino el evento click

        if(disparador.dataset.action){
            const id = parseInt(disparador.dataset.id);

            const libro = $biblio.buscarLibro(id);
            const autor = $biblio.buscarAutor(id);
            const biblioteca = $biblio.buscarBiblioteca(id);

            console.log(autor);

            if(libro || autor || biblioteca){
                switch (disparador.dataset.action){
                    // METODOS LIBROS
                    case 'crear-libro':
                        contenedorResultados.innerHTML = libro.generarHTMLCreacion();
                        break;

                    case 'ver-libro':
                        contenedorResultados.innerHTML = libro.generarHTMLPropiedades();
                        break;

                    case 'editar-libro':
                        contenedorResultados.innerHTML = libro.generarHTMLEdicion();
                        break;

                    case 'borrar-libro':
                        contenedorResultados.innerHTML = $biblio.borrarLibro(id);
                        break;



                    // METODOS AUTORES
                    case 'crear-autor':
                        contenedorResultados.innerHTML = autor.generarHTMLCreacion();
                        break;

                    case 'ver-autor':
                        contenedorResultados.innerHTML = autor.generarHTMLPropiedades();
                        break;

                    case 'editar-autor':
                        contenedorResultados.innerHTML = autor.generarHTMLEdicion();

                        const formEditorAutor = document.getElementById('form-editarAutor');

                        formEditorAutor.addEventListener('submit', (e) => {
                            e.preventDefault();

                            const nombre = document.getElementById('nombre').value;
                            const nacionalidad = document.getElementById('nacionalidad').value;
                            const biografia = document.getElementById('biografia').value;
                    
                            autor.nombre = nombre;
                        });
                        break;

                    case 'borrar-autor':
                        contenedorResultados.innerHTML = $biblio.borrarAutor(id);
                        break;



                    // METODOS BIBLIOTECA
                    case 'crear-biblioteca':
                        contenedorResultados.innerHTML = biblioteca.generarHTMLCreacion();
                        break;

                    case 'ver-biblioteca':
                        contenedorResultados.innerHTML = biblioteca.generarHTMLPropiedades();
                        break;

                    case 'editar-biblioteca':
                        contenedorResultados.innerHTML = biblioteca.generarHTMLEdicion();
                        break;

                    case 'borrar-biblioteca':
                        contenedorResultados.innerHTML = $biblio.borrarBiblioteca(id);
                        break;
                }
            }
        }
    });


    
});