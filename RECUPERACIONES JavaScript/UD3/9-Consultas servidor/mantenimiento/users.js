import * as utilidades from '../utilidades.js';

const filtro = document.getElementById('filtro');
const elementosPorPagina = document.getElementById('numElementos');
const paginaActual = 1;

window.addEventListener('load', () => {
    const users = JSON.parse(localStorage.getItem('users'));

    let usuariosFiltrados = [...users];
    let usuariosPorPagina = elementosPorPagina.value === 'todos' ? usuariosFiltrados.length : parseInt(elementosPorPagina.value);

    listarConPaginador(paginaActual, usuariosPorPagina, elementosPorPagina);
    
    // Evento de filtro de users por nombre
    filtro.addEventListener('input', () => {
            usersFilatrados = users.filter(user => user.username.toLowerCase().startsWith(filtro.value));
            listarConPaginador(1, usuariosFiltrados, elementosPorPagina);
    });

    // Evento de listar users por X cantidad
    elementosPorPagina.addEventListener('change', () => {
        usuariosPorPagina = elementosPorPagina.value === 'todos' ? usuariosFiltrados.length : parseInt(elementosPorPagina.value);
        listarConPaginador(paginaActual, usuariosPorPagina, elementosPorPagina);
    });
});



function listarConPaginador(paginaActual, usuarios, elementosPorPagina) {
    const comienzo = (paginaActual - 1) * elementosPorPagina;
    const final = comienzo + elementosPorPagina;
    // Devuelvo una copia de una porcion del array con los valores indicados en el rango
    const elementosPaginados = usuarios.slice(comienzo, final);
    console.log(elementosPaginados);
    console.log(usuarios);

    utilidades.cargarListadoUsers(elementosPaginados);
    cargarPaginador(paginaActual, usuarios.length, elementosPorPagina);
}


function cargarPaginador(paginaActual, elementosTotales, elementosPorPagina) {
    const paginador = document.getElementById('paginador');
    paginador.innerHTML = '';

    const totalPaginas = Math.ceil(elementosTotales / elementosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('class', 'activo');
        btn.classList.add('btn-paginador');

        btn.innerHTML = i;

        if (i === paginaActual) {
            btn.classList.remove('activo');
            btn.classList.add('inactivo');
        }

        paginador.appendChild(btn);
    }
}