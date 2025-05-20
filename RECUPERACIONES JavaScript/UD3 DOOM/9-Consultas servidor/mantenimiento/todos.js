import App from '../index.js';
import * as utilidades from '../utilidades.js';

const filtro = document.getElementById('filtro');
const elementosPorPagina = document.getElementById('numElementos');
const listado = document.getElementById('listado');
const paginador = document.getElementById('paginador');

let paginaActual = 1;
let totalTareas = 0;
let textoFiltro = '';
let idUsuario;

window.addEventListener('load', () => {
    const url = new URLSearchParams(window.location.search);
    idUsuario = parseInt(url.get('id'));

    // Cargo el listado al entrar a la pagina
    actualizarListado();

    filtro.addEventListener('input', () => {
        // Cojo el valor del filtro, quito los espacios en blanco y lo convierto a minusculas
        textoFiltro = filtro.value.trim().toLowerCase();
        paginaActual = 1;
        actualizarListado();
    });

    elementosPorPagina.addEventListener('change', () => {
        paginaActual = 1;
        actualizarListado();
    });

    listado.addEventListener('click', (e) => {
        const fila = e.target.closest('.fila');
        if (fila) {
            const id = fila.dataset.id;
            window.location.href = `../propiedades/todo.html?id=${id}`;
        }
    });
});

function actualizarListado() {
    App.obtenerDatos('users').then(users => {
        App.obtenerDatos('todos').then(tareas => {
            let tareasFiltradas;
    
            // Si le paso id por la url que solo muestre sus tareas pendientes
            if(idUsuario){
                tareasFiltradas = App.filtrarDatos(tareas, 'userId', idUsuario);
    
                if (textoFiltro) {
                    tareasFiltradas = App.filtrarDatos(tareasFiltradas, 'title', textoFiltro);
                } else {
                    tareasFiltradas = tareasFiltradas;
                }
            }else{
                // Compruebo si hay texto en el filtro para mostrar las las tareas o filtrarlas
                if (textoFiltro) {
                    tareasFiltradas = App.filtrarDatos(tareas, 'title', textoFiltro);
                } else {
                    tareasFiltradas = tareas;
                }
            }
    
    
            totalTareas = tareasFiltradas.length;
    
            let porPagina;
            // Calculo cuantos elementos muestro por pagina
            if (elementosPorPagina.value === 'todos') {
                porPagina = tareasFiltradas.length;
            } else {
                porPagina = parseInt(elementosPorPagina.value);
            }
    
            const datosPagina = App.obtenerArrayPaginado(tareasFiltradas, porPagina, paginaActual);
    
            utilidades.cargarListadoTareas(datosPagina, users);
            cargarPaginador(totalTareas, porPagina);
        });
    })
}

function cargarPaginador(total, porPagina) {
    paginador.innerHTML = '';
    if (elementosPorPagina.value === 'todos') return;

    const totalPaginas = Math.ceil(total / porPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('btn-paginador');
        if (i === paginaActual) {
            btn.classList.add('inactivo');
            btn.disabled = true;
        } else {
            btn.classList.add('activo');
            btn.addEventListener('click', () => {
                paginaActual = i;
                actualizarListado();
            });
        }
        paginador.appendChild(btn);
    }
}
