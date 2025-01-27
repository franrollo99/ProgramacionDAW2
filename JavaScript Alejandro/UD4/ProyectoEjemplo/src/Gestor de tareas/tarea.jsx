import {useState} from 'react';

function Tarea({descripcion}){


    return(
        <>
            <div className='tarea'>
                <p>{descripcion}</p>
                {/* boton confirmar Si o No con pop up */}
                <button className='btn-eliminar'>Eliminar</button>
                {/* Tarea abierta por defecto */}
                <button className='btn-cambiarEstado'>Cambiar estado</button>
            </div>
        </>
    )
}

export default Tarea;