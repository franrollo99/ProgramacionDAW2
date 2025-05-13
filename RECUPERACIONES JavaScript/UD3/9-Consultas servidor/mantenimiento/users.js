import * as utilidades from '../utilidades.js';

const filtro = document.getElementById('filtro');

window.addEventListener('load', ()=>{
    const users = JSON.parse(localStorage.getItem('users'));

    utilidades.cargarListadoUsers(users);

    filtro.addEventListener('input', ()=>{
        if(filtro){
            let usersFilatrados = users.filter(user => user.username.toLowerCase().startsWith(filtro.value));

            utilidades.cargarListadoUsers(usersFilatrados);
        }
    });

});