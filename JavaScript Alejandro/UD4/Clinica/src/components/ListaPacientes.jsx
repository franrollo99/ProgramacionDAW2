import { useNavigate } from "react-router-dom";
import "./ListaPacientes.css";
import $negocio from "../core/negocio.js";

function ListaPacientes({ paciente }){
    const { id = 0, nombre = "", dni = 0, email = "", telefono = "", fechaNacimiento = "", sexo = "", direccion = "", seguroMedico = ""} = paciente;
    const navegar = useNavigate();

    const handleClickProp = (id)=>{
        navegar(`/pacientes/propiedades/${id}`);
    };

    const handleClickDel = (id)=>{
        if(window.confirm("¿Seguro que quieres eliminar este paciente?")){
            $negocio.eliminarPaciente(id)
            .then(()=>{
                window.location.reload();
            });
        }
    };

    return (
    <div className="lista">
        <p>{nombre}</p>
        <p>{dni}</p>
        <button onClick={()=>{handleClickProp(id)}}>Propiedades</button>
        <button onClick={()=>{handleClickDel(id)}}>Borrar</button>
    </div>
    );
}

export default ListaPacientes;