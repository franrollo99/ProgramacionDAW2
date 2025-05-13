import * as utilidades from './utilidades.js';

const App = (function () {
    class App {
        // Una funcion async siempre devuelve una promesa
        async cargarDatos(endpoint) {
            try {
                const peticion = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);

                if (!peticion.ok) {
                    throw new Error(`Error HTTP: ${peticion.status}`)
                }

                const data = await peticion.json();
                return data;
            } catch (error) {
                console.error("Error en la solicitud:", error.message);
            }
        }
    }

    return new App();

})();

window.addEventListener('load', async () => {
    if(!localStorage.getItem('users')){
        const nombreEntidades = ['users', 'todos', 'posts', 'comments', 'albums', 'photos'];
        // Si fuera una sola promesa con await App.cargarDatos('ejemplo') tendriamos los datos
        // Array de promesas
        const promesas = nombreEntidades.map(e => App.cargarDatos(e));
        // Resolvemos todas las promesas en paralelo en vez de en serie
        const resultados = await Promise.all(promesas);
        
        utilidades.guardarLocalStorage(resultados, entidades);
    }

    // Guardamos los datos de cada entidad en una variable
    const users = JSON.parse(localStorage.getItem('users'));
    const todos = JSON.parse(localStorage.getItem('todos'));
    const posts = JSON.parse(localStorage.getItem('posts'));
    const comments = JSON.parse(localStorage.getItem('comments'));
    const albums = JSON.parse(localStorage.getItem('albums'));
    const photos = JSON.parse(localStorage.getItem('photos'));

    // Codigo para generar las tarjetas
    const contenedorApp = document.getElementById('app');
    const contenedorTarjetas = document.createElement('div');

    contenedorTarjetas.classList.add('contenedorTarjetas');
    contenedorApp.innerHTML = '<h1>Listado de entidades</h1>';

    // Creamos un array de entidades con el nombre y los datos de cada entidad
    const entidades = [
        { nombre: 'users', datos: users },
        { nombre: 'todos', datos: todos },
        { nombre: 'posts', datos: posts },
        { nombre: 'comments', datos: comments },
        { nombre: 'albums', datos: albums },
        { nombre: 'photos', datos: photos }
    ];

    for(let entidad of entidades) {
        const tarjeta = utilidades.cargarTarjetas(entidad.nombre, entidad.datos.length)

        contenedorTarjetas.appendChild(tarjeta);
        contenedorApp.appendChild(contenedorTarjetas);
    }

    // Evento para acceder a las paginas de mantenimiento de cada entidad
    contenedorTarjetas.addEventListener('click', (e)=>{
        if(e.target.closest('.tarjeta')){
            const tarjeta = e.target.closest('.tarjeta').id;
            window.location.href = `./mantenimiento/${tarjeta}.html`;
        }
    });
});

export default App;