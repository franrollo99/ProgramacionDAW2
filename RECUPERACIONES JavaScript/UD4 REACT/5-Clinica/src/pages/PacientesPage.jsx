import { useEffect, useState } from 'react';
import $negocio from '../core/negocio';
import LineaPaciente from '../components/LineaPaciente';
import './PacientesPage.css';

function PacientesPage() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        // console.log('componente montado');
        getPacientes();
    }, []);

    const getPacientes = async () => {
        try {
            const respuesta = await $negocio.obtenerPacientes();
            setPacientes(respuesta);
        } catch (e) {
            console.log(e);
        }
    }

    return (<>
        <h1>Lista pacientes</h1>
        <div className='tabla'>
            <div className='fila cabecera'>
                <div>Nombre</div>
                <div>DNI</div>
                <div>Email</div>
                <div>Fecha Nacimiento</div>
                <div>Seguro Medico</div>
                <div>Acciones</div>
            </div>
            {pacientes.map(paciente => {
                return <LineaPaciente key={paciente.id} paciente={paciente}></LineaPaciente>;
            })}
        </div>
    </>);
}

export default PacientesPage;