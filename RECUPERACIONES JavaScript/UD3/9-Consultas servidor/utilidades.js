// Metodo para guardar los datos de la API en localStorage
function guardarLocalStorage(datos, entidades) {
    for (let n = 0; n < datos.length; n++) {
        localStorage.setItem(entidades[n], JSON.stringify(datos[n]));
    }
}

// Metodo para cargar las tarjetas de cada entidad de la API
function cargarTarjetas(nombre, cantidad) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.setAttribute('id', nombre);

    tarjeta.innerHTML = `
        <p>Nombre: <b>${nombre.toUpperCase()}</b></p>
        <p>Nº elementos: <b>${cantidad}</b></p>
    `;

    return tarjeta;
}

function cargarListadoUsers(usuarios) {
    const listado = document.getElementById('listado');
    listado.innerHTML = '';

    for(let usuario of usuarios){
        const filaListado = document.createElement('div');
        filaListado.classList.add('fila');
        filaListado.setAttribute('data-id', usuario.id);
    
        filaListado.innerHTML += `
            <div>${usuario.username}</div>
            <div>${usuario.name}</div>
            <div>${usuario.email}</div>
            <div>${usuario.phone}</div>
            <div>${usuario.company.name}</div>
            <div>${usuario.website}</div>
            <div class="acciones">
                <a href="./todos.html?id=${usuario.id}">Pendientes</a>
                <a href="./albums.html?id=${usuario.id}">Albumes</a>
                <a href="./posts.html?id=${usuario.id}">Post</a>
            </div>
        `;

        listado.appendChild(filaListado);
    }
}

function cargarListadoTareas(tareas, usuarios){
    const listado = document.getElementById('listado');
    listado.innerHTML = '';
    let nombreUsuario;

    for(let tarea of tareas){
        // Recorro todos los usuarios para sustituir el userId por el nombre del autor
        for(let usuario of usuarios){
            if(usuario.id == tarea.userId) nombreUsuario = usuario.username;
        }

        const filaListado = document.createElement('div');
        filaListado.classList.add('fila');
        filaListado.setAttribute('data-id', tarea.id);
    
        // Cambiar userId por nombre de autor
        filaListado.innerHTML += `
            <div>${nombreUsuario}</div>
            <div>${tarea.title}</div>
            <div>${tarea.completed ? 'Si' : 'No'}</div>
        `;

        listado.appendChild(filaListado);
    }
}


export {guardarLocalStorage, cargarTarjetas, cargarListadoUsers, cargarListadoTareas};