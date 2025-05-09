const App = (function () {
    class App {
        async cargarDatos(endpoint) {
            try {
                const peticion = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);

                if (!peticion) {
                    throw new Error(`Error HTTP: ${response.status}`)
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

export default App;