import {useNavigate} from 'react-router-dom';

function LineaPaciente({paciente}){
    const navegar = useNavigate();

    const handleClick = ()=>{
        navegar(`./paciente/${paciente.id}`)
    }
    
    return(
        <div className="fila">
            <div>{paciente.nombre}</div>
            <div>{paciente.dni}</div>
            <div>{paciente.email}</div>
            <div>{paciente.fechaNacimiento}</div>
            <div>{paciente.seguroMedico}</div>
            <div><button onClick={handleClick}>Ver</button></div>
        </div>
    );
}

export default LineaPaciente;