(function () {
    class App {
        cargarDatos(endpoint) {
            const peticion = fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);

            peticion.then(response => response.json())
                .then(data => console.log(data))
                .catch((error) => console.error("Error en la solicitud:", error.message))
        }
    }
})();
















// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json"
//     ,
//     },
//     body: JSON.stringify({ nombre: "Juan", edad: 30 })
// })
// .then((response) => response.json())
// .then((data) => console.log("Datos enviados correctamente:", data))
// .catch((error) => console.error("Error al enviar los datos:",
// error));