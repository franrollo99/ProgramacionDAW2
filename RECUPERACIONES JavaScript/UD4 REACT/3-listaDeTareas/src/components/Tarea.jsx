function Tarea({ datos, eliminarTarea, cambiarEstado }) {

    const handleEliminar = () => {
        const confirmar = window.confirm("¿Estás seguro de que quieres eliminar esta tarea?");
        if (confirmar) {
            eliminarTarea();
        }
    };

    const handleCambiarEstado = () => {
        cambiarEstado();
    };

    return (
        <li>
            <p>{datos.nombre}</p>
            <p>{datos.estado}</p>
            <button onClick={handleEliminar}>Eliminar</button>
            <button onClick={handleCambiarEstado}>Cambiar estado</button>
        </li>
    );
}

export default Tarea;
