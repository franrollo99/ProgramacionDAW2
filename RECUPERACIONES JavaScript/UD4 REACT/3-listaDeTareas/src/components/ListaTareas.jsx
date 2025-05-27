import { useState } from "react";
import Tarea from "./tarea";;

function ListaTareas(){

    const [tarea, setTarea] = useState();

    


    return (
        <>
            <label htmlFor="nombreTarea">Nombre de tarea</label>
            <input type="text" name="nombreTarea" id="nombreTarea" />
            <br />
            <button>Crear</button>
            <div>
                <button>Todas</button>
                <button>Abiertas</button> {/* Por defecto */}
                <button>Cerradas</button>
            </div>
        </>
    );
}

export default ListaTareas;