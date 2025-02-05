import { useNavigate } from "react-router-dom";
import "./ListaPacientes.css";

function ListaPacientes({ paciente }){
    const { id = 0, nombre = "", dni = 0, email = "", telefono = "", fechaNacimiento = "", sexo = "", direccion = "", seguroMedico = ""} = paciente;
    const navegar = useNavigate();

    const handleClickProp = ()=>{
        navegar(`/pacientes/propiedades/${id}`);
    };

    const handleClickDel = ()=>{

    };

    return (
    <div className="lista">
        <p>{nombre}</p>
        <p>{dni}</p>
        <button onClick={handleClickProp}>Propiedades</button>
        <button onClick={handleClickDel}>Borrar</button>
    </div>
    );
}

export default ListaPacientes;