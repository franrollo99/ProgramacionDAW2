const App = (function () {
    class App {
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
    const entidades = ['users', 'todos', 'posts', 'comments', 'albums', 'photos'];
    const promesas = entidades.map(e => App.cargarDatos(e));
    const resultados = await Promise.all(promesas);

    console.log(resultados);

    for(let entidad of entidades){

    }
});