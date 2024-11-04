let listaDeTareas=[];

function agregarTarea(tarea){
    listaDeTareas.push(tarea);
    mostrarTareas();
}

function mostrarTareas(){
    let contenedor=document.getElementById("tareas");
    contenedor.innerHTML=""; // Limpia el contenedor antes de mostrarlo

    for(let indice in listaDeTareas){
        contenedor.innerHTML+=`${indice}: ${listaDeTareas[indice]} <br>`;
    }
}

function eliminarTarea(indice){
    delete listaDeTareas[indice];
    mostrarTareas();
}

// Usamos DOMContenLoaded para asegurarnos de que solo se ejecute el codigo cuando este listo el DOM
document.addEventListener("DOMContentLoaded", function(){
    // Asigna el evento al boton de agregar tarea
    document.getElementById("agregarTarea").addEventListener("click", function(){
        const nuevaTarea=document.getElementById("nuevaTarea").value;
        agregarTarea(nuevaTarea);
        document.getElementById("nuevaTarea").value='';
    });

    document.getElementById("eliminarTarea").addEventListener("click", function(){
        const indice=parseInt(document.getElementById("eliminarIndice").value); // Convertimos a entero el valor del input ya que se obtiene como cadena
        eliminarTarea(indice);
        document.getElementById("eliminarIndice").value='';
    });

    document.getElementById("mostrarTareas").addEventListener("click", function(){
        mostrarTareas();
    });
});