import { useState } from "react";
import Tarea from "./tarea";;

function ListaTareas(){

    const [tareas, setTareas] = useState([]);

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
    };

    const handleClickTodas = () => {

    };

    const handleClickAbiertas = () => {
        
    };

    const handleClickCerradas = () => {
        
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombreTarea">Nombre de tarea</label> {/* htmlFor en vez de for */}
                <input type="text" name="nombreTarea" id="nombreTarea" />
                <input type="submit" value="Crear" />
            </form>
            <div>
                <button>Todas</button>
                <button>Abiertas</button> {/* Por defecto */}
                <button>Cerradas</button>
            </div>
            <ul>
                {tareas.map((tarea, indice) => {
                    return (
                        <Tarea datos={tarea} key={indice + 1} />
                    );
                })}
            </ul>
        </>
    );
}

export default ListaTareas;