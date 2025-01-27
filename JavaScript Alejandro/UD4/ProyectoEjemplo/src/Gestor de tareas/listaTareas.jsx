import {useState, useEffect} from 'react';
import Tarea from './tarea.jsx';
import './listaTareas.css';

function ListaTareas(){
    
    const [tareas, setTareas] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const descripcion = formData.get("descripcion");

        console.log(descripcion);
        
    }


    return (
        <>
            <div className='listaTareas' onSubmit={handleSubmit}>
                <h1>Lista de tareas</h1>
                <form className='agregarTarea'>
                    <label htmlFor="descripcion">Tarea:</label>
                    <input type="text" id='descripcion' name='descripcion'/>
                    <button type='submit' className='btn-agregarTarea'>Agregar tarea</button>
                </form>
                <div className='filtros'>
                    <h2>Filtrar por:</h2>
                    <button className='btn-todas'>Todas</button>
                    <button className='btn-abiertas'>Abiertas</button>
                    <button className='btn-cerradas'>Cerradas</button>
                </div>
                <div className='tareas'>
                    {/* estado */}
                    <Tarea descripcion='Descripcion'/>
                </div>
            </div>
        </>
    );
}

export default ListaTareas;