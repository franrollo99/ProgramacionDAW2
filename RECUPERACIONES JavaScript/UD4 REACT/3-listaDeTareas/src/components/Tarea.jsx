function Tarea({datos}){


    return (
        <li>
            <p>{datos.nombre}</p>
            <p>{datos.estado}</p>
            <button>Eliminar</button> {/* Con confirmacion */}
            <button>Cambiar estado</button> {/* Abierto o cerrado */}
        </li>
    );
}

export default Tarea;