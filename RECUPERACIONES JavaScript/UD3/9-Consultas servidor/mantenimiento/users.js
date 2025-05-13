import App from '../index.js';
import * as utilidades from '../utilidades.js';

const filtro = document.getElementById('filtro');
const elementosPorPagina = document.getElementById('numElementos');
const paginaActual = 1;
const listado = document.getElementById('listado');

window.addEventListener('load', () => {
    const users = JSON.parse(localStorage.getItem('users'));

    let usuariosFiltrados = [...users];
    let usuariosPorPagina = elementosPorPagina.value === 'todos' ? usuariosFiltrados.length : parseInt(elementosPorPagina.value);

    listarConPaginador(paginaActual, usuariosFiltrados, usuariosPorPagina);


    // Evento de filtro de users por nombre
    filtro.addEventListener('input', () => {
        usuariosFiltrados = users.filter(user => user.username.toLowerCase().startsWith(filtro.value.toLowerCase()));
        listarConPaginador(1, usuariosFiltrados, usuariosPorPagina);
    });


    // Evento de listar users por X cantidad
    elementosPorPagina.addEventListener('change', () => {
        usuariosPorPagina = elementosPorPagina.value === 'todos' ? usuariosFiltrados.length : parseInt(elementosPorPagina.value);
        listarConPaginador(1, usuariosFiltrados, usuariosPorPagina);
    });

    // Mandar datos al formulario
    listado.addEventListener('click', (e) => {
        const filaSeleccionada = e.target.closest('.fila');
        if(filaSeleccionada){
            const id = filaSeleccionada.dataset.id;
            const urlPropiedadesUser = `../propiedades/user.html?id=${id}`;
            window.location.href = urlPropiedadesUser;
        }
    });
});


// Funcion para listar los usuarios en funcion de la pagina
function listarConPaginador(paginaActual, usuarios, elementosPorPagina) {
    const elementosPaginados = App.obtenerArrayPaginado(usuarios, elementosPorPagina, paginaActual);

    utilidades.cargarListadoUsers(elementosPaginados);
    cargarPaginador(paginaActual, usuarios.length, elementosPorPagina, usuarios);
}

// Cargo el paginador en funcion del numero total de elementos totales y elementos por pagina
function cargarPaginador(paginaActual, elementosTotales, elementosPorPagina, usuarios) {
    const paginador = document.getElementById('paginador');
    paginador.innerHTML = '';

    const totalPaginas = Math.ceil(elementosTotales / elementosPorPagina);

    for (let pag = 1; pag <= totalPaginas; pag++) {
        const btn = document.createElement('button');
        btn.innerHTML = pag;

        btn.classList.add('btn-paginador');

        if (pag === paginaActual) {
            btn.classList.add('inactivo');
        } else {
            btn.classList.add('activo');

            btn.addEventListener('click', () => {
                listarConPaginador(pag, usuarios, elementosPorPagina);
            });
        }

        paginador.appendChild(btn);
    }
}