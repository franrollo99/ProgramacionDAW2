const App = (function () {
    async function obtenerDatos(endpoint){
        const peticion = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);

        return peticion.json();
    }

    return {
        obtenerDatos,
    }
})();

let listado = document.getElementById('listarUsuarios');
const filtro = document.getElementById('filtro');

let usuariosFiltrados;

window.addEventListener('load', ()=>{
    // Obtengo todos los usuarios
    App.obtenerDatos('/users').then((usuarios)=>{
        renderizarListado(usuarios);

        filtro.addEventListener('input', ()=>{
            if(filtro){
                // .trim() para quitar espacios en blanco al principio y al final
                usuariosFiltrados = usuarios.filter(usuario => usuario.username.toLowerCase().startsWith(filtro.value.trim().toLowerCase()));
                renderizarListado(usuariosFiltrados);
            }
        });

        listado.addEventListener('click', (e)=>{
            // Capturo el evento cuando el click sea en el elemento contenedor con clase fila
            if(e.target.closest('.fila')){
                const filaSeleccionada = e.target.closest('.fila');
                const filas = document.querySelectorAll('.fila');

                for(let fila of filas){
                    if(fila.classList.contains('seleccionada') && fila !== filaSeleccionada)
                        fila.classList.remove('seleccionada');
                }

                filaSeleccionada.classList.toggle('seleccionada');
            }
        });
    });
});

function renderizarListado(usuarios){
    // Primero vacio el listado, porque sino no va a parar de añadir usuarios
    listado.innerHTML = '';

    for(let usuario of usuarios){
        const fila = document.createElement('div');
        fila.classList.add('fila');
        fila.setAttribute('data-id', usuario.id);

        fila.innerHTML = `
            <div>${usuario.username}</div>
            <div>${usuario.email}</div>
            <div>${usuario.phone}</div>
        `;

        listado.appendChild(fila);
    }
}