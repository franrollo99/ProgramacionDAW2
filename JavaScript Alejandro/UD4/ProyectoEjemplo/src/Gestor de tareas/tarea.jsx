function Tarea({ id, descripcion, estado, eliminar, cambiarEstado }) {
    return (
        <div className='tarea'>
            <p>{descripcion}</p>
            <p>Estado: {estado}</p>
            {/* Botón para eliminar */}
            <button className='btn-eliminar' onClick={() => eliminar(id)}>
                Eliminar
            </button>
            {/* Botón para cambiar el estado */}
            <button className='btn-cambiarEstado' onClick={() => cambiarEstado(id)}>
                Cambiar estado
            </button>
        </div>
    );
}

export default Tarea;
