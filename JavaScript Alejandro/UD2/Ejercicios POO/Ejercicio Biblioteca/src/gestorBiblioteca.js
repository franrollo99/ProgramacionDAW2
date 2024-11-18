import datos from "./datos.js";
import { Autor } from "./autor.js";
import { Biblioteca } from "./biblioteca.js";
import { Libro } from "./libro.js";

const gestorBiblioteca = (function() {
    // Colecciones privadas de datos
    let autores = datos.autores.map(dato => new Autor(dato.autorId, dato.nombre, dato.nacionalidad, dato.biografia, dato.libros));
    let bibliotecas = datos.bibliotecas.map(dato => new Biblioteca(dato.bibliotecaId, dato.nombre, dato.ubicacion));
    let libros = datos.libros.map(dato => new Libro(dato.libroId, dato.titulo, dato.ISBN, dato.autorId, dato.bibliotecaId, dato.prestamos));

    // Método para generar el listado de autores
    function generarHTMLListadoAutores() {
        return autores.map(autor => {
            return `
                <div class="autor">
                    <h3>${autor.nombre}</h3>
                    <p><strong>Nacionalidad:</strong> ${autor.nacionalidad}</p>
                    <button class="btn-ver" data-autor-id="${autor.autorId}">Ver</button>
                    <button class="btn-editar" data-autor-id="${autor.autorId}">Editar</button>
                    <button class="btn-borrar" data-autor-id="${autor.autorId}">Borrar</button>
                </div>
            `;
        }).join("");
    }

    // Método para generar el listado de bibliotecas
    function generarHTMLListadoBibliotecas() {
        return bibliotecas.map(biblioteca => {
            return `
                <div class="biblioteca">
                    <h3>${biblioteca.nombre}</h3>
                    <p><strong>Ubicación:</strong> ${biblioteca.ubicacion}</p>
                    <button class="btn-ver" data-biblioteca-id="${biblioteca.bibliotecaId}">Ver</button>
                    <button class="btn-editar" data-biblioteca-id="${biblioteca.bibliotecaId}">Editar</button>
                    <button class="btn-borrar" data-biblioteca-id="${biblioteca.bibliotecaId}">Borrar</button>
                </div>
            `;
        }).join("");
    }

    // Método para generar el listado de libros
    function generarHTMLListadoLibros() {
        return libros.map(libro => {
            const autor = autores.find(a => a.autorId === libro.autorId);
            const biblioteca = bibliotecas.find(b => b.bibliotecaId === libro.bibliotecaId);
            return `
                <div class="libro">
                    <h3>${libro.titulo}</h3>
                    <p><strong>Autor:</strong> ${autor ? autor.nombre : 'Desconocido'}</p>
                    <p><strong>Biblioteca:</strong> ${biblioteca ? biblioteca.nombre : 'Desconocida'}</p>
                    <button class="btn-ver" data-libro-id="${libro.libroId}">Ver</button>
                    <button class="btn-editar" data-libro-id="${libro.libroId}">Editar</button>
                    <button class="btn-borrar" data-libro-id="${libro.libroId}">Borrar</button>
                </div>
            `;
        }).join("");
    }

    // Métodos para buscar libros o autores
    function buscarLibrosPorTitulo(titulo) {
        return libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }

    function buscarLibrosPorAutor(autor) {
        return libros.filter(libro => {
            const autorEncontrado = autores.find(a => a.nombre.toLowerCase().includes(autor.toLowerCase()));
            return autorEncontrado && libro.autorId === autorEncontrado.autorId;
        });
    }

    // Generar el HTML de los resultados de la búsqueda
    function generarHTMLResultadoBuscador(criterio) {
        const librosEncontrados = buscarLibrosPorTitulo(criterio);
        const autoresEncontrados = autores.filter(autor => autor.nombre.toLowerCase().includes(criterio.toLowerCase()));

        let resultadoLibrosHTML = librosEncontrados.map(libro => {
            const autor = autores.find(a => a.autorId === libro.autorId);
            return `
                <div class="libro">
                    <h3>${libro.titulo}</h3>
                    <p><strong>Autor:</strong> ${autor ? autor.nombre : 'Desconocido'}</p>
                </div>
            `;
        }).join("");

        let resultadoAutoresHTML = autoresEncontrados.map(autor => {
            return `
                <div class="autor">
                    <h3>${autor.nombre}</h3>
                    <p><strong>Nacionalidad:</strong> ${autor.nacionalidad}</p>
                </div>
            `;
        }).join("");

        return resultadoLibrosHTML + resultadoAutoresHTML;
    }

    // Métodos para buscar por ID
    function buscarLibro(libroId) {
        return libros.find(libro => libro.libroId === libroId);
    }

    function buscarAutor(autorId) {
        return autores.find(autor => autor.autorId === autorId);
    }

    function buscarBiblioteca(bibliotecaId) {
        return bibliotecas.find(biblioteca => biblioteca.bibliotecaId === bibliotecaId);
    }

    // Métodos para crear
    function crearLibro(libro) {
        libro.libroId = libros.length + 1;  // ID incremental
        libros.push(libro);
    }

    function crearAutor(autor) {
        autor.autorId = autores.length + 1;  // ID incremental
        autores.push(autor);
    }

    function crearBiblioteca(biblioteca) {
        biblioteca.bibliotecaId = bibliotecas.length + 1;  // ID incremental
        bibliotecas.push(biblioteca);
    }

    // Métodos para borrar
    function borrarLibro(libroId) {
        libros = libros.filter(libro => libro.libroId !== libroId);
    }

    function borrarAutor(autorId) {
        autores = autores.filter(autor => autor.autorId !== autorId);
    }

    function borrarBiblioteca(bibliotecaId) {
        bibliotecas = bibliotecas.filter(biblioteca => biblioteca.bibliotecaId !== bibliotecaId);
    }

    // Métodos para gestionar préstamos
    function devolverPrestamo(libro) {
        const libroEncontrado = buscarLibro(libro.libroId);
        if (libroEncontrado && libroEncontrado.prestamos.length > 0) {
            libroEncontrado.prestamos.pop();  // Elimina el préstamo
        }
    }

    function crearPrestamo(libro) {
        const libroEncontrado = buscarLibro(libro.libroId);
        if (libroEncontrado) {
            libroEncontrado.prestamos.push({
                fechaPrestamo: new Date().toISOString(),
            });
        }
    }

    // Devolver el objeto con los métodos públicos
    return {
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
        crearPrestamo
    };

})();

// Eventos y carga dinámica de formularios
document.getElementById("btn-autores").addEventListener("click", function() {
    document.getElementById("app").innerHTML = gestorBiblioteca.generarHTMLListadoAutores();
});

document.getElementById("btn-libros").addEventListener("click", function() {
    document.getElementById("app").innerHTML = gestorBiblioteca.generarHTMLListadoLibros();
});

document.getElementById("btn-bibliotecas").addEventListener("click", function() {
    document.getElementById("app").innerHTML = gestorBiblioteca.generarHTMLListadoBibliotecas();
});

// Eventos para el buscador
document.getElementById("btn-buscar").addEventListener("click", function() {
    const criterio = document.getElementById("buscador").value;
    const resultados = gestorBiblioteca.generarHTMLResultadoBuscador(criterio);
    document.getElementById("app").innerHTML = resultados;
});



// Un único evento delegado para manejar los clics en #app
document.getElementById("app").addEventListener("click", function(event) {
    // Ver autor
    if (event.target.classList.contains("btn-ver")) {
        const autorId = event.target.dataset.autorId;
        if (autorId) {
            const autor = gestorBiblioteca.buscarAutor(autorId);
            alert(`Ver autor: ${autor.nombre}\nBiografía: ${autor.biografia}`);
        }
    }

    // Editar autor
    if (event.target.classList.contains("btn-editar")) {
        const autorId = event.target.dataset.autorId;
        if (autorId) {
            const autor = gestorBiblioteca.buscarAutor(autorId);
            alert(`Editar autor: ${autor.nombre}`);
            // Aquí puedes agregar el código para abrir un formulario de edición.
        }
    }

    // Borrar autor
    if (event.target.classList.contains("btn-borrar")) {
        const autorId = event.target.dataset.autorId;
        if (autorId) {
            gestorBiblioteca.borrarAutor(autorId);
            alert('Autor borrado');
            // Recargar la lista de autores
            document.getElementById("app").innerHTML = gestorBiblioteca.generarHTMLListadoAutores();
        }
    }

    // Ver libro
    if (event.target.classList.contains("btn-ver")) {
        const libroId = event.target.dataset.libroId;
        if (libroId) {
            const libro = gestorBiblioteca.buscarLibro(libroId);
            alert(`Ver libro: ${libro.titulo}\nISBN: ${libro.ISBN}`);
        }
    }

    // Editar libro
    if (event.target.classList.contains("btn-editar")) {
        const libroId = event.target.dataset.libroId;
        if (libroId) {
            const libro = gestorBiblioteca.buscarLibro(libroId);
            alert(`Editar libro: ${libro.titulo}`);
            // Aquí puedes agregar el código para abrir un formulario de edición.
        }
    }

    // Borrar libro
    if (event.target.classList.contains("btn-borrar")) {
        const libroId = event.target.dataset.libroId;
        if (libroId) {
            gestorBiblioteca.borrarLibro(libroId);
            alert('Libro borrado');
            // Recargar la lista de libros
            document.getElementById("app").innerHTML = gestorBiblioteca.generarHTMLListadoLibros();
        }
    }

    // Ver biblioteca
    if (event.target.classList.contains("btn-ver")) {
        const bibliotecaId = event.target.dataset.bibliotecaId;
        if (bibliotecaId) {
            const biblioteca = gestorBiblioteca.buscarBiblioteca(bibliotecaId);
            alert(`Ver biblioteca: ${biblioteca.nombre}\nUbicación: ${biblioteca.ubicacion}`);
        }
    }

    // Editar biblioteca
    if (event.target.classList.contains("btn-editar")) {
        const bibliotecaId = event.target.dataset.bibliotecaId;
        if (bibliotecaId) {
            const biblioteca = gestorBiblioteca.buscarBiblioteca(bibliotecaId);
            alert(`Editar biblioteca: ${biblioteca.nombre}`);
            // Aquí puedes agregar el código para abrir un formulario de edición.
        }
    }

    // Borrar biblioteca
    if (event.target.classList.contains("btn-borrar")) {
        const bibliotecaId = event.target.dataset.bibliotecaId;
        if (bibliotecaId) {
            gestorBiblioteca.borrarBiblioteca(bibliotecaId);
            alert('Biblioteca borrada');
            // Recargar la lista de bibliotecas
            document.getElementById("app").innerHTML = gestorBiblioteca.generarHTMLListadoBibliotecas();
        }
    }
});



export { gestorBiblioteca };
