import { useState } from "react";
import Tarea from "./tarea";

function ListaTareas() {

    const [tareas, setTareas] = useState([]);
    const [filtro, setFiltro] = useState("abierta"); // por defecto abiertas

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nombreTarea = formData.get('nombreTarea');

        const copiaTareas = [...tareas];
        copiaTareas.push({
            nombre: nombreTarea,
            estado: 'abierta'
        });

        setTareas(copiaTareas);
        e.target.reset();
    };

    // Botones de filtro
    const handleClickTodas = () => setFiltro("todas");
    const handleClickAbiertas = () => setFiltro("abierta");
    const handleClickCerradas = () => setFiltro("cerrada");

    // Lógica de filtrado
    const tareasFiltradas = tareas.filter(tarea => {
        if (filtro === "todas") return true;
        return tarea.estado === filtro;
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombreTarea">Nombre de tarea</label>
                <input type="text" name="nombreTarea" id="nombreTarea" />
                <input type="submit" value="Crear" />
            </form>

            <div>
                <button onClick={handleClickTodas}>Todas</button>
                <button onClick={handleClickAbiertas}>Abiertas</button>
                <button onClick={handleClickCerradas}>Cerradas</button>
            </div>

            <ul>
                {tareasFiltradas.map((tarea, indice) => (
                    <Tarea datos={tarea} key={indice} onEliminar={() => {
                            const copia = [...tareas];
                            const indexGlobal = tareas.indexOf(tarea);
                            if (indexGlobal !== -1) {
                                copia.splice(indexGlobal, 1);
                                setTareas(copia);
                            }
                        }}
                        onCambiarEstado={() => {
                            const copia = [...tareas];
                            const indexGlobal = tareas.indexOf(tarea);
                            if (indexGlobal !== -1) {
                                copia[indexGlobal].estado = copia[indexGlobal].estado === 'abierta' ? 'cerrada' : 'abierta';
                                setTareas(copia);
                            }
                        }}
                    />
                ))}
            </ul>
        </>
    );
}

export default ListaTareas;
