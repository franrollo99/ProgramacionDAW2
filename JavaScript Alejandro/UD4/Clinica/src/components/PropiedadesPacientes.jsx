import { useNavigate } from "react-router-dom";
import "./ListaPacientes.css";

function ListaPacientes({ paciente }){
    const { id = 0, nombre = "", dni = 0, email = "", telefono = "", fechaNacimiento = "", sexo = "", direccion = "", seguroMedico = ""} = paciente;
    const navegar = useNavigate();

    const handleClick = ()=>{
        navegar(`/pacientes/propiedades/${id}`);
    };

    return (
        <div className="lista">
            <p><strong>Nombre</strong>{nombre}</p>
            <p><strong>DNI</strong>{dni}</p>
            <p><strong>Email</strong>{email}</p>
            <p><strong>Telefono</strong>{telefono}</p>
            <p><strong>Fecha nacimiento</strong>{fechaNacimiento}</p>
            <p><strong>Sexo</strong>{sexo}</p>
            <p><strong>Direccion</strong>{direccion}</p>
            <p><strong>Seguro medico</strong>{seguroMedico}</p>
            <button onClick={handleClick}>Propiedades</button>
        </div>
    );
}

export default ListaPacientes;