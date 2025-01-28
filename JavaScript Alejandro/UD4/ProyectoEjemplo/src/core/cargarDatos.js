
export async function guardarDatos(lista) { 
    localStorage.setItem('listaTareas', JSON.stringify(lista));
}

// funcion cargarDatos(){}