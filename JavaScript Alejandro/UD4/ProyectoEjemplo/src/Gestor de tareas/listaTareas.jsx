import { useEffect, useState } from 'react';
import Tarea from './tarea.jsx';
import './listaTareas.css';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const [idContador, setIdCounter] = useState(1);
    const [filtro, setFiltro] = useState("todas");

    // LOCALSTORAGE
    // Si no pongo el await es un promise
    // useEffect[async() => {
    //     const TareaGuardada.await = cargarDatos.cargarDatos();
    // },{}];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Obtiene el contenido de la descripcion de la tarea
        const formData = new FormData(e.target);
        const descripcion = formData.get("descripcion");

        // .trim() elimina los espacios en blanco al principio y al final de la cadena
        // !== "" verifica que el resultado no sea una cadena vacia
        if (descripcion.trim() !== "") {
            const nuevaTarea = {
                id: idContador,
                descripcion,
                estado: "abierta"
            }
            setTareas([...tareas, nuevaTarea]);
            setIdCounter(idContador + 1);
        }

        // Se limpia el formulario
        e.target.reset();
    };

    const handleEliminar = (id) => {

        // QUE SOLO SE PUEDA ELIMINAR SI LA TAREA TIENE ESTADO CERRADO
        if(confirm('¿Estas seguro de que quieres borrar la tarea?')){
            // creo un nuevo array con .filter excluyendo a la tarea con el id que se pasa
            setTareas(tareas.filter((tarea) => tarea.id !== id));
        }
        
    };

    const handleCambiarEstado = (id) => {
        setTareas(
            tareas.map((tarea) =>
                tarea.id === id
                    ? { ...tarea, estado: tarea.estado === "abierta" ? "cerrada" : "abierta" }
                    : tarea
            )
        );
    };

    // Función para manejar el cambio de filtro
    const handleFiltro = (nuevoFiltro) => {
        setFiltro(nuevoFiltro);
    };

    // Filtrar las tareas según el filtro actual
    const tareasFiltradas = tareas.filter((tarea) => {
        if (filtro === "abiertas") return tarea.estado === "abierta";
        if (filtro === "cerradas") return tarea.estado === "cerrada";
        return true; // Si el filtro es "todas", mostrar todas las tareas
    });

    return (
        <>
            <div className='listaTareas'>
                <h1>Lista de tareas</h1>
                <form className='agregarTarea' onSubmit={handleSubmit}>
                    <label htmlFor="descripcion">Tarea:</label>
                    <input type="text" id="descripcion" name="descripcion" />
                    <button type="submit" className='btn-agregarTarea'>Agregar tarea</button>
                </form>
                <div className='filtros'>
                    <h2>Filtrar por:</h2>
                    <button className='btn-todas' onClick={() => handleFiltro("todas")}>
                        Todas
                    </button>
                    <button className='btn-abiertas' onClick={() => handleFiltro("abiertas")}>
                        Abiertas
                    </button>
                    <button className='btn-cerradas' onClick={() => handleFiltro("cerradas")}>
                        Cerradas
                    </button>
                </div>
                <div className='tareas'>
                    {tareasFiltradas.map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            descripcion={tarea.descripcion}
                            estado={tarea.estado}
                            eliminar={handleEliminar}
                            cambiarEstado={handleCambiarEstado}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListaTareas;
