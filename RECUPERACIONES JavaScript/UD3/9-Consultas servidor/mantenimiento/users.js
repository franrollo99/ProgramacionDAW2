import App from '../index.js';
import * as utilidades from '../utilidades.js';

const filtro = document.getElementById('filtro');
const elementosPorPagina = document.getElementById('numElementos');
const listado = document.getElementById('listado');
const paginador = document.getElementById('paginador');

let paginaActual = 1;
let totalUsuarios = 0;
let textoFiltro = '';

window.addEventListener('load', () => {
    actualizarListado();

    filtro.addEventListener('input', () => {
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
            window.location.href = `../propiedades/user.html?id=${id}`;
        }
    });
});

function actualizarListado() {
    App.obtenerDatos('users').then(todos => {
        let usuariosFiltrados;

        // Compruebo si hay texto en el filtro para mostrar todos los users o filtrarlos
        if (textoFiltro) {
            usuariosFiltrados = App.filtrarDatos(todos, 'username', textoFiltro);
        } else {
            usuariosFiltrados = todos;
        }

        totalUsuarios = usuariosFiltrados.length;

        let porPagina;
        // Calculo cuantos elementos muestro por pagina
        if (elementosPorPagina.value === 'todos') {
            porPagina = usuariosFiltrados.length;
        } else {
            porPagina = parseInt(elementosPorPagina.value);
        }

        const datosPagina = App.obtenerArrayPaginado(usuariosFiltrados, porPagina, paginaActual);

        utilidades.cargarListadoUsers(datosPagina);
        cargarPaginador(totalUsuarios, porPagina);
    });
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
