import * as utilidades from './utilidades.js';

const App = (function () {
        // Una funcion async siempre devuelve una promesa
        async function descargarDatos(endpoint) {
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

        async function actualizarDatos(endpoint, datos) {
            try{
                const peticion = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(datos),
                });

                const data = await peticion.json();

                return data;
            } catch(error){
                console.error("Error en la solicitud:", error.message);
            }
        }

        function obtenerArrayPaginado(array, elementosPorPagina, paginaActual){
            const comienzo = (paginaActual - 1) * elementosPorPagina;
            const final = comienzo + elementosPorPagina;

            // Devuelvo una copia de una porcion del array con los valores indicados en el rango
            return array.slice(comienzo, final);
        }

        return {
            descargarDatos,
            actualizarDatos,
            obtenerArrayPaginado,
        };
})();

window.addEventListener('load', async () => {
    if(!localStorage.getItem('users')){
        const nombreEntidades = ['users', 'todos', 'posts', 'comments', 'albums', 'photos'];
        // Si fuera una sola promesa con await descargarDatos('ejemplo') tendriamos los datos
        // Array de promesas
        const promesas = nombreEntidades.map(e => descargarDatos(e));
        // Resolvemos todas las promesas en paralelo en vez de en serie
        const resultados = await Promise.all(promesas);

        // Cambiar y hacerlo con then para resolver las promesas en funcion de la demanda
        // Promise.all(promesas).then(
        //     (resultado)=>{})
        
        utilidades.guardarLocalStorage(resultados, nombreEntidades);
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
    if(contenedorApp){
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
    }
});

export default App;