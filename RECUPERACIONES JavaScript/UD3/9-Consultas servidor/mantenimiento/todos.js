import * as utilidades from '../utilidades.js';

const filtro = document.getElementById('filtro');
const numElementos = document.getElementById('numElementos');
const paginador = document.getElementById('paginador');
const todos = JSON.parse(localStorage.getItem('todos'));

const paginaActual = 1;



console.log(todos[0]);

window.addEventListener('load', ()=>{
    let todosFiltrados = [...todos];
    utilidades.cargarListadoTodos(todosFiltrados);

    filtro.addEventListener('input', ()=>{
            todosFiltrados = todosFiltrados.filter(todo => todo.title.toLowerCase().startsWith(filtro.value.toLowerCase()));
            
            utilidades.cargarListadoTodos(todosFiltrados);
    });

    numElementos.addEventListener('change', ()=>{

    });
});

// function 