import App from './app.js';

const contenedorApp = document.getElementById('app');

async function cargarTarjetas(){
    const users = await App.cargarDatos('users');
    // crear contenedor tarjetas y meter dentro todas, luego ponerla que es hija del principal
    let resultado = '';
    
    // for(let user of users){
        resultado = `
            <div class="tarjeta" id="usuarios">
                <p>Nombre: Usuarios</p>
                <p>Nº elementos: ${users.length}</p>
            </div>
        `;
    // }

    contenedorApp.innerHTML = resultado;
}

cargarTarjetas();