import App from '../index.js';

const form = document.getElementById('form')
const titulo = document.getElementById('titulo');
const completada = document.getElementById('completada');


window.addEventListener('load', () => {
    const url = new URLSearchParams(window.location.search);
    const idTarea = parseInt(url.get('id'));

    App.obtenerDatos('todos').then((tareas) => {
        const tarea = App.filtrarDatos(tareas, 'id', idTarea)[0];

        titulo.value = tarea.title;
        completada.checked = tarea.completed;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            tarea.title = titulo.value;
            tarea.completed = completada.checked;

            App.actualizarDatos(`todos/${tarea.id}`, tarea).then((peticion)=>{
                console.log(peticion);
            })
        });
    });

});